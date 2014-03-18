if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.configure({
  layoutTemplate: 'layout'
  // layoutTemplate: 'layout',
  // notFoundTemplate: 'notFound',
  // loadingTemplate: 'loading'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('about', {
    path: '/about'
  });

  this.route('services', {
    path: '/services'
  });

  this.route('contact', {
    path: '/contact'
  });

  this.route('notFound', {
    path: '*'
  });
});