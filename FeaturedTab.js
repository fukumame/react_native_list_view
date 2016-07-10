'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

var FeaturedTab = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is Featured Tab !!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});

module.exports = FeaturedTab;
