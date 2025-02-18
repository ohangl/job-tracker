document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login functionality coming soon!");
        });
    }
});
