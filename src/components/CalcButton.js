import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CalcButton() {
  return (
    <View style={styles.container}>
        <Text>Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '20%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
