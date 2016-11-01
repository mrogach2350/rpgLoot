Meteor.subscribe('items');

Template.GroupItems.helpers({
  items: ()=> {
    return Items.find({inGroupStash: true});
  }
});
Template.GroupItems.events({
  'click .toggle-group'() {
    Meteor.call('toggleGroupItem', this._id, this.inGroupStash);
  },
  'click .delete'() {
    Items.remove(this._id);
  }
});
