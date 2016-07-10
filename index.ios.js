/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { React,  Component } from 'react';
import { FeaturedTab } from './FeaturedTab.js'
import { SearchTab } from './SearchTab.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

class Qiita_Reader extends Component {

  constructor(props){
    super(props);
    this.state = {selectedTab: 'FeaturedTab'};
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'FeaturedTab'}
          icon={{uri: 'featured'}}
          onPress={() => {
            this.setState(
              {selectedTab: 'FeaturedTab'}
            );
          }}
        >
          <FeaturedTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'SearchTab'}
          icon={{uri: 'search'}}
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
