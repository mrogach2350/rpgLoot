Meteor.subscribe('players');

Template.PlayerLayout.helpers({
  currentPlayer: ()=> {
    var current = FlowRouter.current();
    return current.params.characterName;
  },
  players: ()=> {
    var current = FlowRouter.current();
    var searchName = current.params.characterName
    var currentPlayer = Players.find({characterName: searchName });
    return(currentPlayer)
  }
});
