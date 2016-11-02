Meteor.subscribe('items');

Template.GroupItems.helpers({
  items: ()=> {
    return Items.find({inGroupStash: true});
  }
});
Template.GroupItems.events({
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
