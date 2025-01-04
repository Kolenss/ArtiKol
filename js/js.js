const users = JSON.parse(localStorage.getItem("users")) || [];

const about = document.getElementById('about');
const academic = document.getElementById('academic');
const hobby = document.getElementById('hobby');
const contact = document.getElementById('contact');
const loginbtn = document.getElementById('loginbtn');
const signupbtn = document.getElementById('signupbtn');
const cclogo = document.getElementById('cclogo');

if (users.length === 0) {
    if (cclogo) {
        cclogo.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
    if (about) {
        about.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
    if (academic) {
        academic.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
    if (hobby) {
        hobby.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
    if (contact) {
        contact.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
    if (loginbtn) {
        loginbtn.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
    if (signupbtn) {
        signupbtn.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
} else {
    if (cclogo) {
        cclogo.onclick = function () {
            window.location.href = "html/html.html";
        };
    }
    if (about) {
        about.onclick = function () {
            window.location.href = "html/aboutunfinish.html";
        };
    }
    if (academic) {
        academic.onclick = function () {
            window.location.href = "html/ctu.html";
        };
    }
    if (hobby) {
        hobby.onclick = function () {
            window.location.href = "html/hobbyunfi.html";
        };
    }
    if (contact) {
        contact.onclick = function () {
            window.location.href = "html/contact.html";
        };
    }
    if (loginbtn) {
        loginbtn.onclick = function () {
            window.location.href = "html/main.html";
        };
    }
    if (signupbtn) {
        signupbtn.onclick = function () {
            window.location.href = "html/signup.html";
        };
    }
};

