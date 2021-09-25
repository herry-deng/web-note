const sequelize = require("./db");
const { DataTypes } = require("sequelize");
// const Student = require("./Students");

// 创建一个模型对象
const Class = sequelize.define("Class", { // const 定义一个模型变量
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    openDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
{
    createdAt: false,
    updatedAt: false,
    paranoid: true, //从此以后，改表的数据不会真正的删除，而是增加一列deletedAt,记录删除的时间
}
);
// Class.hasMany(Student);


module.exports = Class;