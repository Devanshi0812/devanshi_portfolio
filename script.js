// Toggle Navbar Menu for Mobile
const menuIcon = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close Navbar on Click (Mobile)
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Typing Text Effect in Home Section
const roles = ["Full Stack Developer", "CSE Student", "Coder & Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const typingTextElement = document.querySelector('.typing-text');

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingTextElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingTextElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(roles.length) setTimeout(typeEffect, 1000);
});

// Combined HTML, CSS, and JS Project Code Repository
const projectCodes = {
    netflix: `/* ======================================================
   PROJECT 1: NETFLIX MIRROR CLONE
   Author: Devanshi Dubey
   ====================================================== */

/* --- 1. HTML STRUCTURE --- */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Netflix Mirror</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="navbar">
        <h1 class="brand">NETFLIX</h1>
        <div class="user-profile">Devanshi Dubey</div>
    </header>
    <section class="banner">
        <h2>Unlimited Movies, TV Shows & More</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <button class="btn-play" onclick="playMovie()">Play Trailer</button>
    </section>
    <div class="row">
        <h3>Trending Now</h3>
        <div class="card-list">
            <div class="card">Stranger Things</div>
            <div class="card">Money Heist</div>
            <div class="card">Breaking Bad</div>
        </div>
    </div>
</body>
</html>

/* --- 2. CSS STYLING --- */
body {
    background-color: #141414;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, sans-serif;
    margin: 0;
}
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px 5%;
    background: rgba(0,0,0,0.8);
}
.brand {
    color: #e50914;
    font-size: 2rem;
    font-weight: bold;
}
.banner {
    text-align: center;
    padding: 70px 20px;
    background: linear-gradient(to top, #141414, rgba(0,0,0,0.6));
}
.btn-play {
    background: #e50914;
    color: #fff;
    padding: 12px 28px;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
}
.row {
    padding: 20px 5%;
}
.card-list {
    display: flex;
    gap: 20px;
    overflow-x: auto;
}
.card {
    min-width: 220px;
    height: 130px;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid #333;
}

/* --- 3. JAVASCRIPT LOGIC --- */
function playMovie() {
    alert("Streaming connection established! Playing selected video title...");
}
console.log("Netflix Mirror initial state loaded successfully.");`,

    kanban: `/* ======================================================
   PROJECT 2: KANBAN TASK MANAGEMENT BOARD
   Author: Devanshi Dubey
   ====================================================== */

/* --- 1. HTML STRUCTURE --- */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kanban Board</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kanban-container">
        <div class="kanban-column" id="todo">
            <h3>To Do</h3>
            <div class="task" draggable="true">Design UI Wireframes</div>
            <div class="task" draggable="true">Database Schema</div>
        </div>
        <div class="kanban-column" id="progress">
            <h3>In Progress</h3>
            <div class="task" draggable="true">User Authentication</div>
        </div>
        <div class="kanban-column" id="done">
            <h3>Done</h3>
            <div class="task" draggable="true">Requirement Analysis</div>
        </div>
    </div>
</body>
</html>

/* --- 2. CSS STYLING --- */
body {
    background-color: #0f172a;
    color: #f8fafc;
    font-family: sans-serif;
    padding: 30px;
}
.kanban-container {
    display: flex;
    gap: 25px;
    justify-content: center;
}
.kanban-column {
    background: #1e293b;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    min-height: 450px;
    border: 1px solid #334155;
}
.kanban-column h3 {
    color: #38bdf8;
    text-align: center;
    margin-bottom: 15px;
}
.task {
    background: #334155;
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 6px;
    cursor: grab;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.task:active {
    cursor: grabbing;
    opacity: 0.5;
}

/* --- 3. JAVASCRIPT LOGIC --- */
const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.kanban-column');

tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        task.classList.add('dragging');
    });
    task.addEventListener('dragend', () => {
        task.classList.remove('dragging');
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        const activeTask = document.querySelector('.dragging');
        column.appendChild(activeTask);
    });
});`,

    law: `/* ======================================================
   PROJECT 3: LAW PORTAL & CASE TRACKER
   Author: Devanshi Dubey
   ====================================================== */

/* --- 1. HTML STRUCTURE --- */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Law Case Portal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="law-box">
        <h2>Legal Case Filing Portal</h2>
        <form id="lawForm">
            <input type="text" id="client" placeholder="Client Name" required>
            <input type="text" id="casetype" placeholder="Case Type (Civil/Criminal)" required>
            <textarea id="summary" placeholder="Case Summary" rows="3" required></textarea>
            <button type="submit" class="btn-law">Register Record</button>
        </form>
        <div id="outputMsg"></div>
    </div>
</body>
</html>

/* --- 2. CSS STYLING --- */
body {
    background-color: #0b0f19;
    color: #f1f5f9;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.law-box {
    background: #111827;
    padding: 35px;
    border-radius: 10px;
    width: 420px;
    border: 1px solid #374151;
}
.law-box h2 {
    color: #f59e0b;
    text-align: center;
    margin-bottom: 20px;
}
input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    background: #1f2937;
    border: 1px solid #4b5563;
    color: #fff;
    border-radius: 6px;
    outline: none;
}
.btn-law {
    width: 100%;
    background: #f59e0b;
    color: #111;
    padding: 12px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

/* --- 3. JAVASCRIPT LOGIC --- */
document.getElementById('lawForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const client = document.getElementById('client').value;
    const type = document.getElementById('casetype').value;
    
    const msg = document.getElementById('outputMsg');
    msg.style.color = "#10b981";
    msg.style.marginTop = "12px";
    msg.innerHTML = \`Success! Case registered for \<b>\${client}\</b> under '\${type}' division.\`;
    this.reset();
});`,

    ecommerce: `/* ======================================================
   PROJECT 4: E-COMMERCE PLATFORM
   Author: Devanshi Dubey
   ====================================================== */

/* --- 1. HTML STRUCTURE --- */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>E-Commerce Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="store-header">
        <h2>Devanshi Store</h2>
        <div class="cart-badge">Cart: <span id="count">0</span> Items</div>
    </header>
    <main class="store-grid">
        <div class="product-card">
            <h4>Wireless Headphones</h4>
            <p class="price">₹2,499</p>
            <button onclick="addItem()">Add to Cart</button>
        </div>
        <div class="product-card">
            <h4>Smart Fitness Watch</h4>
            <p class="price">₹3,999</p>
            <button onclick="addItem()">Add to Cart</button>
        </div>
    </main>
</body>
</html>

/* --- 2. CSS STYLING --- */
body {
    background-color: #0f172a;
    color: #fff;
    font-family: sans-serif;
    margin: 0;
}
.store-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background: #1e293b;
    border-bottom: 1px solid #334155;
}
.cart-badge {
    background: #38bdf8;
    color: #0f172a;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: bold;
}
.store-grid {
    display: flex;
    gap: 30px;
    justify-content: center;
    padding: 60px 8%;
}
.product-card {
    background: #1e293b;
    padding: 25px;
    border-radius: 10px;
    width: 230px;
    text-align: center;
    border: 1px solid #334155;
}
.product-card h4 {
    margin-bottom: 10px;
}
.price {
    color: #94a3b8;
    margin-bottom: 15px;
}
.product-card button {
    background: #38bdf8;
    border: none;
    padding: 10px 20px;
    color: #0f172a;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

/* --- 3. JAVASCRIPT LOGIC --- */
let cartCounter = 0;
function addItem() {
    cartCounter++;
    document.getElementById('count').innerText = cartCounter;
    alert("Product added to shopping cart successfully!");
}`
};

// Modal Handling for View Code Popups
const modal = document.getElementById('codeModal');
const modalTitle = document.getElementById('modalTitle');
const modalCodeContent = document.getElementById('modalCodeContent');
const closeBtn = document.querySelector('.close-btn');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-code-btn')) {
        const projectKey = e.target.getAttribute('data-project');
        if (projectCodes[projectKey]) {
            modalTitle.innerText = e.target.parentElement.querySelector('h3').innerText;
            modalCodeContent.innerText = projectCodes[projectKey];
            modal.style.display = "block";
        }
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Dynamic Add Project Form Logic
const addProjectForm = document.getElementById('addProjectForm');
const projectContainer = document.getElementById('projectContainer');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('projTitle').value.trim();
    const link = document.getElementById('projLink').value.trim();
    const desc = document.getElementById('projDesc').value.trim();

    if(title === "" || link === "" || desc === "") {
        alert("Please fill in all project details!");
        return;
    }

    const uniqueKey = title.toLowerCase().replace(/\\s+/g, '-');
    projectCodes[uniqueKey] = `/* Custom Project: ${title} */\n/* GitHub Repository: ${link} */\n\n/* --- PROJECT OVERVIEW & CODE --- */\n${desc}`;

    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
   projectCard.innerHTML = `
        <div class="project-info">
            <h3>${title}</h3>
            <p>${desc.substring(0, 90)}...</p>
            <button class="btn-sm view-code-btn" data-project="${uniqueKey}">View Code</button>
        </div>
    `;

    projectContainer.appendChild(projectCard);
    alert(`Project "${title}" added successfully with full popup code support!`);
    addProjectForm.reset();
});

// Contact Form Handling with JavaScript Alert/Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset();
});