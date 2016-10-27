Items = new Meteor.Collection('items');

ItemSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    }
  }
});

Items.attachSchema(ItemSchema);
