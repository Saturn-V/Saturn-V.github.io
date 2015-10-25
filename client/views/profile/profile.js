Template.profile.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();


})

Template.profile.helpers({
    name: function() {
        return Meteor.user().profile.FirstName + " " + Meteor.user().profile.LastName;
    },
    
    bio: function() {
        return Meteor.user().profile.bio;
    }, 
    
    email: function() {
        return Meteor.user().emails[0].address;
    },

    fullName : function(){
        return capitalizeFirstLetter(Meteor.user().profile.FirstName) + " " + capitalizeFirstLetter(Meteor.user().profile.LastName);
    },

    
})



var capitalizeFirstLetter =function(string){
         return string.charAt(0).toUpperCase() + string.slice(1);
}

Template.profile.events({
  
  'click #expand' : function(event){
    event.preventDefault();
    document.getElementById('#height-change').setAttribute("style","height: 500px");

  }
})