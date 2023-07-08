'use strict';

function greet(name){
//バッククウォート　で文字列と変数 ${variable_name}を囲むと、文字列と変数を同時に出力することができる。
  console.log(`hello! ${name}`)
}

//greetという関数をexportすることができる
module.exports = greet;