export const Posts = new Mongo.Collection('posts');

let Schema = {};
Schema.post = new SimpleSchema({
  description: {
    type: String,
    max: 100
  },
  creator: {
    type: String,
    max: 100
  }

});

Posts.attachSchema(Schema.post);

Meteor.methods({
  'posts.insert'(post){
      Posts.insert(post, function(err){
        if(err)
          throw new Meteor.Error('Error inserting post: ' + err);
      });
   },
   'posts.remove'(_id){
     Posts.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing post from your biography: ' + err);
     });
   }
})
