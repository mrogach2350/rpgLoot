FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/DM', {
  name: 'DMView',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Items', addItem: 'addItem'});
  }
});

FlowRouter.route('/DM/addItem', {
  name: 'addItem',
  action() {
      BlazeLayout.render('MainLayout', {main: 'addItem'});
  }
});
