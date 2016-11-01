Meteor.subscribe('items');

Template.Items.helpers({
  items: ()=> {
    return Items.find({inGroupStash: false});
  }
});

Template.Items.events({
  'click .toggle-group'() {
    Meteor.call('toggleGroupItem', this._id, this.inGroupStash);
  },
  'click .delete'() {
    Items.remove(this._id);
  }
});
