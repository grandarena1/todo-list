class TodoItem {
    constructor(name, description, date, priority) {
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;

        this._container = document.getElementsByClassName('todo-items-container')[0];
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }

    get priority() {
        return this._priority;
    }

    setupUI() {
        const todoItemDiv = document.createElement('div');
        todoItemDiv.classList.add('todo-item');

        //Task name
        const todoItemNameHeader = document.createElement('h3');
        todoItemNameHeader.classList.add('task-heading');
        todoItemNameHeader.textContent = 'TASK NAME';
        todoItemDiv.appendChild(todoItemNameHeader);

        const todoItemNameValue = document.createElement('h3');
        todoItemNameValue.classList.add('task-field');
        todoItemNameValue.textContent = this._name;
        todoItemNameHeader.appendChild(todoItemNameValue);

        //Task description
        const todoItemDescriptionHeader = document.createElement('h3');
        todoItemDescriptionHeader.classList.add('task-heading');
        todoItemDescriptionHeader.textContent = 'TASK DESCRIPTION';
        todoItemDiv.appendChild(todoItemDescriptionHeader);

        const todoItemDescriptionValue = document.createElement('h3');
        todoItemDescriptionValue.classList.add('task-field');
        todoItemDescriptionValue.textContent = this._description;
        todoItemDescriptionHeader.appendChild(todoItemDescriptionValue);

        //Task date
        const todoItemDateHeader = document.createElement('h3');
        todoItemDateHeader.classList.add('task-heading');
        todoItemDateHeader.textContent = 'TASK DUE DATE';
        todoItemDiv.appendChild(todoItemDateHeader);

        const todoItemDateValue = document.createElement('h3');
        todoItemDateValue.classList.add('task-field');
        todoItemDateValue.textContent = this._date;
        todoItemDateHeader.appendChild(todoItemDateValue);

        //Priority
        const todoItemPriorityHeader = document.createElement('h3');
        todoItemPriorityHeader.classList.add('task-heading');
        todoItemPriorityHeader.textContent = 'TASK PRIORITY';
        todoItemDiv.appendChild(todoItemPriorityHeader);

        const todoItemPriorityValue = document.createElement('h3');
        todoItemPriorityValue.classList.add('task-field');
        todoItemPriorityValue.textContent = this._priority;
        todoItemPriorityHeader.appendChild(todoItemPriorityValue);

        this._container.appendChild(todoItemDiv);
    }
}

export { TodoItem };