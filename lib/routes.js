FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/DM', {
  name: 'DMView',
  action() {
    BlazeLayout.render('MainLayout', {first: 'Items', second: 'GroupItems', buttons: 'addItemBtn'});
  }
});

FlowRouter.route('/DM/addItem', {
  name: 'addItem',
  action() {
      BlazeLayout.render('MainLayout', {first: 'Items', second: 'addItem', buttons: 'DMview'});
  }
});

FlowRouter.route('/DM/addPlayer', {
  name: 'addPlayer',
  action() {
      BlazeLayout.render('MainLayout', {first: 'Players', second: 'addPlayer', buttons: 'DMview'});
  }
});
