'use strict';

var React = require('react');
var ReactNative = require('react-native');
var FeaturedTab = require('./FeaturedTab.js');
var SearchTab = require('./SearchTab.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = ReactNative;

var Qiita_Reader = React.createClass({
  getInitialState: function(){
    return(
      {
        selectedTab: 'FeaturedTab'
      }
    );
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'FeaturedTab'}
          systemIcon='featured'
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
});

var styles = StyleSheet.create({
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
