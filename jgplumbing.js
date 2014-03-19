if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'footer': {to: 'footer'},
    'navbar': {to: 'navbar'}
  }

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
    path: '/about',
    template: 'pageLayout',
    pageTitle: "About Us",
    yieldTemplates: {
      'aboutContent': {to: 'pageContent'}
    }
  });

  this.route('services', {
    path: '/services',
    template: 'pageLayout',
    pageTitle: "Our Services",
    yieldTemplates: {
      'servicesContent': {to: 'pageContent'}
    }
  });

  this.route('contact', {
    path: '/contact',
    template: 'pageLayout',
    pageTitle: "Contact Us",
    yieldTemplates: {
      'contactContent': {to: 'pageContent'}
    }
  });

  this.route('notFound', {
    path: '*'
  });
});