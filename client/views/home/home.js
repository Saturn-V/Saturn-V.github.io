Template.home.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal-trigger').leanModal();


})

Template.home.events({
    'click #submitComment' : function(event){
        event.preventDefault();
        Comments.insert({comment: $("#comment").val(), 
                          QuestionsID: this._id,
                          postedBy: Meteor.userId(), 
                          postedAt: new Date()}, function(error){
                            if (error) console.log(error);
                            else $("#addComment").closeModal();
                          });
    }
    
})

Template.home.helpers({
    getQuestions: function() {
        return Questions.find({});
    },
    
    title: function() {
        return "title";
    }, 
    
    description: function() {
        return "Description";
    },
    
    getComments: function(item) {
        return Comments.find({ postID: item });
    }, 
    
    commentTitle: function() {
        return "commentTitle";
    },
    
    commentDescription: function() {
        return "comment Description";
    }
    
    
})