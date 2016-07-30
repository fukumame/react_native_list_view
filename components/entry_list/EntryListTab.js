'use strict';

var React = require('react');
var ReactNative = require('react-native');
var EntryListView = require('./EntryListView.js');

var {
  StyleSheet,
  NavigatorIOS
} = ReactNative;

var EntryListTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Qiita記事一覧',
          component: EntryListView
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = EntryListTab;
