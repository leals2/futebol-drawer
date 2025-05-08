import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { titulos } from '../data/timeData';

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>Anos: {item.anos.join(', ')}</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { margin: 10 }
});