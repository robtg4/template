/**
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise App
  =============================== */
  // React
  var React = require('react-native');
  var EventEmitter = require('EventEmitter');
  var Subscribable = require('Subscribable');

  // 3rd Party Components
  var NavigationBar = require('react-native-navbar');
  var SideMenu = require('react-native-side-menu');

  // App Globals
  var AppStyles = require('../styles/styles');

  // Components
  var Icons = require('../components/icons');
  var Menu = require('../components/menu');

  // Screens / Pages
  var Index = require('./soon');

  var {
    Component,
    StyleSheet,
    Navigator,
    Text,
    View,
  } = React;

/* ==============================
  Main Navigator with Sidemenu
  =============================== */

  /**
   *  Main View w/ Sidebar
   */
  var Application = React.createClass({
    mixins: [Subscribable.Mixin],

    /**
      * Before Load
      */
    getInitialState: function() {
      return {
        touchToClose: true,
        disableGestures: false,
      };
    },

    /**
      * On Load
      */
    componentWillMount: function() {
      this.eventEmitter = new EventEmitter();
    },

    /**
      * When Back Button from NavBar is Clicked
      */
    onLeftBackButtonPress: function(navigator) {
      this.refs.rootNavigator.pop();
    },

    /**
      * When Hamburger from NavBar is Clicked
      */
    onLeftButtonPress: function() {
      this.eventEmitter.emit('toggleMenu');
    },

    /**
      * Navigates to page from menu
      */
    navigate: function(title, link) {
      this.refs.rootSidebarMenu.closeMenu();

      this.refs.rootNavigator.replace({
        title: title,
        component: link,
      });
    },

    /**
      * Generate Custom Navbar
      */
    renderScene: function(route, navigator) {
      var Component = route.component;
      var navBar = route.navigationBar;

      // Icons
      var MenuIcon = Icons.MenuIcon;
      var BackIcon = Icons.BackIcon;

      // Navbar Setup
      if (navBar) {
        navBar = React.addons.cloneWithProps(navBar, {
          navigator: navigator,
          route: route
        });
      }
      

      // Determine which Icon component - hamburger or back?
      var customPrev = <MenuIcon leftButtonPress={this.onLeftButtonPress} />;
      if (route.index > 0){
        var customPrev = <BackIcon leftButtonPress={this.onLeftBackButtonPress} />;
      }

      // Done
      return (
        <View style={AppStyles.container}>
          <NavigationBar
            style={AppStyles.navbar}
            customPrev={customPrev} />

          <Component navigator={navigator} route={route} />
        </View>
      );
    },

    /**
      * RENDER
      */
    render: function() {
      return (
        <SideMenu
          ref="rootSidebarMenu"
          menu={<Menu events={this.eventEmitter} navigate={this.navigate} />}
          touchToClose={this.state.touchToClose}
          disableGestures={this.state.disableGestures}>

          <Navigator
            ref="rootNavigator"
            style={[AppStyles.container, AppStyles.appContainer]}
            renderScene={this.renderScene}
            initialRoute={{
              component: Index,
              index: 0,
            }} />

        </SideMenu>
      );
    }
  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
  });
