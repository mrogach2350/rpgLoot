Meteor.subscribe('display');
Meteor.subscribe('items');

Template.playerDisplay.helpers({
  display: ()=> {
    return Display.find({},  {sort: {createdAt: -1} });
  }
});

Template.playerDisplay.events({
  'submit .new-item-form'(){
    console.log(diceRoller.roll('4d20'));
  }
})
