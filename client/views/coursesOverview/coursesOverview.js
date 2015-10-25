Template.coursesOverview.helpers({
    getCourses: function() {
        return Courses.find({}, {sort : {courseCode : 1}});
    },

    getQuestions : function(){
        var questions = Questions.find({postID: Router.current().params._id}, {sort: {postedAt: -1}}).fetch();
        return questions;
    }
})

Template.coursesOverview.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();


})



Template.coursesOverview.events({
    'click #postQuestion': function(event) {

        var title = $('#title').val();
        var description = $("#description").val();

        Questions.insert({title: title, description: description, postedAt: new Date(), postedBy: Meteor.userId(), 
                          postID: Router.current().params._id, department: true}, function(error){
                            if (!error) console.log("Question successfully posted");
                          });
        
    }
})
