/**
 * 协议
 */
document
		.write('<script src="../resources/js/websocket/protocol.js"><\/script>');

// 申明一个WEBSOCKET对象
// 参数是需要连接的服务器端的地址，同http协议使用http://开头一样，WebSocket协议的URL使用ws://开头，另外安全的WebSocket协议使用wss://开头
// 参考：http://blog.csdn.net/yl02520/article/details/7296223
var socket;
if ('WebSocket' in window) {
	socket = new WebSocket("ws://" + SERVER_PATH + "/websocket");
} else if ('MozWebSocket' in window) {
	socket = new MozWebSocket("ws://" + SERVER_PATH + "/websocket");
} else {
	socket = new SockJS("http://" + SERVER_PATH + "/socketjs/websocket");
}
// 当Browser和WebSocketServer连接成功后，会触发onopen消息
socket.onopen = function(evt) {
	openOnline();
};

// 当Browser接收到WebSocketServer发送过来的数据时，就会触发onmessage消息，参数evt中包含server传输过来的数据
socket.onmessage = function(evt) {
	analyzeMessage(evt);
};

// 当Browser接收到WebSocketServer端发送的关闭连接请求时，就会触发onclose消息
socket.onclose = function(evt) {
	closeOffline(evt);
};

// 如果连接失败，发送、接收数据失败或者处理数据出现错误，browser会触发onerror消息
socket.onerror = function(evt) {
	alert("error");
};

/**
 * 解析消息
 * 
 * @param evt
 */
function analyzeMessage(evt) {
	alert(evt.data);
	var msgs = evt.data.split(_SEPARATOR);
	var protocolHeader = msgs[0];
	var msg = msgs[1];
	switch (protocolHeader) {
	case _SYS_PROMPT:
		break;
	case _TEXT_MSG:
		var uid = msgs[2];
		showTextMsg(msg,uid);
		break;
	case _IMG_MSG:
		var uid = msgs[2];
		showImgMsg(msg,uid);
		break;
	case _AUDIO_MSG:
		break;
	case _VIDEO_MSG:
		break;
	case _USER_ONLINE://用户上线
		userOnline(msg);
		break;
	case _USER_OFFLINE://用户离线
		userOffLine(msg);
		break;
	}
}
