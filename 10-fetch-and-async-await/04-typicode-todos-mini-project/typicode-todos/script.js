// script.js
document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const titleInput = document.getElementById('title');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    if (!title) return;

    const newTodo = {
      title: title,
      userId: 101,
      completed: true,
    };
    console.log(newTodo);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        newToDo(data);
        titleInput.value = '';
      });
  });

  function newToDo(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = todo.title;
    todoDiv.addEventListener('click', () => {
      todo.completed = !todo.completed;
      todoDiv.classList.toggle('done');
    });
    todoDiv.addEventListener('dblclick', () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
        method: 'DELETE',
      });
      todoDiv.remove();
    });
    if (todo.completed) {
      todoDiv.classList.add('done');
    }
    todoList.appendChild(todoDiv);
  }
});


