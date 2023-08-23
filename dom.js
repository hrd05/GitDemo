// dom manipulation course 4 of trvaersy media

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// submit event (add item to list when submit btn clicked)
form.addEventListener('submit' , addItem);
// click event (remove item from list when clicked)
itemList.addEventListener('click' , removeItem);


// function for add item
function addItem(e){
    e.preventDefault();

    // get input value;

    var newItem = document.getElementById('item').value;
    
    // create new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));       
    
    // create del button
    var delbtn = document.createElement('button');
    var editBtn = document.createElement('button');
    //add class
    editBtn.className = 'btn btn-sm btn-dark float-right';
    delbtn.className = 'btn btn-danger btn-sm float-right delete';    

    delbtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    //add btn to li
    li.appendChild(delbtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

// function for remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}