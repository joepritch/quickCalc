import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalcButton from './CalcButton.js';

export default function NumberPad() {
  return (
    <View style={styles.container}>
        <CalcButton value='1'/>
        <CalcButton value='2'/>
        <CalcButton value='3'/>
        <CalcButton value='4'/>
        <CalcButton value='5'/>
        <CalcButton value='6'/>
        <CalcButton value='7'/>
        <CalcButton value='8'/>
        <CalcButton value='9'/>
        <CalcButton value='DEL'/>
        <CalcButton value='+'/>
        <CalcButton value='-'/>
        <CalcButton value='*'/>
        <CalcButton value='/'/>
        <CalcButton value='='/>
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
