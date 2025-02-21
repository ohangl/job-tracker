document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const jobList = document.getElementById("job-list");
    const addJobButton = document.getElementById("add-job");
    const loginBtn = document.getElementById("login-btn");

    // Handle Login
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                localStorage.setItem("user", username);
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Please enter valid credentials.");
            }
        });
    }

    // Check if user is logged in
    if (localStorage.getItem("user")) {
        if (loginBtn) {
            loginBtn.textContent = "Logout";
            loginBtn.addEventListener("click", function () {
                localStorage.removeItem("user");
                alert("Logged out!");
                window.location.href = "login.html";
            });
        }
    }

    // Add Job Functionality
    if (addJobButton && jobList) {
        addJobButton.addEventListener("click", function () {
            const newJob = document.createElement("div");
            newJob.textContent = "New Job - " + new Date().toLocaleString();
            newJob.classList.add("job-item");
            jobList.appendChild(newJob);
        });
    }
});
