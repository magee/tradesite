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

// Router.add( '/vcf', 'GET', function () {
//   return [200,
//     {
//        'Content-type': 'text/vcard',
//        'Content-Disposition': "attachment; filename=" + this.request.query.name
//     }, fs.readFileSync( uploadPath + this.request.query.name )];
// } );

var fs = Meteor.require('fs');

Router.map(function() {
  return this.route('dataFile', {
    where: 'server',
    path: '/vcf/jgp.vcf',
    action: function() {
      var file = fs.readFileSync('jgp.vcf');
      var filename = 'jgp.vcf';

      var headers = {
        'Content-type': 'text/vcard',
        'Content-Disposition': "attachment; filename=" + filename
      };

      this.response.writeHead(200, headers);
      return this.response.end(file);
    }
  });
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
    }
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
      'contactContent':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
    }
  });

  this.route('notFound', {
    path: '*'
  });
});