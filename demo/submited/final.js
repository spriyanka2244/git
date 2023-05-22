// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter =document.getElementById('filter');

// //Form submit event
// from.addEventListener('submit', addItem);
// //delete event
// itemList.addEventListener('click',removeItem);

// //Filter event
// filter.addEventListener('keyup',filterItems);


// //Add item
// function addItem(e){
//     e.preventDefault();

//     //get input value
//     var newItem = document.getElementById('item').value;

//     //create new li element
//     var li = document.createElement('li');

//     //add class
//     li.className='list-group-item';
    

//     //Add text node with input value
//     li.appendChild(document.createTextNode(newItem));

//     //create del button element
//     var deleteBtn=document.createElement('button');

//     //add class to del  button
//     deleteBtn.className='btn btn-danger btn-sm float-right delete';

//     deleteBtn.appendChild(document.createTextNode('X'));



//     //append button to li
//     li.appendChild(deleteBtn);

//     itemList.appendChild(li);
// }

// //Remove Item
// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             var li=e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// //edit button
// // function addItem(e){
// //     e.preventDefault();

// //     //get input value
// //     var newItem1 = document.getElementById('item').value;

// //     //create new li element
// //     var li = document.createElement('li');

// //     //add class
// //     li.className='list-group-item';
// //     console.log(li);

// //     //Add text node with input value
// //     li.appendChild(document.createTextNode(newItem1));

// //     //create del button element
// //     var EditBtn=document.createElement('button');

// //     //add class to del  button
// //     EditBtn.className='btn btn-dark btn-sm float-sm-right Edit';

// //     EditBtn.appendChild(document.createTextNode('='));



// //     //append button to li
// //     li.appendChild(EditBtn);

// //     itemList.appendChild(li);
// // }

// //filter items
// function filterItems(e){
//     //convertion lowercase
//     var text = e.target.value.toLowerCase();
    
//     var items =itemList.getElementsByTagName('li');

//     //convert to an array
//     Array.from(items).forEach(function(item){
//         var itemName =item.firstChild.textContent;
        
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display = 'block';
//         } else{
//             item.style.display = 'none';
//         }   
//     });
// }


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));

  // Create del button element
  var deleteBtn = document.createElement('button');

  var EditBtn = document.createElement('button');

  // Add classes to del button
  EditBtn.className = 'btn btn-danger btn-sm float-right delete';
  EditBtn.className = 'btn btn-dark btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  EditBtn.appendChild(document.createTextNode('EDIT'));


  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(EditBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item,item2){
    var itemName = item.firstChild.textContent;
    var item2 = item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1  || item2.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}