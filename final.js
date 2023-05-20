var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);


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

//edit button
// function addItem(e){
//     e.preventDefault();

//     //get input value
//     var newItem1 = document.getElementById('item').value;

//     //create new li element
//     var li = document.createElement('li');

//     //add class
//     li.className='list-group-item';
//     console.log(li);

//     //Add text node with input value
//     li.appendChild(document.createTextNode(newItem1));

//     //create del button element
//     var EditBtn=document.createElement('button');

//     //add class to del  button
//     EditBtn.className='btn btn-dark btn-sm float-sm-right Edit';

//     EditBtn.appendChild(document.createTextNode('='));



//     //append button to li
//     li.appendChild(EditBtn);

//     itemList.appendChild(li);
// }

//filter items
function filterItems(e){
    //convertion lowercase
    var text = e.target.value.toLowerCase();
    var items =itemList.getElementsByTagName('li');

    //convert to an array
    Array.form(items).forEach(function(item){
        var itemName =item.firstChild.textContent;
        if(itemName.toLowerCase().indexof(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }   
    });
}


