/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.allianz360.oa.modules.sys.dao;

import com.allianz360.oa.common.persistence.TreeDao;
import com.allianz360.oa.common.persistence.annotation.MyBatisDao;
import com.allianz360.oa.modules.sys.entity.Office;

/**
 * 机构DAO接口
 * @author ThinkGem
 * @version 2014-05-16
 */
@MyBatisDao
public interface OfficeDao extends TreeDao<Office> {
	
}
