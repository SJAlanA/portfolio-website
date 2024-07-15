document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'SortViz', description: 'Using C++ and SDL2, created a sorting visualizer to observe the step-by-step workings of various sorting algorithms.' },
        { title: 'SkySaavy', description: 'Developed a comprehensive weather application using ReactJS, HTML, and CSS, delivering real-time weather updates for over 1,000 cities.' },
        { title: 'Agri Spraying Drone', description: 'Automated Agri spraying Drone project under CEG Tech Forum, responsible for integrating sensors with micro-controller and establishing auto-docking capabilities with Aruco.' }
    ];

    const experiences = [
        { role: 'Cyber Security Trainee', company: 'TATA ELXSI, Chennai, TN', duration: 'January 2024 - June 2024', details: 'Gained exposure to network protocols such as CAN, LIN, FlexRay, and Ethernet. Proficient in Python, C, and Bash. Implemented various types of attacks and developed supportive tools for spoofing and encryption.' },
        { role: 'Project Intern', company: 'CSIR - CEERI, Chennai, TN', duration: 'July 2022 - August 2022', details: 'Worked on a drowsiness detection and alerting system using Python for live video processing and designed on ECG Sensor and Raspberry Pi.' },
        { role: 'Prototyping Intern', company: 'Singorison, AIC, Chennai, TN', duration: 'June 2022 - November 2022', details: 'Wrote PID control code for controlling the rotation of the encoder motor.' }
    ];

    const certifications = [
        'JPMorgan Chase & Co. Corporate Analyst Development Program (CADP), Forage, July 2024',
        'Career Essentials in Cybersecurity, Microsoft and LinkedIn, February 2024',
        'SQL Essential Training, LinkedIn, June 2024',
        'Mastering Data Structures and Algorithms Using C and C++, Udemy, July 2023'
    ];

    const leadershipRoles = [
        { role: 'Projects Student Director', organization: 'CEG Tech Forum', duration: 'July 2023 - May 2024' },
        { role: 'Marketing Core', organization: 'ECE Association of CEG', duration: 'July 2023 - May 2024' }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsGrid.appendChild(projectCard);
    });

    const experienceList = document.getElementById('experience-list');
    experiences.forEach(experience => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        experienceItem.innerHTML = `<h3>${experience.role}</h3><p>${experience.company}</p><p>${experience.duration}</p><p>${experience.details}</p>`;
        experienceList.appendChild(experienceItem);
    });

    const certificationsList = document.getElementById('certifications-list');
    certifications.forEach(certification => {
        const certItem = document.createElement('li');
        certItem.textContent = certification;
        certificationsList.appendChild(certItem);
    });

    const leadershipList = document.getElementById('leadership-list');
    leadershipRoles.forEach(leadership => {
        const leadershipItem = document.createElement('li');
        leadershipItem.innerHTML = `<h3>${leadership.role}</h3><p>${leadership.organization}</p><p>${leadership.duration}</p>`;
        leadershipList.appendChild(leadershipItem);
    });

    // Set the current year in the footer
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
});
