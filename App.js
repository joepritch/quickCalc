import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Display from './src/components/Display.js';
import Numberpad from './src/components/Numberpad.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      expression: '',
    }
  }

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
    let currentExpression = this.state.expression;
    let evalPromise = new Promise((resolve, reject) => {
      let result = eval(currentExpression)
      if (typeof result === "number") {
        resolve(result)
      } else {
        reject('bad expression')
      }
    })

    evalPromise.then((message) => {
      let result = message.toString()
      this.setState({expression: result})
    }).catch((message) => {
      let errorMessage = 'Error ' + message;
      this.setState({expression: errorMessage});
    })
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
