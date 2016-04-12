package com.allianz360.oa.modules.wechat.web;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/upload")
public class UploadController {

	/**
	 * 图片上传
	 * 
	 * @param file
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/uploadimg", produces = { "text/plain;charset=utf-8" })
	@ResponseBody
	public String uploadImg(@RequestParam("file") MultipartFile file,
			HttpSession session, HttpServletRequest request) {
		JSONObject json = new JSONObject();
		try {
			if (!file.isEmpty()) {// 文件不为空
				// 获得完整的文件名
				String fullFielName = file.getOriginalFilename();
				// 设置新的文件名
				String fileName = System.currentTimeMillis()
						+ fullFielName.substring(fullFielName.lastIndexOf("."));
				SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
				String dateDir = sdf.format(new Date());
				String root = request.getSession().getServletContext()
						.getRealPath("/");
				// 文件保存路径
				String path = root + File.separator + "upload" + File.separator
						+ dateDir;
				// 文件目录是否存在，不存在就创建
				File targetFile = new File(path);
				if (!targetFile.isDirectory()) {
					targetFile.mkdirs();
				}
				// 保存文件
				file.transferTo(new File(targetFile + File.separator + fileName));
				// 返回文件远程地址
				json.put(
						"remoteurl",
						request.getScheme() + "://" + request.getServerName()
								+ ":" + request.getServerPort() + "/"
								+ request.getContextPath() + "/upload" + "/"
								+ dateDir + "/" + fileName);
				json.put("result", 0);
			} else {
				json.put("result", 1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toJSONString();
	}
}
