FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/DM', {
  name: 'DMView',
  action(){
    BlazeLayout.render('MainLayout', {
      first: 'Items',
      second: 'allItems',
      buttons1: 'addItemBtn',
      buttons2: 'addPlayerBtn'
    });
  }
});

FlowRouter.route('/DM/addItem', {
  name: 'addItem',
  action() {
    BlazeLayout.render('MainLayout', {
      first: 'Items',
      second: 'addItem',
      buttons1: 'DMview',
      buttons2: 'addPlayerBtn'
    });
  }
});

FlowRouter.route('/DM/addPlayer', {
  name: 'addPlayer',
  action() {
    BlazeLayout.render('MainLayout', {
      first: 'Players',
      second: 'addPlayer',
      buttons1: 'DMview',
      buttons2: 'addPlayerBtn'
    });
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
    BlazeLayout.render( 'PlayerLayout', {
      first: 'PlayerItems',
      second: 'GroupItems'
    });
  }
});
