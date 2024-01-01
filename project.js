class Project {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._container = document.getElementsByClassName('projects-list-lower-left')[0];
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }
    
    get container() {
        return this._container;
    }

    setupUI() {
        //Container
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');

        //Project name
        const projectName = document.createElement('h2');
        projectName.textContent = this._name;
        projectContainer.appendChild(projectName);

        //Trash button
        const projectRemoveButton = document.createElement('i');
        projectRemoveButton.classList.add('fa-regular', 'fa-trash-can');
        projectRemoveButton.style.color = '#ffffff';
        projectContainer.appendChild(projectRemoveButton);

        this._container.prepend(projectContainer);
    }
}

export { Project };