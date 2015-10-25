Template.signUp.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    // $(document)
    // .ready(function() {
    //
    //     // fix menu when passed
    //     $('#slide-out')
    //     .visibility({
    //         once: false,
    //         removeCover: function() {
    //             $('body').css({});
    //         }
    //     });
    // });


})



Template.signUp.events({
  'click #sign_up_submit' : function(event){
      event.preventDefault();
      console.log("Submit button pressed");
      var firstName = $("#first_name").val();
      var lastName = $("#last_name").val();
      var password = $("#usersPassword").val();
      var email = $("#my_email").val();
      var association = $(".association a.active").text();

      var profile = {
        FirstName : firstName,
        LastName: lastName,
        Association: association
      }

      Accounts.createUser({email: email, password: password, profile: profile}, function(error){
          if (error){
            swal({   
              title: "Something appears wrong",   
               text: error.reason,   
               type: "warning",   
               showCancelButton: false,   
               confirmButtonColor: "#DD6B55",   
               confirmButtonText: "Let's try again!",   
               closeOnConfirm: false 
             });
            console.log("Something went wrong when creating the user" + error.reason);
          }
          else {
            console.log("Success! Account created. Now verify your email address!");
            swal("Your account has been created!", "Verify your email address using the link we just sent you", "success");
            // Router.go('/home');
          }
      })
  }
});