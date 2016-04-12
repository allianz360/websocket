安联保险集团（Allianz）拥有125年的品牌历史,业务遍布世界多个国家和地区,为全球客户提供服务,实施24小时全球紧急救援和旅行支援服务.安联申根之王、全球旅行险、亚洲旅行险等险种深受广大用户信赖,凭借在全球保险服务领域雄厚实力,在中国安联已收获千万用户信任。
平台简介

Allianz是基于多个优秀的开源项目，高度整合封装而成的高效，高性能，强安全性的开源Java EE快速开发平台。

Allianz本身是以Spring Framework为核心容器，Spring MVC为模型视图控制器，MyBatis为数据访问层， Apache Shiro为权限授权层，Ehcahe对常用数据进行缓存，Activit为工作流引擎。

Allianz主要定位于企业信息化领域，已内置企业信息化系统的基础功能和高效的代码生成工具， 包括：系统权限组件、数据权限组件、数据字典组件、核心工具组件、视图操作组件、工作流组件、代码生成等。 前端界面风格采用了结构简单、性能优良、页面美观大气的Twitter Bootstrap页面展示框架。 采用分层设计、双重验证、提交数据安全编码、密码加密、访问验证、数据权限验证。 使用Maven做项目管理，提高项目的易开发性、扩展性。

Allianz目前包括以下三大模块，系统管理（SYS）模块、 内容管理（CMS）模块、在线办公（OA）模块、代码生成（GEN）模块。 系统管理模块 ，包括企业组织架构（用户管理、机构管理、区域管理）、 菜单管理、角色权限管理、字典管理等功能； 内容管理模块 ，包括内容管理（文章、链接），栏目管理、站点管理、 公共留言、文件管理、前端网站展示等功能； 在线办公模块 ，提供简单的请假流程实例。

Allianz 提供了常用工具进行封装，包括日志工具、缓存工具、服务器端验证、数据字典、当前组织机构数据 （用户、机构、区域）以及其它常用小工具等。另外还提供一个强大的在线 代码生成 工具， 此工具提供简单的单表、一对多、树结构功能的生成，如果对外观要求不是很高，生成的功能就可以用了。 如果你使用了Allianz基础框架，就可以很高效的快速开发出，优秀的信息管理系统。
内置功能

    用户管理：用户是系统操作者，该功能主要完成系统用户配置。
    机构管理：配置系统组织机构（公司、部门、小组），树结构展现，可随意调整上下级。
    区域管理：系统城市区域模型，如：国家、省市、地市、区县的维护。
    菜单管理：配置系统菜单，操作权限，按钮权限标识等。
    角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
    字典管理：对系统中经常使用的一些较为固定的数据进行维护，如：是否、男女、类别、级别等。
    操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
    连接池监视：监视当期系统数据库连接池状态，可进行分析SQL找出系统性能瓶颈。
    工作流引擎：实现业务工单流转、在线流程设计器。

为何选择Allianz

    使用 Apache License 2.0 协议，源代码完全开源，无商业限制。
    使用目前主流的Java EE开发框架，简单易学，学习成本低。
    数据库无限制，目前支持MySql、Oracle，可扩充SQL Server、PostgreSQL、H2等。
    模块化设计，层次结构清晰。内置一系列企业信息管理的基础功能。
    操作权限控制精密细致，对所有管理链接都进行权限验证，可控制到按钮。
    数据权限控制精密细致，对指定数据集权限进行过滤，七种数据权限可供选择。
    提供在线功能代码生成工具，提高开发效率及质量。
    提供常用工具类封装，日志、缓存、验证、字典、组织机构等，常用标签（taglib），获取当前组织机构、字典等数据。
    兼容目前最流行浏览器（IE7+、Chrome、Firefox）IE6也支持，但体验效果差。

技术选型

1、后端

    核心框架：Spring Framework 4.0
    安全框架：Apache Shiro 1.2
    视图框架：Spring MVC 4.0
    服务端验证：Hibernate Validator 5.1
    布局框架：SiteMesh 2.4
    工作流引擎：Activiti 5.15、FoxBPM 6
    任务调度：Spring Task 4.0
    持久层框架：MyBatis 3.2
    数据库连接池：Alibaba Druid 1.0
    缓存框架：Ehcache 2.6、Redis
    日志管理：SLF4J 1.7、Log4j
    工具类：Apache Commons、Jackson 2.2、Xstream 1.4、Dozer 5.3、POI 3.9

2、前端

    JS框架：jQuery 1.9。
    CSS框架：Twitter Bootstrap 2.3.1。
    客户端验证：JQuery Validation Plugin 1.11。
    富文本：CKEcitor
    文件管理：CKFinder
    动态页签：Jerichotab
    手机端框架：Jingle
    数据表格：jqGrid
    对话框：jQuery jBox
    下拉选择框：jQuery Select2
    树结构控件：jQuery zTree
    日期控件： My97DatePicker

4、平台

    服务器中间件：在Java EE 5规范（Servlet 2.5、JSP 2.1）下开发，支持应用服务器中间件 有Tomcat 6、Jboss 7、WebLogic 10、WebSphere 8。
    数据库支持：目前仅提供MySql和Oracle数据库的支持，但不限于数据库，平台留有其它数据库支持接口， 可方便更改为其它数据库，如：SqlServer 2008、MySql 5.5、H2等
    开发环境：Java EE、Eclipse、Maven、Git

安全考虑

    开发语言：系统采用Java 语言开发，具有卓越的通用性、高效性、平台移植性和安全性。
    分层设计：（数据库层，数据访问层，业务逻辑层，展示层）层次清楚，低耦合，各层必须通过接口才能接入并进行参数校验（如：在展示层不可直接操作数据库），保证数据操作的安全。
    双重验证：用户表单提交双验证：包括服务器端验证及客户端验证，防止用户通过浏览器恶意修改（如不可写文本域、隐藏变量篡改、上传非法文件等），跳过客户端验证操作数据库。
    安全编码：用户表单提交所有数据，在服务器端都进行安全编码，防止用户提交非法脚本及SQL注入获取敏感数据等，确保数据安全。
    密码加密：登录用户密码进行SHA1散列加密，此加密方法是不可逆的。保证密文泄露后的安全问题。
    强制访问：系统对所有管理端链接都进行用户身份权限验证，防止用户直接填写url进行访问。

快速体验

    具备运行环境：JDK1.6+、Maven3.0+、MySql5+或Oracle10g+。
    修改src\main\resources\Allianz.properties文件中的数据库设置参数。
    根据修改参数创建对应MySql或Oracle数据库用户和参数。
    运行bin\init-db.bat脚本，即可导入表结构及演示数据(linux操作系统：在控制台中切换至项目根目录，运行命令：mvn antrun:run -Pinit-db)
    运行bin\run-tomcat7.bat或bin\run-jetty.bat，启动Web服务器（第一次运行，需要下载依赖jar包，请耐心等待）。
    最高管理员账号，用户名：thinkgem 密码：admin

常见问题

    有时出现文字乱码：修改Tomcat的server.xml文件的Connector项，增加URIEncoding="UTF-8"
    用一段时间提示内存溢出，请修改JVM参数：-Xmx512m -XX:MaxPermSize=256m
    为什么新建菜单后看不到新建的菜单？因为授权问题，菜单管理只允许最高管理员账号管理（最高管理员默认账号：thinkgem 密码：admin）。

更多文档


一个人的个人能力再强，也无法战胜一个团队，希望兄弟姐妹的支持，能够贡献出自己的部分代码，参与进来共同完善它(^_^)。

怎么共享我的代码：手把手教你如何加入到github的开源世界！
版权声明

本软件使用 Apache License 2.0 协议，请严格遵照协议内容：

    需要给代码的用户一份Apache Licence。
    如果你修改了代码，需要在被修改的文件中说明。
    在延伸的代码中（修改和有源代码衍生的代码中）需要带有原来代码中的协议，商标，专利声明和其他原来作者规定需要包含的说明。
    如果再发布的产品中包含一个Notice文件，则在Notice文件中需要带有Apache Licence。你可以在Notice中增加自己的许可，但不可以表现为对Apache Licence构成更改。
    Apache Licence也是对商业应用友好的许可。使用者也可以在需要的时候修改代码来满足需要并作为开源或商业产品发布/销售

为何使用MyBatis

    学习成本：Hibernate的真正掌握要比Mybatis来得难不少。Mybatis框架相对简单很容易上手，也更加灵活。 对于学习过Hibernate的用户，学习起MyBatis也更容易上手。

    开发成本：大家都说Hibernate开发效率高，个人认为MyBatis的开发效率并不比Hibernate低， 通过代码生成器和封装开发效率不是问题，并且MyBatis可控性比较高，并更易于维护。

    性能方面：由于Hibernate比较难以掌握，性能方面也成为了Hibernate的问题瓶颈，当然如果你对Hibernate非常熟， Hibernate性能上定不是问题。但对于大多数情况下，真正掌握Hibernate的人少之又少，然而的也就造就了项目风险加大。

    多数据库支持：有些人说MyBatis对多数据库支持困难，我认为这个不是问题，虽说目前Allianz仅提供对MySql或Oracle 数据库的支持，但对于支持其它数据库的改动也不是很麻烦，SQL是被专门写在XML中，对于大多数SQL来说都是通用的， 对于不同的数据库可通过dbName区分和修改各别的SQL片段即可。
