//簡易サーバーを立ててみる
"use strict";

const port = 3000;
const http = require("http");

const server = http.createServer((request, response) => {

  //writeHeadはresponseオブジェクトのメソッドでヘッダー情報をレスポンスに書き出すもの
  //第１引数にはステータスコードを指定し、第２引数にヘッダー情報を連想配列でまとめたものを指定します。
  response.writeHead(200, {
    "Content-Type": "text/html"
  });

  const responseMessage = "Hello Node.js!";
  //writeはresponseオブジェクトのメソッドで、body部分に書き込む内容を記載することができる。
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);

})

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);