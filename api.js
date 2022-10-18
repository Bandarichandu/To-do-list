let addTaskButton = document.getElementById('addTask');
let task = document.getElementById('task');
let input = document.getElementById('input');
let clearButton = document.getElementById('clear'); 
addTaskButton.addEventListener('click', function(){
    var ListContainer= document.createElement('P');
    ListContainer.classList.add('List');
   ListContainer.innerText = input.value;
    task.appendChild(ListContainer);
    input.value = "";
    ListContainer.addEventListener('click', function(){
    ListContainer.style.textDecoration = "line-through";
    }) 
     ListContainer.addEventListener('dblclick', function(){
        task.removeChild(ListContainer);
    }) 
 
 clearButton.addEventListener('click', function(){ 
     task.removeChild(ListContainer);
    
    
    })

})