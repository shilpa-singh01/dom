
const form = document.getElementById('addForm');
const ItemList = document.getElementById('items');
const filter = document.getElementById('filter');
// form submit event

form.addEventListener('submit', addItem);

// Add Item
function addItem(e){
    e.preventDefault();


    // create new item for the input 
    const newItem = document.getElementById('item').value;
    const desCription = document.getElementById('description').value;
    // ceate new li 
    const li = document.createElement('li');

    // add class to li
    li.className = 'list-group-item';

    const newText = document.createTextNode(newItem);
    const descriptionNode = document.createTextNode(' '+desCription);
    // append the newitem to li
    li.appendChild(newText);
    li.appendChild(descriptionNode);

    //append the li into ItemList
    ItemList.appendChild(li);


    console.log(li);
    // create a delete button
    const delbtn = document.createElement('button');
    // add class to the button
    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text to the buttton
    delbtn.appendChild(document.createTextNode('X'));
    // add delbtn to the list
    li.appendChild(delbtn);
    ItemList.appendChild(li);

    // create a edit button
    const editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    ItemList.appendChild(li);


}

// craete a remove function 
ItemList.addEventListener('click' , removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        ItemList.removeChild(li);
       }
    }
}

// filter event
filter.addEventListener('keyup' , filterItem);

// filterItem function

function filterItem(e){
    // converts text to lower
    var text = e.target.value.toLowerCase();
    // get li's
    var items = ItemList.getElementsByTagName('li');
    // converting to an array of html collection
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var descriptionName = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        if(descriptionName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}