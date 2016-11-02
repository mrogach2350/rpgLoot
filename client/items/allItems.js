Meteor.subscribe('items');

Template.allItems.helpers({
  currentPlayer: ()=> {
    var current = FlowRouter.current();
    return current.params.characterName;
  },
  items: ()=> {
    return Items.find({owner: {$ne: 'DM'}});
  }
});
Template.allItems.events({
  'click .toggle-group'() {
    Meteor.call('toggleGroupItem', this._id, this.inGroupStash);

    var current = FlowRouter.current();
    if (current.params.characterName){
      newOwner = current.params.characterName;
    } else {
      newOwner = "DM";
    }
    Meteor.call('togglePlayerItem', this._id, newOwner );
  },
  'click .delete'() {
    Items.remove(this._id);
  }
});
