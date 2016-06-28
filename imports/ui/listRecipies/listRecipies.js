import "./listRecipies.html";
import { Recipies2 } from '../../api/recipies.js';

Template.listRecipies.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listRecipies.events({
    'click #addPostButton'(event){
      // console.log('user id'+ Meteor.userId());
        let recipies = {
            name: $('#name').val(),
            description: $('#description').val(),
            creator: Meteor.userId()
        };
        $('#name').val(""),
        $('#description').val("")
        Meteor.call('Recipies.insert', recipies)
    },
    'click .delete'() {
        Meteor.call('Recipies.remove', this._id);
    },

})
Template.listRecipies.helpers({
    Recipies(){
        var recipies = Recipies2.find({creator: Meteor.userId()});
        return recipies;
    }
});
