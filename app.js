import { Project } from "./project.js";

//Containers
const projectContainer = document.getElementsByClassName('projects-container')[0];
let projects = [];

//Buttons
const addProjectButton = document.getElementsByClassName('add-project-btn-container')[0];
addProjectButton.addEventListener('click', () => displayForm());

const confirmAddButton = document.getElementById('confirm-add-btn');
confirmAddButton.addEventListener('click', () => createProject());

const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', () => hideForm());

//Default project
const defaultProjectContainer = new Project("Default Project", "Default Description");
defaultProjectContainer.setupUI();
projects.push(defaultProjectContainer);

//Form UI
const formContainer = document.getElementsByClassName('project-form')[0];
const projectName = document.getElementsByClassName('form-title-input')[0];
const projectDescription = document.getElementsByClassName('form-description-input')[0];

//Initialisation
console.log(projects.length);
defaultProjectContainer.changeProject();

//Form functions
function displayForm() {
    formContainer.classList.remove('hidden');
}

function hideForm() {
    formContainer.classList.add('hidden');
    resetForm();
}

function resetForm() {
    projectName.value = '';
    projectDescription.value = '';
}

function createProject() {
    if(isValid()) {
        const newProject = new Project(projectName.value, projectDescription.value);
        newProject.setupUI();
        projects.push(newProject);
        newProject.changeProject();
        console.log('Created new project: ' + newProject.name + ' / ' + newProject.description);
        hideForm();
        console.log('Current projects: ' + projects.length);
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