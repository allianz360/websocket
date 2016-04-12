package com.allianz360.oa.modules.wechat.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/chat")
public class ClientController {


	@RequestMapping(value = "/client")
	public ModelAndView clientPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/chat/clientpage");
		return mv;
	}

}
