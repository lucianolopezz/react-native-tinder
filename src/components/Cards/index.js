
import React, { Component } from 'react';

import { PanResponder, Animated } from 'react-native';
import { Container, Card, ImagePerfil, ImagePreview, Like, Nope } from './styles';

const AnimatedCard = Animated.createAnimatedComponent(Card);
const AnimatedLike = Animated.createAnimatedComponent(Like);

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      cards: [
        {id: 1, nome: 'Jessica da Silva', idade: 19, escolaridade: '', profissao: '', distancia: 136, descricao: '', url_foto: 'https://statig2.akamaized.net/bancodeimagens/5d/ce/v6/5dcev68zm7ztp5zfche19xur5.jpg',},
        {id: 2, nome: 'Fernanda', idade: 23, escolaridade: '', profissao: '', distancia: 136, descricao: '', url_foto: 'https://statig0.akamaized.net/bancodeimagens/ec/ir/fa/ecirfazw35ema32ovm9luvl8g.jpg',},
        {id: 3, nome: 'Nathene', idade: 29, escolaridade: '', profissao: '', distancia: 136, descricao: '', url_foto: 'https://statig1.akamaized.net/bancodeimagens/1d/hw/lx/1dhwlxs16n41vpqp63t7a2hwd.jpg',},
      ],
      fadeOpacityLike: new Animated.Value(0.1),
      indexCard: 0,
      indexCardPreview: 1,
    }

    this.panResponder = PanResponder.create({ //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{ //Step 3
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }], {
        listener: (event, gesture) => {
          console.log(gesture);
          Animated.timing(this.state.fadeOpacityLike, {
             toValue: 1,
             duration: 500,
          }).start();
        }
      }),
      onPanResponderRelease: (e, gesture) => { //Step 4
        let X = 0;
        let Y = 0;
        let changeCard = false;

        if(gesture.dx > 50) {
          //alert('Liked')
          X = 9999;
          changeCard = true;
        }else if(gesture.dx < -50){
          //alert('Nope')
          X = -9999;
          changeCard = true;
        }else if(gesture.dy < -100) {
          //alert('Super Liked')
          Y = 9999;
          changeCard = true;
        }else if(gesture.dy > 100) {
          // Nao faz nada
        }
        
        Animated.spring(this.state.pan, {toValue: { x:X, y:Y }}).start();
        this.changeCard(changeCard);// Essencial para funcionar transição dos cards
      },
    });
  }

  changeCard = (changeCard) => {
    const { cards, indexCard, indexCardPreview } = this.state;

    if(changeCard) {
      if(indexCard >= cards.length-1) {
        this.setState({ indexCard: 0, indexCardPreview: 1 });
      }else {
        let indexPreview;
        if(indexCardPreview === cards.length-1) {
          indexPreview = 1;
        }else {
          indexPreview = indexCardPreview + 1;
        }
        this.setState({ indexCard: indexCard + 1, indexCardPreview: indexPreview });
      } 
    }

    this.state.pan.setValue({ x:0, y:0});// Essencial para funcionar transição dos cards
  }

  render() {
    const { cards, indexCard, indexCardPreview, fadeOpacityLike } = this.state;
    return (
      <Container>
        <ImagePreview source={{ uri: cards[indexCardPreview].url_foto }} imageStyle={{ borderRadius: 10 }}>
          <AnimatedCard
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout()]}
          >
            <ImagePerfil source={{ uri: cards[indexCard].url_foto }} />
            <AnimatedLike fadeAnim={fadeOpacityLike} source={require('../../img/like.png')} />
            <Nope source={require('../../img/nope.png')} />
          </AnimatedCard>
        </ImagePreview>        
      </Container>
    );
  }
}
