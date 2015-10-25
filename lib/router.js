// GLOBAL IRON ROUTER CONFIG
Router.configure({
  layoutTemplate: 'layout',
    notFoundTemplate: '404'
});


// Home
Router.route('/', {
  template: 'landing',
  name: "landing"
});

Router.route('/signUp', {
  template: 'signUp',
  name: 'signUp'
});

Router.route('/aboutUs', {
  template: 'aboutUs',
  name: 'aboutUs'
});


Router.route('/home', {
  template: 'home',
  name: 'home'
});

Router.route('/logIn', {
  template: 'logIn',
  name: 'logIn'
});


Router.route('/departmentOverview', {
  template: 'departmentOverview',
  name: 'departmentOverview'
});


Router.route('/loadData', {
  template: 'loadData',
  name: 'loadData'
});


Router.route('/profile', {
    template: 'profile', 
    name: 'profile'
});

Router.route('/forgotPassword', {
    template: 'forgotPassword', 
    name: 'forgotPassword'
});


Router.route('/coursesOverview/:_id', {
    template: 'coursesOverview',
    name: 'coursesOverview',
    data : function(){
        return Departments.findOne({_id: this.params._id });
    }
})


Router.route('/courseDetails/:_id', {
    template: 'courseDetails',
    name: 'courseDetails',
    data : function(){
        return Courses.findOne({_id: this.params._id });
    }
    
})