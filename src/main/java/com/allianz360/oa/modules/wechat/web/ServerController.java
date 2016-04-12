package com.allianz360.oa.modules.wechat.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/chat")
public class ServerController {

	@RequestMapping(value = "/server")
	public ModelAndView serverPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/chat/serverpage");
		return mv;
	}

}
