import "./register.html";

Template.register.events({
  "click #register"(event){
      var Profile = {
        firstname: $("#usernameInput").val(),
        age: $("#ageInput").val()
      }
      var User = {
        username: $("#usernameInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val(),
        profile: Profile
      }
      Accounts.createUser(User, function(err){
      });
  }
});
