import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.areaTop}>
        <Text style={styles.titleText}>Hello</Text>
      </View>
      <View style={styles.areaBottom}>
        <Text style={styles.contentText}>THIS IS REACT NATIVE STARTER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaTop: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abc',
    flex: 1,
    paddingVertical: 5,
  },
  areaBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fee',
    flex: 8,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
  },
  contentText: {
    fontSize: 15,
  },
});

export default App;
