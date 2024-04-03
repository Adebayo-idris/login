let signupbtn = document.getElementById("sign-up");
let checker = document.getElementById("checker");
let loading = false;
signupbtn.setAttribute("disabled", true);

let allUsers = JSON.parse(localStorage.getItem("users")) || [];

function signUp(ev) {
    ev.preventDefault();
    let username = document.getElementById("signupusername").value;
    let email = document.getElementById("signupemail").value;
    let password = document.getElementById("signuppassword").value;
    let confirmPassword = document.getElementById("confirmsignuppassword").value;

    if (username === "" || password === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    } else if (password.length < 8) {
        alert("Password too short");
        return;
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    } else if (!checker.checked) {
        alert("Please agree to terms");
        return;
    } else {
        loading = true;
        loading ? (signupbtn.innerHTML = `Please wait ...`) : "Sign up";
        setTimeout(() => {
            let newUser = {
                username: username,
                email: email,
                password: password,
                agree: checker.checked,
            };
            allUsers.push(newUser)
            localStorage.setItem("users", JSON.stringify(allUsers)); 
            alert("Registration successful");
            window.location.href = "login.html";
        }, 3000);
    }
}

document.getElementById("checker").addEventListener("change", () => {
    signupbtn.disabled = !checker.checked; 
});

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    let user = allUsers.find(user => user.username === username);

    if (user && user.password === password) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password!");
    }
    return ;
}
