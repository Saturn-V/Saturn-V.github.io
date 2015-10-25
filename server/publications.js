 Meteor.startup(function () {

    while (Departments.find().count() <= 20) {
        Departments.insert({name: "Computer Science", 
                           code: "CS",
                          imageURL: "http://www.jsums.edu/compscience/files/2014/06/compsc.png"});


        Questions.insert({ title: "Comment subject", 
                          description: "This is a sample comment, simply for testing purposes",
                          postedAt: new Date(),
                          postedBy: this.userId, //ID of the user posting the comment
                          department: false, // flag on whether the comment was intended fo rthe overall department or not
                          postID: Courses.findOne()._id
                          }); //this is which post it came from - either the  departmentID or the courseID


        Courses.insert({ courseName: "Web Programming", 
                          courseCode: "CSC101",
                          // departmentID: Departments.findOne()._id,
                          departmentName: "Computer Science",
                          imageURL: "http://www.jsums.edu/compscience/files/2014/06/compsc.png",
                          teacherID: this.userId,
                          description: "This is a simple blurb. The only purpose of this is for testing purposes",
                          });

        Questions.insert({ title: "Comment subject", 
                          description: "This is a sample comment, simply for testing purposes",
                          postedAt: new Date(),
                          postedBy: this.userId, //ID of the user posting the comment
                          department: true, // flag on whether the comment was intended fo rthe overall department or not
                          postID: Departments.findOne()._id,
                          }); //this is which post it came fr

        Comments.insert({ comment: "Comment subject", 
                          QuestionsID: "This is a sample comment, simply for testing purposes",
                          postedBy: this.userId, //ID of the user posting the comment
                          postedAt: new Date(),
                          }); //this is which post it came fr

  }

});