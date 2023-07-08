//use strictを使うと的確なエラーチェックが行われる
'use strict';

//require関数で、greet.jsのgreet関数をインポートする。この時、インポートするファイル名の.jsは変更できる。
const greet = require('./greet')

const member1 = 'Apple';
const member2 = 'Book';
const member3 = 'Cake';

console.log('hello!' + member1 + '!\n');
console.log('hello!' + member2 + '!\n');
console.log('hello!' + member3 + '!\n');

//引数に'yamada'を取る、greet.jsのgreet関数の結果が出力される。
greet('yamada')