import React from 'react';

import { View, Image } from 'react-native';

import styles from './styles';

const Cards = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image
        style={styles.imgCard}
        source={require('../../img/photo-card-1.jpg')}
      />
    </View>
  </View>
);

export default Cards;
