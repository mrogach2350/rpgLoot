FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout', {
      footer: 'footer'
    });
  }
});

FlowRouter.route('/DM', {
  name: 'DMView',
  action(){
    BlazeLayout.render('MainLayout', {
      display: 'playerDisplay',
      first: 'Items',
      second: 'allItems',
      buttons1: 'addItemBtn',
      buttons2: 'addPlayerBtn',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/DM/addItem', {
  name: 'addItem',
  action() {
    BlazeLayout.render('MainLayout', {
      display: 'playerDisplay',
      first: 'Items',
      second: 'addItem',
      buttons1: 'DMview',
      buttons2: 'addPlayerBtn',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/DM/addPlayer', {
  name: 'addPlayer',
  action() {
    BlazeLayout.render('MainLayout', {
      display: 'playerDisplay',
      first: 'Players',
      second: 'addPlayer',
      buttons1: 'addItemBtn',
      buttons2: 'DMview',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/players/select', {
  name: 'selectPlayer',
  action() {
      BlazeLayout.render('SelectLayout', {
        footer: 'footer'
      });
  }
});


FlowRouter.route( '/players/:characterName', {
  action: function( params ) {
    BlazeLayout.render( 'PlayerLayout', {
      display: 'playerDisplay',
      first: 'PlayerItems',
      second: 'GroupItems',
      footer: 'footer'
    });
  }
});
