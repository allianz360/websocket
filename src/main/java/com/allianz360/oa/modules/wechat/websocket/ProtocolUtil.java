package com.allianz360.oa.modules.wechat.websocket;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.socket.WebSocketSession;

public class ProtocolUtil {
	/**
	 * 系统提示
	 */
	public static String _SYS_PROMPT = "sysprompt";

	/**
	 * 文本消息
	 */
	public static String _TEXT_MSG = "textmsg";

	/**
	 * 图片消息
	 */
	public static String _IMG_MSG = "imgmsg";

	/**
	 * 声音消息
	 */
	public static String _AUDIO_MSG = "auidomsg";

	/**
	 * 视频消息
	 */
	public static String _VIDEO_MSG = "videomsg";

	/**
	 * 协议分隔符
	 */
	public static String _SEPARATOR = "::";

	/**
	 * 新用户上线
	 */
	public static String _USER_ONLINE = "useronline";
	
	/**
	 * 用户离线
	 */
	public static String _USER_OFFLINE = "useroffline";
	
	/**
	 * 客服上线
	 */
	public static String _CUSTOMER_ONLINE = "customeronline";
	
	/**
	 * 客服离线
	 */
	public static String _CUSTOMER_OFFLINE="customeroffline";
	
	/**
	 * 发给客服的消息
	 */
	public static String _TOSERVER="toserver";
	
	/**
	 * 发给用户的消息
	 */
	public static String _TOCLIENT="toclient";
	
	/**
	 * 客服列表
	 */
	public static Map<String, WebSocketSession> _CUSTOMER_MAP = new HashMap<String, WebSocketSession>();
	
	/**
	 * 用户列表
	 */
	public static Map<String, WebSocketSession> _USER_MAP = new HashMap<String, WebSocketSession>();
	
	/**
	 * 用户和客服的关系
	 */
	public static Map<String, String> _USER_CUSTOMER_Relation = new HashMap<String, String>();
	
	/**
	 * 主机地址和用户id关系
	 */
	public static Map<String, String> _HOST_ID_RELATION = new HashMap<String, String>();
}
