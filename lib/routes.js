FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/DM', {
  name: 'DMView',
  action(){
<<<<<<< HEAD
    BlazeLayout.render('MainLayout', {
      first: 'Items',
      second: 'GroupItems',
      buttons1: 'addItemBtn',
      buttons2: 'addPlayerBtn'
    });
=======
    BlazeLayout.render('MainLayout', {first: 'Items', second: 'GroupItems', buttons1: 'addItemBtn', buttons2: 'addPlayerBtn'});
>>>>>>> 1c91285ae9576a91c7850a75bed46cfea7788c4b
  }
});

FlowRouter.route('/DM/addItem', {
  name: 'addItem',
  action() {
<<<<<<< HEAD
    BlazeLayout.render('MainLayout', {
      first: 'Items',
      second: 'addItem',
      buttons1: 'DMview',
      buttons2: 'addPlayerBtn'
    });
=======
      BlazeLayout.render('MainLayout', {first: 'Items', second: 'addItem', buttons1: 'DMview'});
>>>>>>> 1c91285ae9576a91c7850a75bed46cfea7788c4b
  }
});

FlowRouter.route('/DM/addPlayer', {
  name: 'addPlayer',
  action() {
<<<<<<< HEAD
    BlazeLayout.render('MainLayout', {
      first: 'Players',
      second: 'addPlayer',
      buttons1: 'DMview',
      buttons2: 'addPlayerBtn'
    });
=======
      BlazeLayout.render('MainLayout', {first: 'Players', second: 'addPlayer', buttons1: 'DMview'});
  }
});

FlowRouter.route('/players/select', {
  name: 'selectPlayer',
  action() {
      BlazeLayout.render('SelectLayout');
  }
});

FlowRouter.route( '/players/:characterName', {
  action: function( params ) {
    console.log( params.characterName );
    BlazeLayout.render( 'PlayerLayout', {first: 'PlayerItems', second: 'GroupItems'});
>>>>>>> 1c91285ae9576a91c7850a75bed46cfea7788c4b
  }
});

FlowRouter.route( '/players/:characterName', {
  action: function( params ) {
    BlazeLayout.render( 'PlayerLayout', {
      first: 'PlayerItems',
      second: 'GroupItems'
    });
  }
});
FlowRouter.route( '/players/:characterName/index', {
  action: function( params ) {
    BlazeLayout.render( 'PlayerLayout', {
      first: 'PlayerItems',
      second: 'allItems'
    });  }
});
