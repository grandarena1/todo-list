class Project {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._container = document.getElementsByClassName('projects-container')[0];
        this._projectContainer = document.createElement('div');
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
        this._projectContainer.classList.add('project');

        //Project name
        const projectName = document.createElement('h2');
        projectName.textContent = this._name;
        this._projectContainer.appendChild(projectName);

        //Trash button
        const projectRemoveButton = document.createElement('i');
        projectRemoveButton.classList.add('delete-project', 'fa-regular', 'fa-trash-can');
        projectRemoveButton.addEventListener('click', () => this.removeProject());
        this._projectContainer.appendChild(projectRemoveButton);

        this._container.prepend(this._projectContainer);
    }

    removeProject() {
        this._container.removeChild(this._projectContainer);
    }
}

export { Project };