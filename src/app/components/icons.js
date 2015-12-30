/**
 * Icons
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/**
  * =============================
  Initialise Component
  =============================== */
  // Ract
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles/styles');
  var AppConfig = require('../styles/config');

  var {
    View,
    Image,
    Component,
    TouchableOpacity,
  } = React;

  /**
    * Custom 'Menu' button component
    */
  class MenuIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
            source={require('../imgs/hamburger.png')}
            style={AppStyles.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.MenuIcon = MenuIcon;

  /**
    * Custom 'Back' button component
    */
  class BackIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
            source={require('../imgs/back_button.png')}
            style={AppStyles.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.BackIcon = BackIcon;