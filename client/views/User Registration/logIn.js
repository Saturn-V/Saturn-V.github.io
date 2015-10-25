Template.logIn.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $("#sidenav-overlay").remove();

    // $(document)
 //    .ready(function() {
 //        $('#slide-out')
 //        .visibility({
 //            once: false,
 //            removeCover: function() {
 //                $('body').css({});
 //            }
 //        });
 //    });

})


    
Template.logIn.events({
  'click #logInButton' : function(event){
      event.preventDefault();
      console.log("Sign in button pressed");

      var password = $("#password").val();
      var email = $("#email").val();


      Meteor.loginWithPassword(email, password, function(err){
          if (err) {
            swal({   
                title: "Something appears wrong",   
                 text: err.reason,   
                 type: "warning",   
                 showCancelButton: false,   
                 confirmButtonColor: "#DD6B55",   
                 confirmButtonText: "Let's try again!",   
                 closeOnConfirm: false });
          }
          else{
            // console.log("The user has successfully logged in. Normally you'd be routed to the home page. But that page is currently under construction");
            Router.go("/home");
          }
      });
  }
});