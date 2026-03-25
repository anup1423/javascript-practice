// let todoList = [
//     // {
//     //  item : 'Buy Milk',  
//     //  dueDate: '4/10/2023'
//     // },
//     // {  
//     //   item : 'Go to college ',
//     //   dueDate: '4/10/2023'
//     // }
// ];
let todoList = JSON.parse(localStorage.getItem('todos')) || [];
displayItem();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement  =document.querySelector('#todo-date');
    let todoitem=inputElement.value;
    let tododate=dateElement.value;
        
    if (todoitem === '' || tododate === '') {
    alert('Please enter todo and date');
    return;
    }

    todoList.push({item:todoitem,dueDate:tododate});
    saveTodos();
    inputElement.value='';
    dateElement.value='';
   displayItem();
}
  function displayItem(){
    let containerElement=document.querySelector('.todo-container');
     let newHtml = '';
     for(let i=0;i<todoList.length;i++){
       let {item,dueDate}=todoList[i];
        newHtml+=`

        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);
        saveTodos();displayItem();">Delete</button>
        `
        ;
     }
        containerElement.innerHTML=newHtml;//why we are using innerHTML instead of InnerText.

}
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todoList));
}