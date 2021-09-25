// const sequelize = require("./models/db");
// (async function() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
      
// })();
// require("./models/sync");

//增加 方法一
// const Admin = require("./models/Admin");
// 方法一
// const ins = Admin.build({
//     loginId: "abc",
//     loginPwd: "123",
// });   // 同步方法，构建一个模型实例
// ins.save().then(() => {
//     console.log("新建管理员成功");
// });

// Admin.create({
//     loginId: "admin",
//     loginPwd: "123456",
// }).then((ins) => {
//     console.log(ins.isSoftDeleted, ins.loginId, ins.loginPwd);
    
// });


// const Admin = require("./models/Admin");
// const adminServ = require("./services/adminService");
// adminServ.addAdmin({
//     loginId: "abc",
//     loginPwd: "adsfafsufh",
// })


// adminServ.deleteAdmin(4);

// adminServ.updateAdmin(3, {
//   loginId: "哈哈哈",
// }).then(r=>{
//     console.log(r);
// })

require("./models/relation");
require("./spider/fetchBooks");




