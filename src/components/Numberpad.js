import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalcButton from './CalcButton.js';

export default function NumberPad() {
  return (
    <View style={styles.container}>
        <CalcButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
