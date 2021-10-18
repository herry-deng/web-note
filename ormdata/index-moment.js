const moment = require("moment");
moment.locale("zh-cn");
// 得到当前时间，moment对象
// console.log(moment().toString());
// console.log(moment.utc().toString());


//得到当前时间戳
// console.log(moment().valueOf(),+moment());
// console.log(moment.utc().valueOf(),+moment.utc());


//根据指定时间格式得到时间，时间格式：xxxx-xx-xx    xxxx/xx/xx 时间戳
// console.log(moment(0).toString(),+moment(0));
// console.log(moment.utc(0).toString(),+moment.utc(0));

// const value = "1970-01-01 00:00:00"
// console.log(moment(value).toString(),+moment(value));
// console.log(moment.utc(value).toString(),+moment.utc(value));

//使用日期令牌转换
// 令牌是一个格式化字符串 如："YYYY-MM-DD HH:mm:ss"
const formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"];
// console.log(moment.utc("1970-01-01 00:00:00",formats,true).toString());
// console.log(moment.utc("1970-1-1 0:0:0",formats,true).toString());
// console.log(moment.utc("2020.05.25 15:28",formats,true).toString());

//显示（发生在客户端）
// const m = moment.utc("2021-10-04 06:00:00", formats,true);
// console.log(m.local().format("YYYY年MM月DD日 HH点mm分ss秒"));

// const m = moment("2015-10-4 23:00:00", formats,true);
// const toServe = m.utc().format("YYYY-MM-DD HH:mm:ss");
// console.log(toServe);


const m = moment.utc("1996-12-4 23:00:00", formats,true);
console.log(m.local().fromNow());