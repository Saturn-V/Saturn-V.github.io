Template.loadData.events({
  'click #dept_submit' : function(event, template){
    event.preventDefault();;


    var fileInput = template.find('input[type="file"]');
    console.log(fileInput);

    file = fileInput.files[0]

     AzureFile.upload(file,"uploadFile",{/*Pass some Parameters here */},function(err,success){
                                    if (err) throw err;
                                    else console.log("success");
     });
  }
})