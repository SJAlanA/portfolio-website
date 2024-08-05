document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'SortViz', technology: 'C++',description: 'Using C++ and SDL2, created a sorting visualizer to observe the step-by-step workings of various sorting algorithms.' },
        { title: 'SkySaavy', technology: 'HTML, CSS, ReactJS', description: 'Developed a comprehensive weather application using ReactJS, HTML, and CSS, delivering real-time weather updates for over 1,000 cities.' },
        { title: 'Agri Spraying Drone', technology: 'Python, OpenCV, ESP8266, RaspberryPi', description: 'Automated Agri spraying Drone project under CEG Tech Forum, responsible for integrating sensors with micro-controller and establishing auto-docking capabilities with Aruco.' }
    ];

    const experiences = [
        { role: 'Cyber Security Trainee', company: 'TATA ELXSI, Chennai, TN', duration: 'January 2024 - June 2024', details: 'Gained exposure to network protocols such as CAN, LIN, FlexRay, and Ethernet. Proficient in Python, C, and Bash. Implemented various types of attacks and developed supportive tools for spoofing and encryption.' },
        { role: 'Project Intern', company: 'CSIR - CEERI, Chennai, TN', duration: 'July 2022 - August 2022', details: 'Worked on a drowsiness detection and alerting system using Python for live video processing and designed on ECG Sensor and Raspberry Pi.' },
        { role: 'Prototyping Intern', company: 'Singorison, AIC, Chennai, TN', duration: 'June 2022 - November 2022', details: 'Wrote PID control code for controlling the rotation of the encoder motor.' }
    ];

    const certifications = [
        'J.P. Morgan Software Engineering Virtual Experience, Forage, Aug 2024',
        'JPMorgan Chase & Co. Corporate Analyst Development Program (CADP), Forage, July 2024',
        'Career Essentials in Cybersecurity, Microsoft and LinkedIn, February 2024',
        'SQL Essential Training, LinkedIn, June 2024',
        'Mastering Data Structures and Algorithms Using C and C++, Udemy, July 2023'
    ];

    const leadershipRoles = [
        { role: 'Projects Student Director', organization: 'CEG Tech Forum', duration: 'July 2023 - May 2024', description: "As my tenure as the Projects Student Director of CEG Tech Forum comes to an end, I would like to share my experience and my gratitude to everyone. As the Projects Student Director, I managed and guided 14 projects across various domains. It was an incredible journey filled with sleepless nights. None of this would have been possible without the hard work of over 100 students. Our main goal was to spread Project-Based Learning (PBL) and multidisciplinary skills at the College of Engineering, Guindy. I\'m proud of what we\'ve achieved together! I\'m thrilled to share that our team recently presented our project at \"Technovation,\" an inter-college competition with over 40 teams from various universities. The range of ideas and solutions on display was truly inspiring! Seeing our project rise above the rest was an incredible moment for us. A huge congratulations to all the winners – your work was outstanding! The event day was a whirlwind of activity, from managing the workflow to ensuring everything ran smoothly. It was a hectic but amazing experience, and I\'m so proud of what we accomplished together. Being the student director of CEG Tech Forum, we conducted an international techno-management fest called KURUKSHETRA which was conducted from 28 Feb to 2 March 2024. Through out my tenure as the student director of CEG Tech Forum, I learnt a lot of stuff not just in my domain projects but also event management, finance and logistics domains. CEG Tech Forum is an excellent platform which not only let\'s you learn from the domain you chose but everything as a whole. I admire the commitment and leadership qualities of all the student directors who worked towards the success of Kurukshetra\'24." },
        { role: 'Marketing Core', organization: 'ECE Association of CEG', duration: 'July 2023 - May 2024', description: "In my role as Marketing Core for the Electronics and Communication Engineering Association, I spearheaded the marketing efforts for two major cultural events, Resonance and Vision. I developed and executed digital marketing strategies, leveraging social media platforms to maximize event visibility and engagement, and conducted promotional visits to various colleges to effectively communicate the value and excitement of our events to potential participants. Managing a team of over 15 junior members, I provided guidance and ensured cohesive and efficient execution of marketing tasks. I coordinated with associations from other colleges to expand our reach and foster a collaborative promotional environment, utilizing Excel to meticulously plan and track marketing strategies, ensuring all initiatives were organized and impactful. As a result, I successfully increased participation from targeted colleges, contributing to the overall success of the events, and enhanced my skills in digital marketing, social media marketing, and in-person marketing, gaining valuable experience in both strategic planning and team management." }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `<h3>${project.title}</h3><p><b>Technology:</b> ${project.technology}</p><p>${project.description}</p>`;
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
        leadershipItem.innerHTML = `<h3>${leadership.role}</h3><p>${leadership.organization}</p><p>${leadership.duration}</p><p>${leadership.description}</p>`;
        leadershipList.appendChild(leadershipItem);
    });

    // Set the current year in the footer
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
});
