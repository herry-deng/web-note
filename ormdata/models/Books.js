const sequelize = require("./db");
const { DataTypes } = require("sequelize");

// 创建一个模型对象
module.exports = sequelize.define("Book", { // const 定义一个模型变量
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgurl: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    publishDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    // createdAt: false,
    // updatedAt: false,
    paranoid: true, //从此以后，改表的数据不会真正的删除，而是增加一列deletedAt,记录删除的时间
}
);