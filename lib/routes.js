FlowRouter.route('/DM', {
  name: 'DMView',
  action() {
      BlazeLayout.render('MainLayout');
  }
});

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/test', {
  name: "test",
  action() {
    BlazeLayout.render('MainLayout', {main: 'Items'})
  }
});

FlowRouter.route('/DM/addItem', {
  name: 'addItem',
  action() {
      BlazeLayout.render('MainLayout', {main: 'addItem'});
  }
});
