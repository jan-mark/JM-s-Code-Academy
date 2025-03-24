function maincontent(page){
    let contentDiv = document.getElementById("content");


    if (page == "home") {
        window.location.href = 'index.html';
    } else if (page == "about") {
        window.location.href = 'about.html';
    } else if (page == 'c-lang') {
        window.location.href = 'c-lang.html';
    } else if (page == 'python') {
        window.location.href = 'python.html';
    } else if (page == 'html') {
        window.location.href = 'Html.html';
    } else if (page == 'js') {
        window.location.href = 'js.html';
    } else if (page == 'php') {
        window.location.href = 'php.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let topics = document.querySelectorAll(".topic");

    topics.forEach(topic => topic.style.display = "none");

    function showTopic(topicId) {
        topics.forEach(topic => topic.style.display = "none"); 
        document.getElementById(topicId).style.display = "block"; 
    }

    let sidebarLinks = document.querySelectorAll(".left-sidebar ul li a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            let topicId = this.getAttribute("href").substring(1); 
            showTopic(topicId);
        });
    });

    showTopic("intro");
});

document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username && password) { 
                window.location.href = "index.html"; 
            } else {
                document.getElementById("error-message").textContent = "Please enter a username and password!";
            }
        });
    }
});

function cat() {
    window.location.href = 'Random API Integration/index.html';
}

function dog() {
    window.location.href = 'Random API Integration/index.html';
}

function quotes() {
    window.location.href = 'Random API Integration/index.html';
}