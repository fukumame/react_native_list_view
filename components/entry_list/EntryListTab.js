import React, { Component } from 'react';
import ReactNative from 'react-native';
import EntryListView from './EntryListView.js';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

class EntryListTab extends Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Qiita記事一覧',
          component: EntryListView
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default EntryListTab;
