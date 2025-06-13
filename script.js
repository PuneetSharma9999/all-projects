// Sample project data - replace with your actual projects
const projects = [
    {
        id: 1,
        title: "Oye - Ultimate Meme Quiz",
        description: "Interactive meme-based quiz game with multiple categories and score tracking.",
        tags: ["web", "api"],
        image: "/public/oye-meme-quiz.png",
        date: "2025-05-27",
        demoUrl: "https://oye-meme-quiz.vercel.app",
        codeUrl: "https://github.com/PuneetSharma9999/oye-meme-quiz"
    },
    {
        id: 2,
        title: "Word Search Adventure",
        description: "Engaging word search puzzle game with customizable grid sizes and themes.",
        tags: ["mobile"],
        image: "/public/wordsearch.png",
        date: "2025-04-13",
        demoUrl: "https://searchgame.vercel.app",
        codeUrl: "https://github.com/PuneetSharma9999/Word-Search-Game"
    },
    {
        id: 3,
        title: "Portfolio",
        description: "Personal portfolio website showcasing projects, skills, and contact information.",
        tags: ["design"],
        image: "/public/portfolio.webp",
        date: "2025-03-09",
        demoUrl: "https://portfolio-puneet.vercel.app",
        codeUrl: "https://github.com/PuneetSharma9999/portfolio-puneet"
    },
    {
        id: 4,
        title: "Oye - AI Chatbot",
        description: "AI-powered chatbot with natural language processing and conversation history.",
        tags: ["api"],
        image: "/public/oye-ai.png",
        date: "2025-04-15",
        demoUrl: "https://oye-ai-chatbot.vercel.app",
        codeUrl: "https://github.com/PuneetSharma9999/Oye-AI--Chatbot"
    },
    {
        id: 5,
        title: "Real-Time Language Translator",
        description: "Instant translation tool supporting multiple languages with voice input/output.",
        tags: ["web","api"],
        image: "/public/translator.webp",
        date: "2025-02-09",
        demoUrl: "https://live-translator.netlify.app",
        codeUrl: "https://github.com/PuneetSharma9999/lang-translator"
    },
    {
        id: 6,
        title: "JSD Engineering",
        description: "Company website for engineering services with project showcase and contact form.",
        tags: ["web", "mobile"],
        image: "/public/custom engineering solution thumbnail3.webp",
        date: "2025-04-05",
        demoUrl: "https://jsde.vercel.app",
        codeUrl: "Code is private."
    },
    {
        id: 7,
        title: "Portfolio - Suman Goyat",
        description: "Professional portfolio website for a designer with project gallery and bio.",
        tags: ["web", "mobile"],
        image: "/public/portfo.png",
        date: "2025-04-06",
        demoUrl: "https://sumangoyat.vercel.app",
        codeUrl: "Code is private."
    },
    {
        id: 8,
        title: "Calculator",
        description: "Feature-rich calculator application with scientific functions and history log.",
        tags: ["web", "mobile"],
        image: "/public/calculator.webp",
        date: "2025-03-10",
        demoUrl: "https://calculatorbypuneet.netlify.app",
        codeUrl: "https://github.com/PuneetSharma9999/calculator/tree/main/calculator"
    },
    {
        id: 9,
        title: "Age Calculator",
        description: "Tool that calculates precise age in years, months, and days from birthdate.",
        tags: ["web", "mobile"],
        image: "/public/agecalculator.webp",
        date: "2025-02-16",
        demoUrl: "https://age-calculator99.netlify.app",
        codeUrl: "https://github.com/PuneetSharma9999/Age-calculate/tree/main/Age%20calculator"
    },
    {
        id: 10,
        title: "AI - Insights",
        description: "Platform providing AI-generated insights and data visualizations on various topics.",
        tags: ["web", "mobile"],
        image: "/public/ai-insight.png",
        date: "2025-04-11",
        demoUrl: "https://ai-insights99.vercel.app",
        codeUrl: "https://github.com/PuneetSharma9999/ai"
    },
    {
        id: 11,
        title: "Login and Signup Form",
        description: "Secure authentication system with form validation and responsive design.",
        tags: ["web", "mobile"],
        image: "/public/loginform.webp",
        date: "2025-02-25",
        demoUrl: "https://login9999.netlify.app",
        codeUrl: "https://github.com/PuneetSharma9999/login-form"
    }
];

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-tags button');
const sortSelect = document.getElementById('sort-projects');
const yearElement = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    yearElement.textContent = new Date().getFullYear();
    
    // Load all projects
    renderProjects(projects);
    
    // Setup event listeners
    setupEventListeners();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
});

// Render projects to the DOM
function renderProjects(projectsToRender) {
    projectsContainer.innerHTML = '';
    
    projectsToRender.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.dataset.tags = project.tags.join(' ');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-meta">
                    <span class="project-date">${formatDate(project.date)}</span>
                    <div class="project-links">
                        <a href="${project.demoUrl}" target="_blank" class="demo">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.codeUrl}" target="_blank" class="code">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Format date as "Month Day, Year"
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterProjects();
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterProjects();
        });
    });
    
    // Sort functionality
    sortSelect.addEventListener('change', function() {
        filterProjects();
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Filter and sort projects based on current selections
function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-tags button.active').dataset.filter;
    const sortValue = sortSelect.value;
    
    let filteredProjects = projects.filter(project => {
        // Search filter
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                            project.description.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = activeFilter === 'all' || 
                              project.tags.includes(activeFilter);
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort projects
    filteredProjects = sortProjects(filteredProjects, sortValue);
    
    // Render filtered projects
    renderProjects(filteredProjects);
}

// Sort projects based on selected option
function sortProjects(projectsToSort, sortBy) {
    return [...projectsToSort].sort((a, b) => {
        switch(sortBy) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'oldest':
                return new Date(a.date) - new Date(b.date);
            case 'name':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}

// Toggle between dark and light theme
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-tags button.active').dataset.filter;
    const sortValue = sortSelect.value;
    
    let filteredProjects = projects.filter(project => {
        // Search filter
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                            project.description.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = activeFilter === 'all' || 
                              project.tags.includes(activeFilter);
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort projects
    filteredProjects = sortProjects(filteredProjects, sortValue);
    
    // Show "Not Found" message if no projects match
    if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = `
            <div class="not-found">
                <i class="fas fa-search"></i>
                <h3>No Projects Found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
    } else {
        // Render filtered projects
        renderProjects(filteredProjects);
    }
}