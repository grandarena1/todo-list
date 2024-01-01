import { Project } from "./project.js";

//Containers
let projects = [];

//Buttons
const addProjectButton = document.getElementsByClassName('add-project-btn-container')[0];
addProjectButton.addEventListener('click', () => displayForm('project'));

const confirmAddButton = document.getElementById('confirm-add-btn');
confirmAddButton.addEventListener('click', () => createProject('project'));

const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', () => hideForm('project'));

//Task form

const addItemButton = document.getElementsByClassName('add-todo-item-btn')[0];
addItemButton.addEventListener('click', () => displayForm('task'));

const taskConfirmAddButton = document.getElementById('task-confirm-add-btn');
taskConfirmAddButton.addEventListener('click', () => createProject('task'));

const taskFormCancelButton = document.getElementById('task-cancel-btn');
taskFormCancelButton.addEventListener('click', () => hideForm('task'));

//Default project
const defaultProjectContainer = new Project("Default Project", "Default Description");
defaultProjectContainer.setupUI();
projects.push(defaultProjectContainer);

//Form UI
const formContainer = document.getElementsByClassName('project-form')[0];
const projectName = document.getElementsByClassName('form-title-input')[0];
const projectDescription = document.getElementsByClassName('form-description-input')[0];

const itemFormContainer = document.getElementsByClassName('item-form')[0];

//Initialisation
console.log(projects.length);
defaultProjectContainer.changeProject();

//Form functions
function displayForm(action) {
    if(action === 'project') {
        formContainer.classList.remove('hidden');
    }
    else if(action === 'task') {
        itemFormContainer.classList.remove('hidden');
    }
}

function hideForm(action) {
    if(action === 'project') {
        formContainer.classList.add('hidden');
    }
    else if(action === 'task') {
        itemFormContainer.classList.add('hidden');
    }

    resetForm();
}

function resetForm() {
    projectName.value = '';
    projectDescription.value = '';
}

function createProject(action) {
    if(isValid()) {
        if(action === 'project') {
            const newProject = new Project(projectName.value, projectDescription.value);
            newProject.setupUI();
            projects.push(newProject);
            newProject.changeProject();
            console.log('Created new project: ' + newProject.name + ' / ' + newProject.description);
            hideForm('project');
            console.log('Current projects: ' + projects.length);
        }
        else if(action === 'task') {

        }
    }
    else {
        alert('please doob');
    }
}

function isValid() {
    if(projectName.value.length >= 1 && projectName.value.length <= 20 && projectDescription.value.length >= 1 && projectDescription.value.length <= 83) {
        return true;
    }

    return false;
}

export { projects };