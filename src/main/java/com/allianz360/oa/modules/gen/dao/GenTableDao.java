/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.allianz360.oa.modules.gen.dao;

import com.allianz360.oa.common.persistence.CrudDao;
import com.allianz360.oa.common.persistence.annotation.MyBatisDao;
import com.allianz360.oa.modules.gen.entity.GenTable;

/**
 * 业务表DAO接口
 * @author ThinkGem
 * @version 2013-10-15
 */
@MyBatisDao
public interface GenTableDao extends CrudDao<GenTable> {
	
}
