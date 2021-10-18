const express = require("express");
const router = express.Router();
const stuServ = require("../../services/studentService");
const { asyncHandler } = require("../getSendResult");
router.post("/", asyncHandler(
    async (req, res,next) => {
        //添加学生
        // try {
        //     const result = await stuServ.addStudent(req.body);
        //     res.send(sendMsg.getResult(result));
        // } catch (err) {
        //     console.log(err);
        //     next(err);
        // }
        return await stuServ.addStudent(req.body);
    }
));
router.get("/", asyncHandler(async (req,res) => {
    // 分页获取学生
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1;
    const name = req.query.name || "";
    return await stuServ.getStudents(page, limit, sex, name)
    // res.send(sendMsg.getResult(result));
}));
router.get("/:id", asyncHandler(async (req,res) => {
    // 获取单个学生
    return await stuServ.getStudentById(req.params.id);
    // res.send(sendMsg.getResult(result));
}));
router.put("/:id", asyncHandler(async (req,res, next) => {
    // 修改学生
    return await stuServ.updateStudent(req.params.id, req.body);
    // res.send(sendMsg.getResult(result));
}));
router.delete("/:id",  asyncHandler(async (req,res, next) => {
    // 删除单个学生
    return await stuServ.deleteStudent(req.params.id);
    // res.send(sendMsg.getResult(result));
}));

module.exports = router;