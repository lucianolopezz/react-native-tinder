import React from 'react';

import { Container, Card, ImagePerfil } from './styles';

const Cards = () => (
  <Container>
    <Card>
      <ImagePerfil source={require('../../img/photo-card-1.jpg')} />
    </Card>
  </Container>
);

export default Cards;
