import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function CalcButton(props) {
  return (
    <TouchableHighlight
        style={styles.container}
        onPress={() => props.function(props.value)}
        onLongPress={props.longPressFunction}
        delayLongPress={100}
    >
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
