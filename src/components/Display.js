import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Display(props) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.view}>
            <Text style={{fontSize: 100}}>{props.expression}</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '100%',
    backgroundColor: '#9aa392',
},
view: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '5%',
  },
});
