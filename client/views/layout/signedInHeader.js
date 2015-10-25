Template.signedInHeader.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal-trigger').leanModal();


})

Template.signedInHeader.events({
	'click #logout' : function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('/');
	}
})