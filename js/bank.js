  document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value; 
    //console.log(userEmail);
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    if(userEmail == 'abc@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
        //console.log('valid information');
    } 
});
 

