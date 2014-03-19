ContactController = RouteController.extend({
  /* most of the options we've been using in our routes can be used here */
  path: '/contact',
  pageTitle: "Contact Us",
  yieldTemplates: {
    'contactContent':   {to: 'content'},
    'footer': {to: 'footer'},
    'navbar': {to: 'navbar'}
  },
  data: {
    pageTitle: "Contact Us"
  }

});