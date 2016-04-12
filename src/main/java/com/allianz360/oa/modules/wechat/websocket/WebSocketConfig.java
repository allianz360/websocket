package com.allianz360.oa.modules.wechat.websocket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

/**
 * @desc：Websocket请求处理回调方法，不要忘记在springmvc的配置文件中配置对此类的自动扫描<br/>参考：http://www.open-open.com/lib/view/open1408453906131.html
 * @author: Stone+
 * @time: 2015-6-12 下午4:36:19
 * @ver: 1.0.0
 */
@Configuration
@EnableWebMvc
@EnableWebSocket
public class WebSocketConfig extends WebMvcConfigurerAdapter implements
		WebSocketConfigurer {

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		// 用来注册websocket server实现类，第二个参数是访问websocket的地址
		registry.addHandler(webSocketHander(), "/websocket").addInterceptors(
				new HandshakeInterceptor());
		// 用来注册socketjs实现类，第二个参数是访问socketjs的地址
		registry.addHandler(webSocketHander(), "/socketjs/websocket")
				.addInterceptors(new HandshakeInterceptor()).withSockJS();
	}

	@Bean
	public WebSocketHandler webSocketHander() {
		return new WebSocketEndPoint();
	}
}
