Meteor.subscribe('items');

Template.PlayerItems.helpers({
  items: ()=> {
    return Items.find({inGroupStash: false});
  }
});
Template.PlayerItems.events({
  'click .toggle-group'() {
    Meteor.call('toggleGroupItem', this._id, this.inGroupStash);
  },
  'click .delete'() {
    Items.remove(this._id);
  }
});
