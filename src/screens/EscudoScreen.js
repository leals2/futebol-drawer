import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { time } from '../data/timeData';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  escudo: { width: 300, height: 300 }
});