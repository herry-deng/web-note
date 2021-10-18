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



// const moment = require("moment");

// console.log(moment().toString()); //得到当前时间，moment对象

// require("./models/relation");
// const adminServe = require("./services/adminService")

// adminServe.login("bff","9119").then((r) => {
//     console.log(r);
// })

// adminServe.updateAdmin(5,{
//     loginPwd:"9119",
// })


// const md5 = require("md5");
// const result = md5("DJC11211djc");
// console.log(result);



// require("./spider/fetchBooks");
// const adminServe = require("./services/adminService");
// const studentServe = require("./services/studentService");
// adminServe.login("abc","1233").then((r) => {
//     console.log(r);
// })  //查询单个数据
  

// adminServe.getAdminById(1).then(r=> {
//     console.log(r);
// })  // 按照主键查询单个数据

// studentServe.getStudents(1,10,false,"秀").then((r) => {
//     console.log(r);
// });


// const { sqlLogger } = require("./logger");
// setInterval(()=>{
//     sqlLogger.debug("one sql already done");
//     },100);

const { logger } = require("./logger");
setInterval(()=>{
    logger.debug("one sql already done");
    },100);