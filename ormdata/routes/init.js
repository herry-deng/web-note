const express = require("express");
const app = express();

const path = require("path");
const staticRoot = path.resolve(__dirname,"../public");
app.use(express.static(staticRoot));

// 解析application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));
// 解析application/json 格式的请求体
app.use(express.json());

// 处理api的请求

app.use("/api/student", require("./api/student"));



// 处理错误的中间件
app.use(require("./errorMiddleware"));


const port = 5008;
app.listen(port,() =>{
    console.log(`server listen on ${port}`);
})