Meteor.subscribe('display');
Meteor.subscribe('items');

Template.playerDisplay.helpers({
  display: ()=> {
    return Display.find({},  {sort: {createdAt: -1} });
  }
});

roll = function(n){
 var num = (Math.floor(Math.random()*1000))%n;
 if(num !== 0){
   return num;
 } else {
   return n;
 }
}

Template.playerDisplay.events({
  'click #d6'(){
    Display.insert({message: ' rolled a d6 for '+ roll(6), owner:FlowRouter.current().params.characterName || 'DM'})
  },
  'click #d8'(){
    Display.insert({message: ' rolled a d8 for '+ roll(8), owner:FlowRouter.current().params.characterName || 'DM'})
  },
  'click #d10'(){
    Display.insert({message: ' rolled a d10 for '+ roll(10), owner:FlowRouter.current().params.characterName || 'DM'})
  },
  'click #d20'(){
    Display.insert({message: ' rolled a d20 for '+ roll(20), owner:FlowRouter.current().params.characterName || 'DM'})
  },
  'click #clearLog'(){
    Meteor.call('deleteAllPosts');
  }
})
