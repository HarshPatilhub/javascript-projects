document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
    }

    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        } else if (event.target.tagName === 'SPAN') {
            event.target.classList.toggle('completed');
        }
    });
});
