//connects ios and android to same files 
//opens up app to navigator map of screens 
//register on both android and ios index.js files
var React = require('react-native');
var {
  View, 
  StyleSheet, 
  Text, 
  Navigator,
} = React;

//screens
var Login = require('./app/screens/login');
var Home = require('./app/screens/home');

//we have router flux enabled and react-native-navbar but we
//need time to change a few things around to enable more customized 
//component transitions 
var ROUTES ={
  //relates to imported component to display
  //initial route is am object with the name of the route within this variable
  login: Login, 
  home: Home, 
}

module.exports = React.createClass({
  componentWillMount: function() {
    //executed when component shows on screen

  }, 
  renderScene: function(route, navigator) {
    //when navigator is initially shown it has to render initial route 
    //render a component and return it, whatever we return is placed on stack
    //add navigator property into this component for all app access
    var Component = ROUTES[route.name]; //ROUTE['signin'] => Signin
    return <Component route={route} navigator={navigator} />;
  }, 
  transition: function(route) {
      return ROUTES[route.name].transition;
    },
  render: function() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});