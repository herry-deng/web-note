const sequelize = require("./db");
const { DataTypes } = require("sequelize");

// 创建一个模型对象
const Admin = sequelize.define("Admin", { // const 定义一个模型变量
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    createdAt: false,
    updatedAt: false,
    paranoid: true, //从此以后，改表的数据不会真正的删除，而是增加一列deletedAt,记录删除的时间
}
);
// (async function() {
//     await Admin.sync({
//         alter:true,
//     });
//     console.log("模型Admin同步完成");
// })();



module.exports = Admin;