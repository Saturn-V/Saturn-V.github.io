Meteor.methods({
  'uploadFile': function(file) {

  /* Remember the method name must match the method name from the client call. The parameters passed from the client can be referenced by file.paramname */
    var response;
    if (file === void 0) {
      throw new Meteor.Error(500, "Missing File", "", "");
    }
    response = file.azureUpload(file.name, "askaway", "jpGdXJK8R7mmdiSEN5EH9EY0dOfolzT/0JvGID0T5KDI3ZJetNLAMIStbXRpug+u9dDaVRnC51uXumYUfc7VqQ==", "askaway");
    return console.log(response);
    /* Once file is completely uploaded you get a url in the response . Remember the file is uploaded in chunks so this function will be triggered multiple times. The response will contain the url parameter only if the file is completely uploaded */
  }
});