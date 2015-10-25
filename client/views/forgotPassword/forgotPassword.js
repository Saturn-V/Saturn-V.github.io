
Template.forgotPassword.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();


})

Template.forgotPassword.helpers({
 resetPassword: function(){
    return Session.get('resetPassword');
  }
});



Template.forgotPassword.events({
  
  // Send reset email button pressed
  'click #sendResetEmail' : function(event){
    event.preventDefault();
    requestResestPassword();



  },

  // Reset with new password button pressed
  'click #resetPassword' : function(event) {
        event.preventDefault();
        changePassword();    
  }
  // End 
});






var changePassword = function (newPassword){
    
    // Pull data from form
    var newPassword = $("input[name='passwordOne']").val();
    var confirmationPassword = $("input[name='passwordTwo']").val();

    console.log(newPassword);

    Accounts.resetPassword(Session.get('resetPassword'), newPassword, function(err, result){
              if (err){                        
                swal({   
                title: "Something appears wrong",   
                 text: err.reason,   
                 type: "warning",   
                 showCancelButton: false,   
                 confirmButtonColor: "#DD6B55",   
                 confirmButtonText: "Let's try again!",   
                 closeOnConfirm: false }, function(){
                    Router.go("/forgotPassword");
                 });
              }
              else {            
                //Reset toggle
                Session.set('resetPassword', null);
                
                // Enable Welcome back message
                console.log("Password changed" + result);

                // Send user back to login
                Router.go('/home');
              }
    });
}





var requestResestPassword = function(){
    // Pull information
    var resetEmail = $("input[name='email']").val();

    Accounts.forgotPassword({email : resetEmail}, function(err){
                  if (err){
                    if (err.message === "User not found [403]"){
                        
                        console.log("User not found [403]");
                        return;
                    }
                    else{
                      
                      console.log(err);
                      return;
                    }
                  }
                  else{
                    console.log(" The email has been sent");
                    //  Set flash animation to let the user know that the reset email has been sent
                    
                  }
    });
}

