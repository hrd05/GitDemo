// dom manipulation course 4 of trvaersy media

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// submit event (add item to list when submit btn clicked)
form.addEventListener('submit' , addItem);
// click event (remove item from list when clicked)
itemList.addEventListener('click' , removeItem);
// filtering
filter.addEventListener('keyup', filterItems );


// function for add item
function addItem(e){
    e.preventDefault();

    // get input value;

    var newItem = document.getElementById('item').value;
    var descr = document.getElementById('description').value;
    
    // create new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));   
    li.appendChild(document.createTextNode(descr));
    
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

//function for filter items

function filterItems(e){
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    //convert collection to arrays
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemName2 = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display ='none';
        }
    })
}