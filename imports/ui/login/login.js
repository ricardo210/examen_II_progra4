import "./login.html";

Template.login.events({
  "click #login"(event){
      var User = {
        username: $("#usernameInput").val(),
        password: $("#passwordInput").val()
      }
      Meteor.loginWithPassword($("#usernameInput").val(), $("#passwordInput").val(), function(error){
      });
  }
});
