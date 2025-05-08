import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { jogadores } from '../data/timeData';

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View>
              <Title>{item.nome}</Title>
              <Paragraph>Nº {item.numero} | {item.posicao}</Paragraph>
              <Paragraph>Idade: {item.idade}</Paragraph>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { margin: 10 },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 15 }
});