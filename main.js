console.log(document);
document.title = '/ '
console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms)
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 4px #ccc';
var t = document.querySelector('.title').firstChild;
t.textContent.style.fontWeight = 'bold'
t.textContent.style.color ='green'