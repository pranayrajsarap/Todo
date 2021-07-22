var textInput = document.getElementById("text-input");

var list = document.getElementById('todo-list');
var btnAdd = document.getElementById("add-item");
var btnUpdate = document.getElementById("update-item");
var btnRemove = document.getElementById("remove-first-item");


var buttText = ''; 

textInput.addEventListener('keyup',function(e){
    buttText=e.target.value;
})


textInput.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        createElement();
    }

})


function createNewNode()
{
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(buttText);
    var newIcon = document.createElement('i');
    newListElement.appendChild(textNode);
    //textNode.appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');
    newListElement.id = buttText;

    return newListElement;
}

function createElement()
{
    if(buttText =='')
    {
        alert("input needed");
    }
    else{
    var newListElement = createNewNode();
    list.appendChild(newListElement);
    console.log(newListElement);
    textInput.value='';
    buttText='';
    }
}

btnAdd.addEventListener('click',createElement);
    
    

btnUpdate.addEventListener('click',function(){
    var firstElement = list.firstElementChild;
    var newElement = createNewNode();

    list.replaceChild(newElement,firstElement);
    textInput.value='';
    

})

btnRemove.addEventListener('click',function(){
    var firstElement = list.firstElementChild;

    list.removeChild(firstElement);
})