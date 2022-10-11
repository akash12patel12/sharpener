var items = document.querySelectorAll(".list-group-item");
items[1].style.background ='yellow'
// items[2].style.display = 'none';
items[1].style.color ='brown';
let i=0;
while(i<items.length){
    items[i].style.background = 'green';
    i= i+2;
}