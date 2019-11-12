import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function CalcButton(props) {
  return (
    <TouchableHighlight style={styles.container}>
        <Text>{props.value}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '20%',
    margin: '5%',
  },
});
