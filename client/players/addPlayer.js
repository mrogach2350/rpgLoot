Meteor.subscribe('display');
Meteor.subscribe('items');

Template.addPlayer.events({
  'submit .new-item-form'() {
    Display.insert({message:' has joined the party', owner:'An adventurer'})
  }
})
