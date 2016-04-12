/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.allianz360.oa.modules.cms.dao;

import com.allianz360.oa.common.persistence.CrudDao;
import com.allianz360.oa.common.persistence.annotation.MyBatisDao;
import com.allianz360.oa.modules.cms.entity.ArticleData;

/**
 * 文章DAO接口
 * @author ThinkGem
 * @version 2013-8-23
 */
@MyBatisDao
public interface ArticleDataDao extends CrudDao<ArticleData> {
	
}
