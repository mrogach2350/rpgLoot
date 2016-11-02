Meteor.subscribe('players');

Template.PlayerLayout.helpers({
  currentPlayer: ()=> {
    var current = FlowRouter.current();
    return current.params.characterName;
  },
  players: ()=> {
    var current = FlowRouter.current();
    console.log(current);
    var searchName = current.params.characterName
    var currentPlayer = Players.find({characterName: searchName });
    console.log(currentPlayer);
    return(currentPlayer)
  }
});
