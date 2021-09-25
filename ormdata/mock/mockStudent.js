// 使用 Mock
const Mock = require('mockjs')
const result = Mock.mock({
    'datas|500-700': [{
        name: "@cname",
        birthday: "@date",
        "sex|1-2": true,
        mobile: /1\d{10}/,
        // location: "@city(true)",
        "ClassId|1-16": 0,
    
    },],
}).datas;
// 输出结果
// console.log(result);

//将学生的模拟数据加到数据库中
const Student = require("../models/Students");
Student.bulkCreate(result);