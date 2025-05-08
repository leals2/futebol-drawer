import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { time } from '../data/timeData';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{time.nome}</Title>
          <Image source={{ uri: time.escudo }} style={styles.escudo} />
          <Paragraph>Fundado em: {time.fundacao}</Paragraph>
          <Paragraph>Estádio: {time.estadio}</Paragraph>
          <Paragraph>Mascote: {time.mascote}</Paragraph>
          <Paragraph>Cores: {time.cores.join(', ')}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { margin: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  escudo: { width: 100, height: 100, alignSelf: 'center', marginVertical: 10 }
});