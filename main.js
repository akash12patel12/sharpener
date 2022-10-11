


var items = document.querySelectorAll('.list-group-item');
items[2].style.background = 'green';
items.forEach((item)=>{item.style.color='purple';
item.style.fontWeight ='bold';})

var newliv = document.getElementsByClassName('new-li');

newliv[0].textContent = "Changed it to this text by javascript using getelementsbyclassname";

var nt = document.getElementsByTagName('li');
let l = nt.length;

nt[l-1].textContent ="edited it with tag name"