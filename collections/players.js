Players = new Mongo.Collection('players');

Players.allow({
  insert: function(userId, doc) {
  return !!userId;
  },
  update: function(userId, doc) {
  return !!userId;
  },
  remove: function(userId, doc) {
  return !!userId;
  }
});

PlayerSchema = new SimpleSchema({
  playerName: {
    type: String,
    label: "Player Name"
  },
  characterName: {
    type: String,
    label: "Character Name"
  },
  class: {
    type: String,
    label: "Class"
  },
  level: {
    type: Number,
    label: "Level"
  },
  imageUrl: {
    type: String,
    label: "Image URL"
  },
  session: {
    type: String,
    label: "Session",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  }
});

Players.attachSchema(PlayerSchema);
