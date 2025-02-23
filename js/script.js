document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Active Link Update
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Dynamic Skills Loading
    const skillsContainer = document.querySelector('.skills__container');
    const skills = [
        'Cyber Security', 'ARM', 'Python', 
        'C', 'Assembly', 'Reverse Engineering', 
        'ISO 21434', 'UDS', 'CAN'
    ];

    skills.forEach(skill => {
        const skillPill = document.createElement('span');
        skillPill.className = 'skill-pill';
        skillPill.textContent = skill;
        skillsContainer.appendChild(skillPill);
    });

    const style = document.createElement('style');
    style.textContent = `
        .skill-pill {
            display: inline-block;
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            background: var(--secondary-color);
            border-radius: 2rem;
            font-size: 0.9rem;
            transition: var(--transition);
        }

        .blog-post {
            background: var(--secondary-color);
            padding: 2rem;
            border-radius: var(--border-radius);
            margin-bottom: 1.5rem;
        }

        .blog-post__meta {
            color: var(--text-muted);
            font-size: 0.9rem;
            margin: 0.5rem 0;
        }

        .blog-post__link {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);

    // Dynamic Blog Loading
    const blogGrid = document.querySelector('.blog__grid');
    const blogPosts = [
        {
            title: 'My journey at CEG Tech Forum as Projects and Research Student Director',
            date: 'July, 2024',
            excerpt: 'Gratitude Post: Looking Back at an Amazing Experience as...',
            readTime: '5 min read',
            link: 'https://www.linkedin.com/posts/sahaijordialana_projects-cegtechforum-kurukshetra-activity-7198382442422951937-2-xW'
        },
        {
            title: 'Starting my career in automotive cybersecurity',
            date: 'June, 2024',
            excerpt: 'Excited to Share My Journey as a Cyber Security Trainee...',
            readTime: '3 min read',
            link: 'https://www.linkedin.com/posts/sahaijordialana_cybersecurity-internship-careergrowth-activity-7222298401470652416-zmyg'
        },
        // Add more posts as needed
    ];

    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <div class="blog-post__header">
                <h3>${post.title}</h3>
                <div class="blog-post__meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
            <p class="blog-post__excerpt">${post.excerpt}</p>
            <a href="${post.link}" class="blog-post__link">Read more →</a>
        `;
        blogGrid.appendChild(postElement);
    });

    // Dynamic Projects Loading
    const portfolioGrid = document.querySelector('.portfolio__grid');
    const projects = [
        { title: 'Road Accident Detection', technology: 'Python, CNN, OpenCV',description: 'Developed a deep learning model achieving 89.73% AUC, reducing false positives by 10% in real-time accident detection. <br><br>Implemented Resnet 18 which is a Convolution Neural Network (CNN) for feature extraction and trained a Multilayer Perceptron (MLP) for precise accident classification. <br><br>Enhanced road safety with an AI-driven mobile app for alerts.' },
        { title: 'Manhole Scavengeing Robot', technology: 'C, Arduino',description: 'Developed and integrated a load-detection system using current sensors to stop motors upon impact with obstacles, enhancing safety and performance. <br><br>Implemented PID control algorithms to improve encoder motor rotation accuracy by 100%, significantly increasing system efficiency. <br><br>Contributed to the full design and testing of electronic systems, with a focus on seamless mechanical and electrical integration.' },
        { title: 'Agri Spraying Drone', technology: 'Python, OpenCV, ESP8266, RaspberryPi', description: 'Automated Agri spraying Drone project under CEG Tech Forum, responsible for integrating sensors with micro-controller and establishing auto-docking capabilities with Aruco.' }
    ];

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.setProperty('--delay', `${index * 0.1}s`);
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <br><br>
            <h4>Tech Used: ${project.technology}</h4>
            <br><br>
            <p>${project.description}</p>
        `;
        portfolioGrid.appendChild(projectCard);
    });

    // Form Submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxh3mHTAo0_w78BDUEfcdUqdUhWMx0B9ecqTth-Pe7x857g92k_s_FITmKd0gCtoEi35Q/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg')

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Message Sent - Thanks for contacting!'
            setTimeout(() => {
                msg.innerHTML = ''
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
});
