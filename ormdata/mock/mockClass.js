// 使用 Mock
const Mock = require('mockjs')
const result = Mock.mock({
    // 属性 datas 的值是一个数组，其中含有16 个元素
    'datas|16': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: "前端 @id 期",  // @占位符
        openDate: "@date",
    },],
}).datas;
// 输出结果
// console.log(result);

//将班级的模拟数据加到数据库中
const Class = require("../models/Class");
Class.bulkCreate(result);

