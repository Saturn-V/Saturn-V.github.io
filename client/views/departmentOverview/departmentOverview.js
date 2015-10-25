Template.departmentOverview.events({

})


Template.departmentOverview.helpers({
    departments : function(){
      return Departments.find({}, {sort : {name : -1}});  
    }
    
})

 Template.departmentOverview.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();


})