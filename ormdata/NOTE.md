什么是驱动程序
	驱动程序是连接内存和其他存储介质的桥梁
	mysql驱动程序是连接内存数据和mysql数据的桥梁
	mysql驱动程序通常使用
		mysql
		mysql2
			mysql-native

安装mysql2   npm i mysql2

防止sql注入
	sql注入
		用户通过注入sql语句到最终查询中，导致了整个sql与预期行为不符
	mysql支持变量
		变量的内容不作为任何sql关键字

		https://github.com/sidorares/node-mysql2


ORM 提供的API的接口无需使用sql语句。它会根据具体的调用方式，自动生成最合适的sql语句操作数据


ORM
	Object Relational Mapping 对象关系映射
	通过ORM框架，可以自动的把程序中的对象和数据库关联
	ORM框架会隐藏具体的数据库底层细节，让开发者使用同样的数据操作接口，完成对不同数据库的操作
		见源码中的「ORM原理图」
	ORM的优势
		开发者不用关心数据库，仅需关心对象
		可轻易的完成数据库的移植
		无须拼接复杂的sql语句即可完成精确查询


		Node中的ORM
	Sequelize         https://github.com/demopark/sequelize-docs-Zh-CN
		JS
		TS
		成熟
	TypeORM
		TS
		不成熟


Sequelize 模型定义和同步
npm i sequelize mysql2


一个完整的系统，最重要的验证，一定在服务器端
1. 客户端（浏览器 app pad 小程序）验证：用户体验
2. 服务器逻辑验证（业务逻辑的验证）: 为了业务的完整性、安全性
3. 数据库验证：

命令 node mock/mockClass.js
http://mockjs.com/

数据查询
	查询单个数据：findOne
	按照主键查询单个数据：findByPK
	查询多个数据：findAll
	查询数量：count
	包含关系：include   预加载

3-8
MD5加密： npm i md5    
http://momentjs.cn/
md5加密的特点
	hash加密算法的一种
	可以将任何一个字符串，加密成一个固定长度的字符串
	单向加密：只能加密无法解密
	同样的源字符串加密后得到的结果固定
3-9
moment    npm i moment
http://mockjs.com/
http://momentjs.cn/

3-10 数据验证 validate.js
npm i validate.js

3-12 日志记录
log4js
https://log4js-node.github.io/log4js-node/
npm i log4js


express
1 
http://expressjs.com/
https://www.expressjs.com.cn/
npm i express



监控文件code变化需要nodemon
npm i -D nodemon