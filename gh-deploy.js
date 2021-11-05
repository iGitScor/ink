var ghpages = require('gh-pages');
var path = require('path');

// Documentation deployment
ghpages.publish(
  path.join(__dirname),
  {
    src: [
      'CNAME',
      'index.html',
      'styles/**.*',
      'where-is-the-pause-button/**.*',
      '*.png',
      'browserconfig.xml',
      'favicon.ico',
      'manifest.json'
    ],
    message: 'Automatic deployment update',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('No error in the project deployment');
    }
  }
);
