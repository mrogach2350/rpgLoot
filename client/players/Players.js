Meteor.subscribe('players');

Template.Players.helpers({
  players: ()=> {
    return Players.find({});
  }
});

Template.SelectLayout.helpers({
  players: ()=> {
    return Players.find({})
  }
});

Template.Players.events({
  'click .delete'() {
    Players.remove(this._id);
  }
});
