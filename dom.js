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

// var items = document.querySelectorAll('.list-group-item');
// var odd = document.querySelectorAll('li:nth-child(odd)');

// items[1].style.color='green';
// //items[2].style.display='none';

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

// ParentElement or ParentNode same thing

//var itemList = document.querySelector('#items');
// //parent node
// //console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// child node
// console.log(itemList.childNodes);   // also incluses line breaks in the node list 

// using children
// console.log(itemList.children);
// itemList.children[1].style.background='yellow';

// console.log(itemList.firstChild);// includes line breaks

//using firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Harsh Tanwar';

//similary lastchild and lastElementChild

//var inputItem = document.querySelector('input');
//console.log(inputItem);
//next sibling same as (firstChild parentElement)
//console.log(inputItem.nextSibling);
//nextELementSibling
// console.log(inputItem.nextElementSibling);
// inputItem.nextElementSibling.value="SEND";

//console.log(inputItem.previousSibling);
//console.log(itemList.previousElementSibling);

//creating new Div
var newDiv = document.createElement('div');

// add class
newDiv.className='hello';

// add id;
newDiv.id='hello1';

//add atr
newDiv.setAttribute('title','hello Div');

// adding text 
var newDivText = document.createTextNode('hello world');

//appending to div
newDiv.appendChild(newDivText);
console.log(newDiv);

//inserting this node wherever we want

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);