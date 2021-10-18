// require("./init");
const express = require("express");
// console.log(process.env.NODE_ENV);
const app = express();

const path = require("path");
const staticRoot = path.resolve(__dirname,"../public");

// app.use(require("../StaticMiddleware"));

// app.get("/news/abc",
// // req和res是被express封装过后的对象 ,next 运行后续的处理函数
// (req, res, next)=>{
//     console.log("handler1");
//     next(new Error("abc"));
// },
// // require("./errorMiddleware")
// ),
// app.get("/news",
// (req, res, next)=>{
//     console.log("handler3");
//     res.send("123");
//     next();
// }
// );

app.use(express.static(staticRoot));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static())

app.get("/css/index.css", (req,res) => {
    console.log("abc")
})

app.use("/news", require("./errorMiddleware"));


const port = 5008;
app.listen(port,() =>{
    console.log(`server listen on ${port}`);
})