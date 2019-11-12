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
        <Text style={{color: '#ffffff', fontSize: 40}}>{props.value}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '20%',
    margin: '2.5%',
    borderRadius: 7,
  },
});
