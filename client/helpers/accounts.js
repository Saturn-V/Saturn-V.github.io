

// Verification call back
Accounts.onEmailVerificationLink(function(token, done){
    //Marks verified as true  
    Accounts.verifyEmail(token);
    Router.go("/home");
});


var doneCallback;

Accounts.onResetPasswordLink(function(token, done) {
   // send back to /forgotPassword page
    Router.go("/forgotpassword");

    // Set a new session variable with the reset token from email
    Session.set('resetPassword', token);  
    
    // store the done callback
    doneCallback = done;  
    //console.log("onResetPasswordLink, and token is  " + token);
});