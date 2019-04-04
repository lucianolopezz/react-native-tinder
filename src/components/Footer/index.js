import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <TouchableOpacity>
      <Icon name='user-circle' size={30} color='#CCC' />
    </TouchableOpacity>
    <TouchableOpacity>
      
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name='comment-o' size={30} color='#CCC' />
    </TouchableOpacity>
  </Container>
);

export default Footer;
