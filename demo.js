//examin the document object

//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title =123
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[0]);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);
//console.log(document.querySelectorAll);

//var headerTitle =document.getElementById('header-title');
//var header =document.getElementById('main-header');
//console.log(headerTitle);
//var headerTitle =document.getElementById('header-title');
//headerTitle.style.borderBottom ='solid 3px #a020f0';
//var headerTitle =document.getElementById('items');
//items.style.color="green";

//var headerTitle =document.getElementById('header-titl


//get element by class name//
//var items =document.getElementsByClassName('list-group-item');
//items[2].style.backgroundColor ='green';

//for(var i=0;i<items.length;i++){
  //  items[i].style.fontWeight='bold';
//}

//console.log(items);
//console.log(items[1]);
//items[1].textContent ='Hello 2';
//items[2].style.backgroundColor ='green';


// get elements by tagname
// var li =document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[1].textContent='Hello 5';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='red';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor="yellow";
// }


//editing by getelement by class name 
// var items =document.getElementsByClassName('list-group-item');
// for(var i=0;i<items.length;i++){
//       items[i].style.fontWeight='bold';
//   } 

// query selector//
// var header= document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input =document.querySelector('input');
// input.value ='Hello world';

// var submit =document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item =document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem =document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem =document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';


//query selector all
//  var titles = document.querySelectorAll('.title');

//  console.log(titles);
//  titles[0].textContent='hello';

//  var odd=document.querySelectorAll('li:nth-child(odd)');

//  for(var i=0;i<odd.length;i++){
//      odd[i].style.backgroundColor="green";

//  }
// var secondItem = document.querySelectorAll('.list-group-item');

// secondItem[1].style.backgroundColor = "green"; 








//Traversing the DOM

var itemList =document.querySelector('#items');
// //parent element
//console.log(itemList.parent);
//itemList.parentElement.style.backgroundColor='green';
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes

//console.log(itemList.childNodes);


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';


//FirstChild
// console.log(itemList.firstChild);
// //firstElement Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello 1";

//LastChild
// console.log(itemList.lastChild);
// //lastElement Child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello last";


//nextsibling
console.log(itemList.nextSibling);

