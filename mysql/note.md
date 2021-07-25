DDL
	Data Definition Language 数据定义语言
	操作数据库对象
		库
		表
		视图
		存储过程
CREATE DATABASE 创建数据库
使用数据库 use xxxx
drop database xxx

管理表
	创建表
		字段
          字段名
			字段类型
            
                bit：占1位，0或1，false或true
				int：占32位，整数
				decimal(M,N)：能精确计算的实数，M是总的数字位数，N是小数位数
				char(n)：固定长度位n的字符
				varchar(n)：长度可变，最大长度位n的字符
				text：大量的字符
				date：仅日期
				datetime：日期和时间
				time：仅时间
			是不是null
			自增
			默认值
	修改表
	删除表

    uuid   SELECT uuid();   生成全球唯一的字符串

    表关系
	一对一
		一个A对应一个B，一个B对应一个A
		例如：用户和用户信息
		把任意一张表的主键同时设置为外键
	一对多
		一个A对应多个B，一个B对应一个A，A和B是一对多，B和A是多对一
		例如：班级和学生，用户和文章
		在多一端的表上设置外键，对应到另一张表的主键
	多对多
		一个A对应多个B，一个B对应多个A
		例如：学生和老师
		需要新建一张关系表，关系表至少包含两个外键，分别对应到两张表

        三大设计范式
	1. 要求数据库表的每一列都是不可分割的原子数据项
	2. 非主键列必须依赖于主键列
	3. 非主键列必须直接依赖主键列


DML
	Data Manipulation Language 数据操控语言
	操作数据库中的记录、
    DML
Data Manipulation Language 数据操控语言
	增 CREATE
	查 Retrieve
	改 UPDATE
	删 DELETE
	CRUD

-- 笛卡尔积  两张表相乘

select t1.name 主场, t2.name 客场
from team as t1, team as t2
WHERE t1.id != t2.id;