document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    const userTypes = document.getElementById('userTypes').value;
    const technologyUsed = document.getElementById('technologyUsed').value;

    const project = { subject, description, userTypes, technologyUsed };


    let projects = JSON.parse(sessionStorage.getItem('projects')) || [];
   
    projects.push(project);
   
    sessionStorage.setItem('projects', JSON.stringify(projects));

    
    document.getElementById('projectForm').reset();

    renderProjects();
});

function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    const projects = JSON.parse(sessionStorage.getItem('projects')) || [];

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const subject = document.createElement('h2');
        subject.textContent = project.subject;
        card.appendChild(subject);

        const description = document.createElement('p');
        description.textContent = project.description;
        card.appendChild(description);

        const userTypes = document.createElement('p');
        userTypes.textContent = `User Types: ${project.userTypes}`;
        card.appendChild(userTypes);

        const technologyUsed = document.createElement('p');
        technologyUsed.textContent = `Technology Used: ${project.technologyUsed}`;
        card.appendChild(technologyUsed);

        projectsContainer.appendChild(card);
    });
}


renderProjects();
 window.sessionStorage.clear();
