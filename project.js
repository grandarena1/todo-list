import { projects } from "./app.js";

class Project {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._container = document.getElementsByClassName('projects-container')[0];
        this._projectContainer = document.createElement('div');
        this._projectRemoveButton = document.createElement('i');
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }
    
    get container() {
        return this._projectContainer;
    }

    setupUI() {
        //Container
        this._projectContainer.classList.add('project');
        this._projectContainer.addEventListener('click', () => this.changeProject(this._projectContainer));

        //Project name
        const projectName = document.createElement('h2');
        projectName.textContent = this._name;
        this._projectContainer.appendChild(projectName);

        //Trash button
        this._projectRemoveButton.classList.add('delete-project', 'fa-regular', 'fa-trash-can');
        this._projectRemoveButton.addEventListener('click', () => this.removeProject());
        this._projectContainer.appendChild(this._projectRemoveButton);

        this._container.prepend(this._projectContainer);
    }

    changeProject(activeProject) {
        for(let i = 0; i < projects.length; i++) {
            projects[i].container.style.backgroundColor = '#373c3f';
        }

        if(projects.length > 0) {
            activeProject.style.backgroundColor = '#444a4d';
            console.log('Active project: ' + this._name);
        }
    }

    removeProject() {
        this._container.removeChild(this._projectContainer);

        const index = projects.indexOf(this);
        if (index !== -1) {
            projects.splice(index, 1);
        }

        console.log('Removed project: ' + this._name);
        console.log('Current projects: ' + projects.length);
    }
}

export { Project };