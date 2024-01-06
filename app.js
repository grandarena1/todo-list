import { Project } from "./project.js";
import { TodoItem } from "./todoitem.js";

//Containers
let projects = [];

//Buttons
const addProjectButton = document.getElementsByClassName('add-project-btn-container')[0];
addProjectButton.addEventListener('click', () => displayForm('project'));

const confirmAddButton = document.getElementById('confirm-add-btn');
confirmAddButton.addEventListener('click', () => create('project'));

const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', () => hideForm('project'));

//Task form
const addItemButton = document.getElementsByClassName('add-todo-item-btn')[0];
addItemButton.addEventListener('click', () => displayForm('task'));

const taskConfirmAddButton = document.getElementById('task-confirm-add-btn');
taskConfirmAddButton.addEventListener('click', () => create('task'));

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
const taskName = document.getElementsByClassName('form-task-title-input')[0];
const taskDescription = document.getElementsByClassName('form-task-description-input')[0];
const taskDate = document.getElementsByClassName('form-task-date-input')[0];
const taskPriority = document.getElementsByClassName('form-task-priority-input')[0];

//Initialisation
let selectedProject = defaultProjectContainer;
defaultProjectContainer.changeProject();

function setSelectedProject(project) {
    selectedProject = project;
}

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
    taskName.value = '';
    taskDescription.value = '';
    taskDate.value = '';
}

function create(action) {
    if(action === 'project') {
        if(isValid('project')) {
            const newProject = new Project(projectName.value, projectDescription.value);
            newProject.setupUI();
            projects.push(newProject);
            newProject.changeProject();
            console.log('Created new project: ' + newProject.name + ' / ' + newProject.description);
            hideForm('project');
            console.log('Current projects: ' + projects.length);
        }
        else {
            alert('Please make sure all fields are filled in');
        }
    }
    else if(action === 'task') {
        if(isValid('task')) {
            const newTask = new TodoItem(taskName.value, taskDescription.value, taskDate.value, taskPriority.value, selectedProject);
            newTask.setupUI();
            console.log('Created new task: ' + newTask.name + ' / ' + newTask.description + ' / ' + newTask._date + ' / ' + newTask.priority);
            hideForm('task');
        }
        else {
            alert('Please make sure all fields are filled in');
        }
    }
}

function isValid(action) {
    if(action === 'project') {
        if(projectName.value.length >= 1 && projectName.value.length <= 20 
            && projectName.value.trim().length !== 0 && projectDescription.value.length >= 1 
            && projectDescription.value.length <= 83 && projectDescription.value.trim().length !== 0) {
            return true;
        }
    }
    else if(action === 'task') {
        if(taskName.value.length >= 1 && taskName.value.length <= 20 
            && taskName.value.trim().length !== 0 && taskDescription.value.length >= 1 
            && taskDescription.value.length <= 83 && taskDescription.value.trim().length !== 0
            && taskDate.value && taskPriority.value) {
        return true;
        }

        return false;
    }
}

export { projects, selectedProject, setSelectedProject };