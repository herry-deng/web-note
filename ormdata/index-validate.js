require("./init");
const stuServ = require("./services/studentService");
stuServ.addStudent({
    name:"herry",
    birthday:"1996-09-20",  // init里的value参数
    sex:true,
    mobile:"13570637920",
    ClassId: 13,
    deletedAt: "2010-1-1",
    a: 3,
    b: 4,
}).catch((err)=>{
    console.log(err);
});