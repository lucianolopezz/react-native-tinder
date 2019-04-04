import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, BtnCircle } from './styles';

const Footer = () => (
  <Container>
    <BtnCircle>
      <Icon name='rotate-left' size={20} color='#e8d76a' />
    </BtnCircle>
    <BtnCircle style={{ width: 50, height: 50 }}>
      <Icon name='close' size={24} color='#FF5864' />
    </BtnCircle>
    <BtnCircle>
      <Icon name='star' size={20} color='#327bef' />
    </BtnCircle>
    <BtnCircle style={{ width: 50, height: 50 }}>
      <Icon name='heart' size={24} color='#3aaf84' />
    </BtnCircle>
    <BtnCircle>
      <Icon name='flash' size={20} color='#7928af' />
    </BtnCircle>
  </Container>
);

export default Footer;
