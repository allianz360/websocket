<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>聊天室</title>
</head>
<body>
	<div>
		欢迎来到聊天室
		<input type="file" accept="video/*;capture=camcorder">
	</div>
	<script type="text/javascript">
		initialize();
		function initialize() {
			console.log("initialzing room=${roomKey}");
			card = document.getElementById("card");
			localVideo = document.getElementById("localVideo");
			miniVideo = document.getElementById("miniVideo");
			remoteVideo = document.getElementById("remoteVideo");
			resetStatus();
			openChannel();
			getUserMedia();
		}

		function resetStatus() {

		}

		function openChannel() {

		}

		function getUserMedia() {
			try {
				navigator.webkitGetUserMedia({
					"video" : true,
					"audio" : true
				}, onUserMediaSuccess, onUserMediaError);
				console.log("Request access to local media with new syntax.");
			} catch (e) {
				try {
					navigator.webkitGetUserMedia("video,audio",
							onUserMediaSuccess, onUserMediaError);
					console
							.log("Requested access to local media with old syntax.");
				} catch (e) {
					alert("webkitGetUserMedia() failed. Is the MediaStream flag enabled in about:flags?");
					console.log("webkitGetUserMedia failed with exception: "
							+ e.message);
				}
			}
		}

		function onUserMediaSuccess(stream) {
			console.log("User has granted access to local media.");
			var url = webkitURL.createObjectURL(stream);
			localVideo.style.opacity = 1;
			localVideo.src = url;
			localStream = stream;
			// Caller creates PeerConnection.
			if (initiator)
				maybeStart();
		}

		function maybeStart() {
			if (!started && localStream && channelReady) {
				setStatus("Connecting...");
				console.log("Creating PeerConnection.");
				createPeerConnection();
				console.log("Adding local stream.");
				pc.addStream(localStream);
				started = true;
				// Caller initiates offer to peer.
				if (initiator)
					doCall();
			}
		}

		function doCall() {
			console.log("Sending offer to peer.");
			if (isRTCPeerConnection) {
				pc.createOffer(setLocalAndSendMessage, null, mediaConstraints);
			} else {
				var offer = pc.createOffer(mediaConstraints);
				pc.setLocalDescription(pc.SDP_OFFER, offer);
				sendMessage({
					type : 'offer',
					sdp : offer.toSdp()
				});
				pc.startIce();
			}
		}

		function setLocalAndSendMessage(sessionDescription) {
			pc.setLocalDescription(sessionDescription);
			sendMessage(sessionDescription);
		}

		function sendMessage(message) {
			var msgString = JSON.stringify(message);
			console.log('发出信息 : ' + msgString);
			path = 'message?r=${roomKey}' + '&u=${user}';
			var xhr = new XMLHttpRequest();
			xhr.open('POST', path, true);
			xhr.send(msgString);
		}
	</script>
</body>
</html>