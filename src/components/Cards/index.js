import React, { Component } from 'react';

import { PanResponder, Animated, Dimensions, LayoutAnimation, UIManager } from 'react-native';
import { Container, Card, ContainerNoMoreCards, TextInfo, ImagePerfil, PhotoUser, Like, Nope, BoxFooter, Name, Description } from './styles';

const AnimatedCard = Animated.createAnimatedComponent(Card);
const AnimatedLike = Animated.createAnimatedComponent(Like);

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.20;
const SWIPE_OUT_DURATION = 250;

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      fadeOpacity: new Animated.Value(0),
      indexCard: 0,
      cards: [
        {id: 1, nome: 'Jessica da Silva', idade: 19, escolaridade: 'Uniderp', profissao: 'Modelo em Agency', distancia: 136, descricao: '', url_foto: 'https://statig2.akamaized.net/bancodeimagens/5d/ce/v6/5dcev68zm7ztp5zfche19xur5.jpg',},
        {id: 2, nome: 'Fernanda', idade: 23, escolaridade: '', profissao: '', distancia: 136, descricao: '', url_foto: 'https://statig0.akamaized.net/bancodeimagens/ec/ir/fa/ecirfazw35ema32ovm9luvl8g.jpg',},
        {id: 3, nome: 'Nathene', idade: 29, escolaridade: '', profissao: '', distancia: 136, descricao: '', url_foto: 'https://statig1.akamaized.net/bancodeimagens/1d/hw/lx/1dhwlxs16n41vpqp63t7a2hwd.jpg',},
      ],
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }], {
        listener: (event, gesture) => {
          
        }
      }),
      onPanResponderRelease: (e, gesture) => {

        if(gesture.dx > SWIPE_THRESHOLD) {
          this.completeSwipe('right');
        }else if(gesture.dx < -SWIPE_THRESHOLD){
          this.completeSwipe('left');
        }else if(gesture.dy < -SWIPE_THRESHOLD) {
          this.completeSwipe('top');
        }else if(gesture.dy > SWIPE_THRESHOLD){
          this.resetPosition();
        }
        
        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
      },
    });
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  completeSwipe(direction) {
    let x = 0;
    let y = 0;

    if(direction === 'right')
      x = SCREEN_WIDTH + 50;
    else if(direction === 'left')
      x = -SCREEN_WIDTH - 50;
    else if(direction === 'top')
      y = SCREEN_HEIGHT + 50;
    
    Animated.timing(this.state.pan, {
      toValue: { x, y },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onCompleteSwipe(direction));
  }

  onCompleteSwipe() {
    this.setState({ indexCard: this.state.indexCard + 1 });
  }

  resetPosition() {
    Animated.spring(this.state.pan, {
        toValue: { x: 0, y: 0 }
    }).start();
  }

  renderNoMoreCards = () => {
    return (
      <Container>
        <ContainerNoMoreCards>
          <PhotoUser source={{ uri: 'https://storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png' }} />
          <TextInfo>Não há ninguém perto de você.</TextInfo>
        </ContainerNoMoreCards>
      </Container>
    );
  }

  getCardStyle() {
    const { pan } = this.state;
    const rotationX = SCREEN_WIDTH * 2;

    const rotate = pan.x.interpolate({
        inputRange: [-rotationX, 0, rotationX],
        outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
        ...pan.getLayout(),
        transform: [{ rotate }]
    }
}

  renderCards = () => {
    const { cards, indexCard, fadeOpacity } = this.state;

    if(indexCard >= cards.length) {
      return this.renderNoMoreCards();
    }

    return cards.map((card, index) => {
      if(index < indexCard) return null;

      if(index === indexCard) {
        return (
          <Container key={index}>
            <AnimatedCard
                {...this.panResponder.panHandlers}
                style={this.getCardStyle()}
              >
                <AnimatedLike source={require('../../img/like.png')} fadeOpacity={fadeOpacity} />
                <ImagePerfil source={{ uri: card.url_foto }} />
                <BoxFooter>
                  <Name>{card.nome}, {card.idade}</Name>
                  {card.profissao ? <Description>{card.profissao}</Description> : null}
                  {card.escolaridade ? <Description>{card.escolaridade}</Description> : null}
                </BoxFooter>
            </AnimatedCard>
          </Container>
        );
      }

    });
  }

  render() {
    return this.renderCards();
  }
}
