import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CalcButton(props) {
  return (
    <View style={styles.container}>
        <Text>{props.value}</Text>
    </View>
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
