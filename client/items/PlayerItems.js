Meteor.subscribe('items');

Template.PlayerItems.helpers({
  currentPlayer: ()=> {
    var current = FlowRouter.current();
    return current.params.characterName;
  },

  items: ()=> {
    var current = FlowRouter.current();
    return Items.find({owner: current.params.characterName, inGroupStash: false });
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
