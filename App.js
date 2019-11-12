import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Display from './src/components/Display.js';
import Numberpad from './src/components/Numberpad.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      expression: ''
    }
  }

  updateExpression = (input) => {
    let currentExpression = this.state.expression;
    let newExpression = currentExpression.concat(input);
    this.setState({expression: newExpression});
  }

  backspaceExpression = () => {
    console.log('short press');
    
    let currentExpression = this.state.expression;
    let newExpression = currentExpression.slice(0, -1);
    this.setState({expression: newExpression});
  }

  clearExpression = () => {
    console.log('long press');
    
    this.setState({expression: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <Display expression={this.state.expression}/>
        <Numberpad 
          updateExpression={this.updateExpression}
          backspaceExpression={this.backspaceExpression}
          clearExpression={this.clearExpression}
        />
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
