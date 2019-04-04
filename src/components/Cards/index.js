
import React, { Component } from 'react';

import { PanResponder, Animated } from 'react-native';
import { Container, Card, ImagePerfil } from './styles';

const AnimatedCard = Animated.createAnimatedComponent(Card);

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    }

    this.panResponder = PanResponder.create({ //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{ //Step 3
          dx : this.state.pan.x,
          dy : this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => { //Step 4
        //console.log('dx', gesture.dx);
        console.log('dy', gesture.dy);
        if(gesture.dx > 50) {
          alert('Liked')
        }else if(gesture.dx < -50){
          alert('Nope')
        }else if(gesture.dy < -100) {
          alert('Super Liked')
        }else if(gesture.dy > 100) {
          //alert('Nao faz nada')
        }
        
        Animated.spring(this.state.pan, {toValue: {x:0, y:0}}).start();
      } 
    });
  }

  render() {
    return (
      <Container>
        <AnimatedCard
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout()]}
        >
          <ImagePerfil source={require('../../img/photo-card-1.jpg')} />
        </AnimatedCard>
      </Container>
    );
  }
}
