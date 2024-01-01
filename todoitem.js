class TodoItem {
    constructor(name, description, date, priority) {
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;
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
}

export { TodoItem };