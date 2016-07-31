import React, { Component } from 'react';
import ReactNative from 'react-native';
import EntryListTab from './components/entry_list/EntryListTab.js';
import SearchTab from './SearchTab.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

class Qiita_Reader extends Component {
  constructor(props){
    super();
    this.state = {selectedTab: 'EntryListTab'};
  }
  render(){
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'EntryListTab'}
          systemIcon='featured'
          onPress={() => {
            this.setState(
              {selectedTab: 'EntryListTab'}
            );
          }}
        >
          <EntryListTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'SearchTab'}
          systemIcon='search'
          onPress={() => {
            this.setState(
              {selectedTab: 'SearchTab'}
            );
          }}
        >
          <SearchTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Qiita_Reader', () => Qiita_Reader);
