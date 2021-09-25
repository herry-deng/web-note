// 抓取豆瓣读书中的源代码
const axios = require("axios").default;
const cheerio = require("cheerio");
const Book = require("../models/Books");
/**
 *  获取豆瓣读书网页源代码
 */
async function getBooksHTML() {
    const resp = await axios.get("https://book.douban.com/latest");
    // console.log(resp.data);
    return resp.data;
}
// getBooksHTML();
/**
 * 从豆瓣读书中得到一个完整的网页，并从网页中分析出书籍的基本信息，然后得到一个书籍的详情页链接数组
 */
async function getBookLinks() {
    const html = await getBooksHTML();
    const $ = cheerio.load(html);
    const achorElements = $("#content .grid-12-12 li a.cover");
    const links = achorElements.map((i, ele) => {
      const href = ele.attribs["href"];
      return href;
    })
    .get();
    return links;
}


/**
 * 根据书籍的详情页的地址，得到该书籍的详细信息  .trim()去除空格
 */

async function getBookDetail(detailUrl){
  const resp = await axios.get(detailUrl);
 const $ = cheerio.load(resp.data);
 const name = $("h1").text().trim();
 const imgurl = $("#mainpic .nbg img").attr("src");
 const spans = $("#info span.pl");
 const authorSpan = spans.filter((i, ele) => {
    return $(ele).text().includes("作者");
 });
 const author = authorSpan.next("a").text();

 const publishSpan = spans.filter((i, ele) => {
    return $(ele).text().includes("出版年");
 });
 const publishDate = publishSpan[0].nextSibling.nodeValue.trim();
 return {
     name,
     imgurl,
     publishDate,
     author
 }
//  console.log(name);
//  console.log(imgUrl);
//  console.log(author);
//  console.log(publishDate);
}
// getBookDetail("https://book.douban.com/subject/35049755/");

// getBookLinks().then((links) => {
//     console.log(links);
// });

/**
 * 获取所有的书籍信息
 */
async function fetchAll() {
    const links = await getBookLinks();
    const proms = links.map((link) =>{
        return getBookDetail(link);
    });
    return Promise.all(proms);
}
/**
 * 得到书籍信息，然后保存数据库中
 */
async function saveToDB() {
  const books = await fetchAll();
  await Book.bulkCreate(books);
  console.log("抓取数据并保存到了数据库");
}
saveToDB();


// fetchAll().then((books) => {
//     console.log(books);
// });