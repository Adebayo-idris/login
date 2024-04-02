let signupbtn = document.getElementById("sign-up");
let checker = document.getElementById('checker');
let loading = false
signupbtn.setAttribute("disabled", true)
let allUser = []
function signUp(ev) {
  ev.preventDefault();
  let username = document.getElementById('signupusername').value;
  let email = document.getElementById('signupemail').value;
  let password = document.getElementById('signuppassword').value;
  let confirmPassword = document.getElementById('confirmsignuppassword').value;

  if (username === '' || password === '' || email === '') {
    alert('Please fill in all fields.');
    return;
  }else if(password.length < 8){
    alert("Password too short");
    return;
  }else if(password !== confirmPassword){
    alert("Pass doz not match");
    return;
  }else if(checker.checked == false){
    alert("Please agree");
    return;
  }else{
    loading = true;
    loading? signupbtn.innerHTML =`Please wait ...
    `:"Sign up";
    setTimeout(()=>{
      let info = {
        username: username,
        email: email,
        password: password,
        agree: checker.checked
      }
      allUser.push(info)
      localStorage.setItem("details", JSON.stringify(allUser));
      alert("Registration successfull");
      window.location.href = "login.html"
    }, 3000)
  }
}
document.getElementById("checker").addEventListener("change", ()=>{
  console.log("rrr");
  signupbtn.removeAttribute("disabled")
  // signupbtn.setAttribute("disabled", true)? signupbtn.removeAttribute("disabled"): signupbtn.setAttribute("disabled", true)
  checker.checked?signupbtn.removeAttribute("disabled"):signupbtn.setAttribute("disabled", true)
})
function login() {
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  if (localStorage.getItem(username) === password) {
    alert('Login successful!');

  } else {
    alert('Invalid username or password!');
  }
  return false;
}
