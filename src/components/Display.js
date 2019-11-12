import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default function Display() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
