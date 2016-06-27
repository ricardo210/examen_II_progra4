import "./listPosts.html";
import { Posts } from '../../api/post.js';

Template.listPosts.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listPosts.events({
    'click #addPostButton'(event){
      // console.log('user id'+ Meteor.userId());
        let post = {
            title: $('#title').val(),
            description: $('#description').val(),
            creator: Meteor.userId()
        };
        $('#title').val(""),
        $('#description').val("")
        Meteor.call('posts.insert', post)
    },
    'click .delete'() {
        Meteor.call('posts.remove', this._id);
    },

})
Template.listPosts.helpers({
    posts(){
        var posts = Posts.find({creator: Meteor.userId()});
        return posts;
    }
});
