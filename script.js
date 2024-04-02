
  function signUp() {
    let username = document.getElementById('signupusername').value;
    let password = document.getElementById('signuppassword').value;
    let confirmPassword = document.getElementById('confirmsignuppassword').value;
    // let checker = document.getElementById('checker').value;

    if (username === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all fields.');
      return false; 
    }
    // if (!checker.checked) {
    //     alert('Please agree to the terms and conditions.');
    //     return false; 
    //   }
    //  if ( password < 8 && confirmpassword < 8){
    //     alert('Password must be atleast eight characters')
    //     return false; 
    // }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match..');
      return false; 
    }

    if (localStorage.getItem(username) !== null) {
      alert('User already exists! Please choose a different username.');
      return false; 
    } 

    localStorage.setItem(username, password);
    alert('Sign up successful!');
    return false; 
  }

  function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    if(localStorage.getItem(username) === password) {
      alert('Login successful!');
   
    } else {
      alert('Invalid username or password!');
    }
    return false; }
