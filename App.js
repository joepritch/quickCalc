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

  operators = ['+', '-', '*', '/'];

  updateExpression = (input) => {
    let currentExpression = this.state.expression;
    let newExpression = currentExpression.concat(input);
    this.setState({expression: newExpression});
  }

  backspaceExpression = () => {
    let currentExpression = this.state.expression;
    let newExpression = currentExpression.slice(0, -1);
    this.setState({expression: newExpression});
  }

  clearExpression = () => {
    this.setState({expression: ''});
  }

  evaluateExpression = () => {
    let expression = this.state.expression;
    let lastInput = expression.slice(-1);
    if (!this.operators.includes(lastInput)) {
      let result = eval(expression);
      this.setState({expression: result.toString()})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display expression={this.state.expression}/>
        <Numberpad 
          updateExpression={this.updateExpression}
          backspaceExpression={this.backspaceExpression}
          clearExpression={this.clearExpression}
          evaluateExpression={this.evaluateExpression}
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
