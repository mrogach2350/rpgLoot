Meteor.subscribe('items');

Template.Items.helpers({
  items: ()=> {
    return Items.find({owner: this.userId});
  }
});
