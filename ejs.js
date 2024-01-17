const ejs = require('ejs');

let china = '中国';

//渲染china

let res = ejs.render('hello <%= china %>', {
    china
});

console.log(res);