<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page
	import="org.apache.shiro.web.filter.authc.FormAuthenticationFilter"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<title>登录-</title>
<link rel="stylesheet" href="${ctxStatic}/dianke360/css/style.css">
<link rel="stylesheet" media="screen and (min-width: 1160px)"
	href="${ctxStatic}/dianke360/css/wbig.css" />
<script type="text/javascript"
	src="${ctxStatic}/dianke360/js/jquery-1.9.0.js"></script>
<link
	href="${ctxStatic}/jquery-validation/1.11.0/jquery.validate.min.css"
	type="text/css" rel="stylesheet" />
<script
	src="${ctxStatic}/jquery-validation/1.11.0/jquery.validate.min.js"
	type="text/javascript"></script>

<script type="text/javascript">
$(document).ready(function() {

	$("#loginForm").validate({
		messages: {
			password: {required: "密码不允许为空!"},
			username: {required: "手机号码不允许为空!"}
		}
	}
	);
	$("input").click(function(){
		$(".form-msg").hide();
	});
});
	</script>
<body>
	<div class="fullh baf">

		<!--登录注册头部end-->
		<!--内容begin-->
		<div class="login">
			<div class="container">
				<div class="login-con">
					<h3>用户登录</h3>
					<!--form表单begin-->
					<div class="login-form">
						<form id="loginForm" class="form-signin" action="${ctx}/login"
							method="post">
							<p class="form-item">
								<span class="form-item-icon"><i class="iconm user">用户名</i></span>
								<input class="input required" name="username" type="text"
									placeholder="手机号">
							</p>
							<p class="form-item">
								<span class="form-item-icon"><i class="iconm pwd">密码</i></span>
								<input class="input required" name="password" id="password"
									type="password" placeholder="密码">
							</p>

							<p class="form-item">
								<input class="btn btn-large btn-primary" type="submit"
									value="登 录" />&nbsp;&nbsp; <label for="rememberMe"
									title="下次不需要再登录"><input type="checkbox" id="rememberMe"
									name="rememberMe" ${rememberMe ? 'checked' : ''} /> 记住我（公共场所慎用）</label>
							</p>


							 <p class="form-msg"><span>${message}</span><i></i></p>
						</form>
					</div>
					<!--form表单end-->
				</div>
			</div>
		</div>
		<div class="copyright">Copyright © 2015 安联财产保险（中国）有限公司 版权所有</div>
		<!--底部版权end-->
	</div>
</body>
</html>
