// const header= document.getElementById('main-header');
// //headerTitle.innerText='harsh'; //or  use textContent
// //console.log(headerTitle.innerHTML);
// header.style.border='solid 3px #000';

// const title = document.querySelector('.title');
// title.style.fontWeight='bold';
// title.style.color='green';

//GetElementsByClassName

// var items = document.getElementsByClassName('list-group-item');

// //console.log(items);

// items[2].style.background='green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }
// li element with no class doent change
// now use of get element by tag name


// var li = document.getElementsByTagName('li');

// //console.log(items);

// li[2].style.background='green';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
//     //li[i].style.background = 'yellow';
// }

// queryselctorall

var items = document.querySelectorAll('.list-group-item');
var odd = document.querySelectorAll('li:nth-child(odd)');

items[1].style.color='green';
//items[2].style.display='none';

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}