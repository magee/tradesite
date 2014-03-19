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
    template: 'homeLayout',
    yieldTemplates: {
      'home':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
    }
  });

  this.route('about', {
    path: '/about',
    pageTitle: "About Us",
    yieldTemplates: {
      'aboutContent':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
  });

  this.route('services', {
    path: '/services',
    pageTitle: "Our Services",
    yieldTemplates: {
      'servicesContent':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
    }
  });

  this.route('contact', {
    path: '/contact',
    pageTitle: "Contact Us",
    yieldTemplates: {
      'contentContent':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
    }
  });

  this.route('notFound', {
    path: '*'
  });
});