'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} = ReactNative;

var TEST_ENTRY_DATA = [
  {
    user: {
      profile_image_url: 'https://facebook.github.io/react/img/logo_og.png',
      id: 'fukuda1'
    },
    title: 'React Native Test1!!'
  },
  {
    user: {
      profile_image_url: 'https://facebook.github.io/react/img/logo_og.png',
      id: 'fukuda2'
    },
    title: 'React Native Test2!!'
  }
];
var entries = TEST_ENTRY_DATA;

var EntryList = React.createClass({
  getInitialState: function() {
    return(
      {
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      }
    );
  },
  componentDidMount: function(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(entries)
    });
  },
  renderEntry: function(entry){
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <Image source={{uri: entry.user.profile_image_url}} style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{entry.title}</Text>
              <Text style={styles.name}>{entry.user.id}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  },
  render: function() {
    return(
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderEntry}
      />
    );
  }
});

var styles = StyleSheet.create({
    separator: {
           height: 1,
           backgroundColor: '#DDDDDD'
    },
    listView: {
           backgroundColor: '#F5FCFF'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    name: {
        color: '#656565'
    }
});

module.exports = EntryList;
