const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const moment = require("moment");
// 创建一个模型对象
module.exports = sequelize.define("Student", { // const 定义一个模型变量
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        get() { //访问器
          return this.getDataValue("birthday").getTime();
        },
      },
      age: { //虚拟字段
        type: DataTypes.VIRTUAL,
        get() {
          const now = moment.utc();
          const birth = moment.utc(this.birthday);
          return now.diff(birth, "y"); //得到两个日期的年份的差异
        },
      },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false,
    }
},
{
    createdAt: false,
    updatedAt: false,
    paranoid: true, //从此以后，改表的数据不会真正的删除，而是增加一列deletedAt,记录删除的时间
}
);



// module.exports = Student;