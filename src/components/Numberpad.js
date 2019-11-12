import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalcButton from './CalcButton.js';

export default function NumberPad(props) {
  return (
    <View style={styles.container}>
        <CalcButton 
            value='0'
            function={props.updateExpression}
        />
        <CalcButton 
            value='1'
            function={props.updateExpression}
        />
        <CalcButton 
            value='2'
            function={props.updateExpression}
        />
        <CalcButton 
            value='3'
            function={props.updateExpression}
        />
        <CalcButton 
            value='4'
            function={props.updateExpression}
        />
        <CalcButton 
            value='5'
            function={props.updateExpression}
        />
        <CalcButton 
            value='6'
            function={props.updateExpression}
        />
        <CalcButton 
            value='7'
            function={props.updateExpression}
        />
        <CalcButton 
            value='8'
            function={props.updateExpression}
        />
        <CalcButton 
            value='9'
            function={props.updateExpression}
        />
        <CalcButton 
            value='DEL'
            function={props.backspaceExpression}
            longPressFunction={props.clearExpression}
        />
        <CalcButton 
            value='+'
            function={props.updateExpression}
        />
        <CalcButton 
            value='-'
            function={props.updateExpression}
        />
        <CalcButton 
            value='*'
            function={props.updateExpression}
        />
        <CalcButton 
            value='/'
            function={props.updateExpression}
        />
        <CalcButton 
            value='='
            function={props.evaluateExpression}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '100%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
  },
});
