Items = new Mongo.Collection('items');

Items.allow({
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

ItemSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  weight: {
    type: Number,
    label: "Weight"
  },
  quantity: {
    type: Number,
    label: "Quantity"
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
  owner: {
    type: String,
    label: "Owner",
    defaultValue: "DM",
    autoform: {
      type: "hidden"
    }
  },
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
  inGroupStash: {
    type: Boolean,
    label: 'In Group Stash',
    defaultValue: false,
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  toggleGroupItem: function(id, currentState) {
      Items.update(id, {
        $set: {
          inGroupStash: !currentState
        }
      });
    },
    toggleDMItem: function(id) {
        Items.update(id, {
          $set: {
            owner: 'Group'
          }
        });
      },
    togglePlayerItem: function(id, newOwner) {
        Items.update(id, {
          $set: {
            owner: newOwner
          }
        });
      }
});

Items.attachSchema(ItemSchema);
