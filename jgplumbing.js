if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var fs = Npm.require('fs');

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


Router.map(function () {
    this.route('dataFile', {
      where: 'server',
      path: '/vcf/jgp.vcf',
      method: 'GET',
      action: function() {
        //TODO:  change this to async.  Reference this:  http://stackoverflow.com/questions/20184710/iron-router-server-side-routing-callback-doesnt-work
        var file = fs.readFileSync('/vcf/jgp.vcf');
        var filename = 'jgp.vcf';

        var headers = {
          'Content-type': 'text/vcard',
          'Content-Disposition': "attachment; filename=" + filename
        };

        this.response.writeHead(200, headers);
        return this.response.end(file);
      }
    });

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
    yieldTemplates: {
      'aboutContent':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
    }
  });

  this.route('services', {
    path: '/services',
    yieldTemplates: {
      'servicesContent':   {to: 'content'},
      'footer': {to: 'footer'},
      'navbar': {to: 'navbar'}
    }
  });

  this.route('contact', {
    path: '/contact',
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