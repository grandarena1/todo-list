import { Project } from "./project.js";

//Buttons
const addProjectButton = document.getElementsByClassName('add-project-btn-container')[0];
addProjectButton.addEventListener('click', () => displayForm());

const confirmAddButton = document.getElementById('confirm-add-btn');
confirmAddButton.addEventListener('click', () => createProject());

const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', () => hideForm());

//Form UI
const formContainer = document.getElementsByClassName('project-form')[0];
const projectName = document.getElementsByClassName('form-title-input')[0];
const projectDescription = document.getElementsByClassName('form-description-input')[0];

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
        console.log(newProject.name + ' ' + newProject.description);
        hideForm();
    }
    else {
        alert('please doob');
    }
}

function isValid() {
    if(projectName.value.length >= 1 && projectName.value.length <= 36 && projectDescription.value.length >= 1 && projectDescription.value.length <= 168) {
        return true;
    }

    return false;
}