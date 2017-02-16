Meteor.publish('items', function(){
  return Items.find({session: this.userId});
});
Meteor.publish('players', function(){
  return Players.find({session: this.userId});
});
Meteor.publish('display', function(){
  return Display.find({session: this.userId});
});
