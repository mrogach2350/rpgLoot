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
  },
  'click .fa-arrow-down'(){
    Players.update(this._id, {
      $set: {
        level: (this.level - 1)
      }
    });
  },
  'click .fa-arrow-up'(){
    Players.update(this._id, {
      $set: {
        level: (this.level + 1)
      }
    });
  }
});
