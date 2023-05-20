var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add class
    li.className='list-group-item';
    console.log(li);

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn=document.createElement('button');

    //add class to del  button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

