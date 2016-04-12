package com.allianz360.oa.modules.wechat.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/chat")
public class RootController {

	@RequestMapping(value = "/room")
	public ModelAndView chatRoom() {
		String room = "room001";
		ModelAndView mv = new ModelAndView();
		mv.addObject("room", room);
		mv.setViewName("/chat/room");
		return mv;
	}
}
