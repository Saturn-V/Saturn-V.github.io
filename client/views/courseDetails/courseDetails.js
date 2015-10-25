Template.courseDetails.events({
    'click #postQuestion': function(event) {
        // event.preventDefault();

        var title = $('#title').val();
        var description = $("#description").val();

        Questions.insert({title: title, description: description, postedAt: new Date(), postedBy: Meteor.userId(), postID: Router.current().params._id, department: false }, function(error){
                            if (!error) console.log("Question successfully posted");
                          });
      }
})


Template.courseDetails.helpers({
    getQuestions : function(){
        var questions = Questions.find({postID: Router.current().params._id}, {sort: {postedAt: -1}}).fetch();
        return questions;
    },
    
    currentUser: function() {
        return Meteor.user() != null;
    }
})

Template.courseDetails.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal-trigger').leanModal();


})