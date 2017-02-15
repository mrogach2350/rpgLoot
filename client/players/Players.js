Meteor.subscribe('players');
Meteor.subscribe('display');

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
    Display.insert({message:' has left the party', owner: this.characterName});
    Players.remove(this._id);
  },
  'click .fa-arrow-down'(){
    Display.insert({message:' has lost a level!', owner: this.characterName});
    Players.update(this._id, {
      $set: {
        level: (this.level - 1)
      }
    });
  },
  'click .fa-arrow-up'(){
    Display.insert({message:' has gained a level!', owner: this.characterName});
    Players.update(this._id, {
      $set: {
        level: (this.level + 1)
      }
    });
  }
});
