// JavaScript to switch between login and register forms
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

// Function to show login form and hide register form
function login() {
    x.style.left = "0";
    y.style.right = "-520px";
    a.classList.add("white-btn");  // Add active class for the button
    b.classList.remove("white-btn");  // Remove active class from the other button
    x.style.opacity = 1;  // Fade in login form
    y.style.opacity = 0;  // Fade out register form
}

// Function to show register form and hide login form
function register() {
    x.style.left = "-520px";  // Slide login form off the screen
    y.style.right = "0";  // Slide register form into view
    a.classList.remove("white-btn");  // Remove active class from login button
    b.classList.add("white-btn");  // Add active class to register button
    x.style.opacity = 0;  // Fade out login form
    y.style.opacity = 1;  // Fade in register form
}



