'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SearchEntry = require('./SearchEntry.js');

var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = ReactNative;

var SearchTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search Entlies',
          component: SearchEntry
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = SearchTab;
