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

  operators = ['+', '-', '*', '/'];

  updateExpression = (input) => {
    let currentExpression = this.state.expression;
    let lastInput = currentExpression.slice(-1);
    let newExpression = currentExpression.concat(input);
    if (this.operators.includes(lastInput) && this.operators.includes(input)) {      
      if (lastInput !== '-' && input === '-') {
        this.setState({expression: newExpression});
      } else {
        let swappedExpression = currentExpression.slice(0,-1);
        let finalExpression = swappedExpression.concat(input);
        this.setState({expression: finalExpression});
      }
    } else {
      this.setState({expression: newExpression});
    }
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
    let lastInput = currentExpression.slice(-1);
    let testResult = new Promise((resolve, reject) => {
      let chicken = eval(currentExpression)
      if (typeof chicken === "number") {
        resolve('chicken is a number')
      } else {
        reject('bad expression')
      }
    })

    testResult.then((message) => {
      console.log(message);
    }).catch((message) => {
      console.log('failed ' + message);
      
    })
    // if (!this.operators.includes(lastInput)) {
    //   let result = eval(currentExpression);
    //   let resultType = typeof result;
    //   console.log(result, ' ', resultType);
    //   if (resultType = 'number') {
    //     this.setState({expression: result.toString()})
    //   } else {
    //     this.setState({expression: 'Error'})
    //   }
    // }
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
