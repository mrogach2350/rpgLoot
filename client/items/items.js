Meteor.subscribe('items');

Template.Items.helpers({
  items: ()=> {
    return Items.find({inGroupStash: false});
  }
});

Template.Items.events({
  'click .toggle-group'() {
    Meteor.call('toggleGroupItem', this._id, this.inGroupStash);
    Meteor.call('toggleDMItem', this._id);
  },
  'click .delete'() {
    Items.remove(this._id);
  }
});
