Meteor.subscribe('items');

Template.PlayerItems.helpers({
<<<<<<< HEAD
  currentPlayer: ()=> {
    var current = FlowRouter.current();
    return current.params.characterName;
  },

=======
>>>>>>> 1c91285ae9576a91c7850a75bed46cfea7788c4b
  items: ()=> {
    var current = FlowRouter.current();
    return Items.find({owner: current.params.characterName, inGroupStash: false });
  }
});
<<<<<<< HEAD

=======
>>>>>>> 1c91285ae9576a91c7850a75bed46cfea7788c4b
Template.PlayerItems.events({
  'click .toggle-group'() {
    Meteor.call('toggleGroupItem', this._id, this.inGroupStash);
  },

  'click .delete'() {
    Items.remove(this._id);
  }
});
