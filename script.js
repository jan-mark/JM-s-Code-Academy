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

    let sidebarLinks = document.querySelectorAll(".sidebar ul li a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            let topicId = this.getAttribute("href").substring(1); 
            showTopic(topicId);
        });
    });

    showTopic("intro");
});
