/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	fingerprint: {
		extensions: ['js', 'css', 'gif']
	},
	'foundation-sass': {
    'modernizr': true, //includes modernizer
    'fastclick': true, //includes fastclick
    'foundationJs': 'all' //Includes the full foundation.js with all modules
  },
  'autoprefixer': {
    browsers: ['last 2 versions'],
    cascade: false
  }
});

// progress.js

app.import('bower_components/progress.js/src/progress.js');
app.import('bower_components/progress.js/src/progressjs.css');
app.import('bower_components/progressbar.js/dist/progressbar.js');
app.import('bower_components/ember-animate/ember-animate.js');

app.import('bower_components/RRSSB/css/rrssb.css');
app.import('bower_components/RRSSB/js/rrssb.js');






// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//Emper specific libraries
app.import('bower_components/ember-easyform/index.js');
app.import('bower_components/ember-validation/index.js');

module.exports = app.toTree();
