import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Logo } from './styles';

const Header = () => (
  <Container>
    <TouchableOpacity>
      <Icon name='user-circle' size={30} color='#CCC' />
    </TouchableOpacity>
    <TouchableOpacity>
      <Logo source={require('../../img/tinder-logo.png')} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name='comment-o' size={30} color='#CCC' />
    </TouchableOpacity>
  </Container>
);

export default Header;
