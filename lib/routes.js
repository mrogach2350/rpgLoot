FlowRouter.route('/DMview', {
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
