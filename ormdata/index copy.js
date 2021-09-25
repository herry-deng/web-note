// const mysql = require('mysql2');
const mysql = require('mysql2/promise');
// create the connection to database

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: "DJC1831473219",
//     database: 'companydb',
//   });

async function test(id) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "DJC1831473219",
        database: 'companydb',
      });
      // promise查询数据
const [results] = await connection.query(
    `SELECT * FROM employee where id=${id};`
  );
  console.log(results);
  connection.end();
}
test();

// connection.end();
// 查询数据
// connection.query(
//   "SELECT * FROM `company`",
//   function(err, results) {
//     console.log(results); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );




// 增加数据
// connection.query("insert into company(`name`, location,buildDate) value('abc', '阿萨德', curdate());",(err, result)=>{
//     console.log(result);
// });

//修改数据
// connection.query("update company set `name`='bcd' where id =4",(err, result)=>{
//     console.log(result);
// });


// 删除数据
// connection.query("delete from company where id =4",(err, result)=>{
//         console.log(result);
//      });


const mysql = require("mysql/promise");  //是用连接词  createPool， 使用execute方式sql注入
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "DJC1831473219",
    database: 'companydb',
    multipleStatements:true,
});
async function test(id) {
    const sql = `select * from employee where id=?;`;
    const [results] = await pool.execute(sql, [id]);
    console.log(results); 
}
test(
    `''; insert into company(\`name\`, location, buildDate) values('aaa', 'sadfsaf', curdate())`
);