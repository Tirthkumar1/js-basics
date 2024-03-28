const todoList = [{
  name : 'make Dinner',
  dueDate: '2022-12-22'
}];

rendertodoList();

function rendertodoList() {

  let todoListhtml = '';

  todoList.forEach(function(todoObject, index){
      const {name , dueDate} = todoObject;
      const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>  
        <button class ="delete-button js-delete-button">Delete</button> 
      `;
      todoListhtml += html;
  });

  /*
  for(let i=0; i<todoList.length; i++) {
  const todoObject = todoList[i];
  const {name , dueDate} = todoObject;
  // const dueDate = todoObject.dueDate;
  const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>  
    <button onclick="
      todoList.splice(${i}, 1);
      rendertodoList();
    " class ="delete-button">Delete</button> 
  `;
  todoListhtml += html;
  }
  */

  document.querySelector('.js-todo-list').innerHTML = todoListhtml

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index, 1);
        rendertodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',() => {
    addTodo();
  });

InputElem = '';
function addTodo() {
  const imputElem = document.querySelector('.js-name-input');
  const name = imputElem.value;

  const dateInputElem = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElem.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  

  InputElem.value = '';

  rendertodoList();
}
