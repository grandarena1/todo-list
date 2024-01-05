class TodoItem {
    constructor(name, description, date, priority, project) {
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._project = project;

        this._container = project._todoContainer;
        this._todoItemDiv = document.createElement('div');
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

    get project() {
        return this._project;
    }

    enableContainer(state) {
        if(state === true) {
            this._todoItemDiv.classList.remove('hidden');
        }
        else {
            this._todoItemDiv.classList.add('hidden');
        }
    }

    setupUI() {
        this._todoItemDiv.classList.add('todo-item');

        //Remove task
        const removeBtn = document.createElement('i');
        removeBtn.classList.add('delete-project', 'fa-regular', 'fa-trash-can');
        removeBtn.addEventListener('click', () => this.removeItem());
        this._todoItemDiv.prepend(removeBtn);

        //Task name
        const todoItemNameHeader = document.createElement('h3');
        todoItemNameHeader.classList.add('task-heading');
        todoItemNameHeader.textContent = 'TASK NAME';
        this._todoItemDiv.appendChild(todoItemNameHeader);

        const todoItemNameValue = document.createElement('h3');
        todoItemNameValue.classList.add('task-field');
        todoItemNameValue.textContent = this._name;
        todoItemNameHeader.appendChild(todoItemNameValue);

        //Task description
        const todoItemDescriptionHeader = document.createElement('h3');
        todoItemDescriptionHeader.classList.add('task-heading');
        todoItemDescriptionHeader.textContent = 'TASK DESCRIPTION';
        this._todoItemDiv.appendChild(todoItemDescriptionHeader);

        const todoItemDescriptionValue = document.createElement('h3');
        todoItemDescriptionValue.classList.add('task-field');
        todoItemDescriptionValue.textContent = this._description;
        todoItemDescriptionHeader.appendChild(todoItemDescriptionValue);

        //Task date
        const todoItemDateHeader = document.createElement('h3');
        todoItemDateHeader.classList.add('task-heading');
        todoItemDateHeader.textContent = 'TASK DUE DATE';
        this._todoItemDiv.appendChild(todoItemDateHeader);

        const todoItemDateValue = document.createElement('h3');
        todoItemDateValue.classList.add('task-field');
        todoItemDateValue.textContent = this._date;
        todoItemDateHeader.appendChild(todoItemDateValue);

        //Priority
        const todoItemPriorityHeader = document.createElement('h3');
        todoItemPriorityHeader.classList.add('task-heading');
        todoItemPriorityHeader.textContent = 'TASK PRIORITY';
        this._todoItemDiv.appendChild(todoItemPriorityHeader);

        const todoItemPriorityValue = document.createElement('h3');
        todoItemPriorityValue.classList.add('task-field');
        todoItemPriorityValue.textContent = this._priority;
        todoItemPriorityHeader.appendChild(todoItemPriorityValue);

        this._container.appendChild(this._todoItemDiv);

        this._project.items.push(this);
        console.log('Current TODO items: ', this._project.items.length);
    }

    removeItem() {
        this._container.removeChild(this._todoItemDiv);

        const index = this.items.indexOf(this);

        if (index !== -1) {
            this._project.items.splice(index, 1);
        }

        console.log('Current TODO items: ', this._items.length);
    }
}

export { TodoItem };