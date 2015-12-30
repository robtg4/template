//ios plugin to main app files 
var React = require('react-native');
var {AppRegistry } = React; 
var Main = require('./src/main');


AppRegistry.registerComponent('blackness', () => Main);