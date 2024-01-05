import { selectedProject, setSelectedProject, projects } from "./app.js";

class Project {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._container = document.getElementsByClassName('projects-container')[0];
        this._projectInformationParent = document.getElementsByClassName('projects-window-upper-right')[0];
        this._currentProjectContainer = document.createElement('div');
        this._projectContainer = document.createElement('div');
        this._projectRemoveButton = document.createElement('i');
        this._todoContainer = document.getElementsByClassName('todo-items-container')[0];
        this._items = [];
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

    get items() {
        return this._items;
    }

    setupUI() {
        //Container
        this._projectContainer.classList.add('project');
        this._projectContainer.addEventListener('click', () => this.changeProject(this._projectContainer));

        //Project name
        const projectName = document.createElement('h2');
        projectName.textContent = this._name;
        this._projectContainer.appendChild(projectName);

        this._currentProjectContainer.classList.add('project-header');
        
        const currentProjectName = document.createElement('h1');
        currentProjectName.textContent = this._name;
        this._currentProjectContainer.appendChild(currentProjectName);

        //Project description
        const currentProjectDescription = document.createElement('h3');
        currentProjectDescription.textContent = this._description;
        this._currentProjectContainer.appendChild(currentProjectDescription);

        //Divider
        const currentProjectDivider = document.createElement('hr');
        currentProjectDivider.classList.add('solid');
        this._currentProjectContainer.appendChild(currentProjectDivider);

        this._projectInformationParent.appendChild(this._currentProjectContainer);

        //Trash button
        this._projectRemoveButton.classList.add('delete-project', 'fa-regular', 'fa-trash-can');
        this._projectRemoveButton.addEventListener('click', () => this.removeProject());
        this._projectContainer.appendChild(this._projectRemoveButton);

        this._container.prepend(this._projectContainer);
    }

    changeProject() {
        if(projects.length > 0) {
            for(let i = 0; i < projects.length; i++) {
                projects[i].container.classList.remove('highlighted');
                projects[i]._currentProjectContainer.classList.add('hidden');;

                projects[i]._todoContainer.querySelectorAll('.todo-item').forEach(item => {
                    item.classList.add('hidden');
                });
            }

            this._projectContainer.classList.add('highlighted');
            this._currentProjectContainer.classList.remove('hidden');
        }

        setSelectedProject(this);

        if(selectedProject === this) {
            this._items.forEach(item => {
                item.enableContainer(true);
            });
        }

        console.log('Active project: ' + selectedProject._name);
    } 

    removeProject() {
        this._container.removeChild(this._projectContainer);
        this._projectInformationParent.removeChild(this._currentProjectContainer);

        const index = projects.indexOf(this);
        if (index !== -1) {
            projects.splice(index, 1);
        }

        if(projects.length > 0) {
            const nextProjectIndex = projects.length - 1;
            this.changeProject(projects[nextProjectIndex]);
        }

        console.log('Removed project: ' + this._name);
        console.log('Current projects: ' + projects.length);
    }
}

export { Project };