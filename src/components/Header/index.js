import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
  <TouchableOpacity>
    <Icon name='user-circle' size={30} color='#000' />
  </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={styles.logo}
        source={require('../../img/tinder-logo.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name='comment-o' size={30} color='#000' />
    </TouchableOpacity>
  </View>
);

export default Header;
