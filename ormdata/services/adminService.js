//管理员初始化
// 判断数据库中是否有管理员，如果有，自动添加一个默认管理员
const md5 = require("md5");
const Admin = require("../models/Admin");
exports.addAdmin = async function(adminObj) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
// 应该判断adminObj的各种属性是否合理，以及账号是否已存在
const ins = await Admin.create(adminObj);  // ins 实例
return ins.toJSON();
}
exports.deleteAdmin = async function(adminId) {
// 方式1
// 1. 得到实例
// const ins = await Admin.findByPk(adminId);                // findByPk通过组件找到用户
// // console.log(ins);
// // 2. 删除实例
//  await ins.destroy();

// 方式2：没有实例时
const result = await Admin.destroy({
    where: {
        id: adminId,
    },
});
return result;
}
exports.updateAdmin = async function(id,adminObj){
    if(adminObj.loginPwd) {
        adminObj.loginPwd = md5(adminObj.loginPwd)
    }
    // 方式1 有实例
    // const ins = await Admin.findByPk(id);
    // ins.loginId = adminObj.loginId;
    // ins.save();

    // 方式2 没有实例
  const result = await Admin.update(adminObj, {
        where:{
            id,
        },
    });
    return result;
};

/**
 * 查询单个数据
 */
exports.login = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd)
    const result = await Admin.findOne({
        where:{
            loginId,
            loginPwd,
        },
    });
    if(result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null;
};


/**
 * 按照主键查询单个数据
 */
exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if(result){
        return result.toJSON();
    }
    return null;
}