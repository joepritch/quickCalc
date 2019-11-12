import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Display from './src/components/Display.js';
import Numberpad from './src/components/Numberpad.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display/>
        <Numberpad/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
