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

FlowRouter.route('/DM/add', {
  name: 'addItem',
  action() {
      BlazeLayout.render('MainLayout', {first: 'Items', second: 'addItem', buttons: 'DMview'});
  }
});
