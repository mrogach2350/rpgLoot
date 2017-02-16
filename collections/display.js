Display = new Mongo.Collection('display');

Display.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});

DisplaySchema = new SimpleSchema({
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  },
  session: {
    type: String,
    label: "Session",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  message: {
    type: String,
    label: "message",
    autoform: {
      type: "hidden"
    }
  },
  owner: {
    type: String,
    label: "name",
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  deleteAllPosts: function(){
    return Display.remove({});
  }
});

Display.attachSchema(DisplaySchema);
