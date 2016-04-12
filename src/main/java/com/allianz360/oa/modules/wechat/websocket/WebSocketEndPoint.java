package com.allianz360.oa.modules.wechat.websocket;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 * @desc：Websocket处理类
 * @author: Stone+
 * @time: 2015-6-12 下午4:20:50
 * @ver: 1.0.0
 */
public class WebSocketEndPoint extends TextWebSocketHandler {

	@Override
	protected void handleTextMessage(WebSocketSession session,
			TextMessage message) throws Exception {
		super.handleTextMessage(session, message);
		// 获得访问者主机
		String hostStr = session.getRemoteAddress().getHostString() + ":"
				+ session.getRemoteAddress().getPort();
		// 获得消息
		String msg = message.getPayload();
		// 协议信息
		String[] protocolMsg = msg.split(ProtocolUtil._SEPARATOR);
		// 协议头
		String protocolHeader = protocolMsg[0];

		try {
			if (ProtocolUtil._CUSTOMER_ONLINE.equals(protocolHeader)) {// 客服上线
				// 客服id
				String customerId = protocolMsg[1];
				System.out.println("=====客服：" + customerId + "上线了=====");
				// 存储客服信息
				ProtocolUtil._CUSTOMER_MAP.put(customerId, session);
				ProtocolUtil._HOST_ID_RELATION.put(hostStr, customerId);
				//客服再次上线加载用户列表
				for (String key : ProtocolUtil._USER_CUSTOMER_Relation.keySet()) {
					String val = ProtocolUtil._USER_CUSTOMER_Relation.get(key);
					if (val.equals(customerId)) {
						TextMessage userOnlineMessage = new TextMessage(
								ProtocolUtil._USER_ONLINE
										+ ProtocolUtil._SEPARATOR + key);
						session.sendMessage(userOnlineMessage);
					}
				}
			} else if (ProtocolUtil._USER_ONLINE.equals(protocolHeader)) {// 用戶上线
				// 客服id
				String userId = protocolMsg[1];
				System.out.println("=====用户：" + userId + "上线了=====");
				// 存储客服信息
				ProtocolUtil._USER_MAP.put(userId, session);
				ProtocolUtil._HOST_ID_RELATION.put(hostStr, userId);
				// 分配客服
				String customerId = getCustomer();
				if (null != customerId) {
					// 用户对应客服
					ProtocolUtil._USER_CUSTOMER_Relation
							.put(userId, customerId);
					WebSocketSession customerSession = ProtocolUtil._CUSTOMER_MAP
							.get(customerId);
					TextMessage userOnlineMessage = new TextMessage(
							ProtocolUtil._USER_ONLINE + ProtocolUtil._SEPARATOR
									+ userId);
					customerSession.sendMessage(userOnlineMessage);
				} else {
					TextMessage userOnlineMessage = new TextMessage(
							ProtocolUtil._SYS_PROMPT + ProtocolUtil._SEPARATOR
									+ "当前没有客服在线！");
					session.sendMessage(userOnlineMessage);
				}
			} else if (ProtocolUtil._TEXT_MSG.equals(protocolHeader)) {// 文本消息
				// 发送给谁
				String from = protocolMsg[1];
				// 用户编号
				String userId = protocolMsg[2];
				// 文本消息
				String textMsg = protocolMsg[3];
				TextMessage textMessage = new TextMessage(
						ProtocolUtil._TEXT_MSG + ProtocolUtil._SEPARATOR
								+ textMsg + ProtocolUtil._SEPARATOR + userId);
				if (ProtocolUtil._TOCLIENT.equals(from)) {// 客服发送给客户
					WebSocketSession clientSession = ProtocolUtil._USER_MAP
							.get(userId);
					clientSession.sendMessage(textMessage);
				} else {// 客户发送给客服
					WebSocketSession serverSession = ProtocolUtil._CUSTOMER_MAP
							.get(ProtocolUtil._USER_CUSTOMER_Relation
									.get(userId));
					serverSession.sendMessage(textMessage);
				}

			} else if (ProtocolUtil._IMG_MSG.equals(protocolHeader)) {// 图片消息
				// 发送给谁
				String from = protocolMsg[1];
				// 用户编号
				String userId = protocolMsg[2];
				// 文本消息
				String textMsg = protocolMsg[3];
				TextMessage textMessage = new TextMessage(ProtocolUtil._IMG_MSG
						+ ProtocolUtil._SEPARATOR + textMsg
						+ ProtocolUtil._SEPARATOR + userId);
				if (ProtocolUtil._TOCLIENT.equals(from)) {// 客服发送给客户
					WebSocketSession clientSession = ProtocolUtil._USER_MAP
							.get(userId);
					clientSession.sendMessage(textMessage);
				} else {// 客户发送给客服
					WebSocketSession serverSession = ProtocolUtil._CUSTOMER_MAP
							.get(ProtocolUtil._USER_CUSTOMER_Relation
									.get(userId));
					serverSession.sendMessage(textMessage);
				}
			} else if (ProtocolUtil._VIDEO_MSG.equals(protocolHeader)) {// 语音消息

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session,
			CloseStatus closeStatus) throws Exception {
		// 获得访问者主机
		String hostStr = session.getRemoteAddress().getHostString() + ":"
				+ session.getRemoteAddress().getPort();
		String id = ProtocolUtil._HOST_ID_RELATION.get(hostStr);
		boolean userOffline = false;
		if (!isMultiple(id)) {//
			userOffline = ProtocolUtil._USER_MAP.get(id) != null;
		}
		if (userOffline) {// 用户掉线
			// 移除用户
			ProtocolUtil._USER_MAP.remove(id);
			WebSocketSession customerSession = ProtocolUtil._CUSTOMER_MAP
					.get(ProtocolUtil._USER_CUSTOMER_Relation.get(id));
			if (null != customerSession) {// 发送用户离线消息给客服
				TextMessage userOffLineMsg = new TextMessage(
						ProtocolUtil._USER_OFFLINE + ProtocolUtil._SEPARATOR
								+ id);
				customerSession.sendMessage(userOffLineMsg);
				// 移除用户和客服关系
				ProtocolUtil._USER_CUSTOMER_Relation.remove(id);
			}
		} else {// 客服掉线
			ProtocolUtil._CUSTOMER_MAP.remove(id);
		}
		// 移除ip和用户关系
		ProtocolUtil._HOST_ID_RELATION.remove(hostStr);
	}

	@Override
	public void handleTransportError(WebSocketSession session,
			Throwable exception) throws Exception {
		super.handleTransportError(session, exception);
	}

	/**
	 * 获得空闲客服
	 * 
	 * @return
	 */
	public String getCustomer() {
		String customerId = null;
		for (String customerKey : ProtocolUtil._CUSTOMER_MAP.keySet()) {
			customerId = customerKey;
			break;
			/*
			 * for(String userKey :
			 * ProtocolUtil._USER_CUSTOMER_Relation.keySet()){
			 * if(value.equals(map.get(ks)){ System.out.println(ks); } }
			 */
		}
		return customerId;
	}

	/**
	 * 判断用户是否存在多个ip
	 * 
	 * @param key
	 * @return
	 */
	private boolean isMultiple(String key) {
		boolean bool = false;
		int count = 0;
		for (String k : ProtocolUtil._HOST_ID_RELATION.keySet()) {
			if (ProtocolUtil._HOST_ID_RELATION.get(k).equals(key)) {
				count++;
			}
		}
		if (count > 1) {
			bool = true;
		}
		return bool;
	}
}
