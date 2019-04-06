import { Dimensions } from 'react-native';
import styled from 'styled-components';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  z-index: 9999;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #F3F3F3;
`;

export const Card = styled.View`
  box-shadow: 2px 2px 5px black;
`;

export const ContainerNoMoreCards = styled.View`
  align-items: center;
  padding: 10px;
`;
export const TextInfo = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  color: #CCC;
`;

export const PhotoUser = styled.Image`
  border-radius: 50;
  width: 100px;
  height: 100px;
`;

export const ImagePerfil = styled.Image`
  width: ${width - 20};
  height: 100%;
  border-radius: 10px;
`;

export const Like = styled.Image`
  position: absolute;
  left: 50px;
  top: 20px;
  width: 95px;
  height: 95px;
  z-index: 999999;
  opacity: 0px;
`;

export const Nope = styled.Image`
  position: absolute;  
  right: 50px;
  top: 10px;
  width: 120px;
  height: 120px;
  z-index: 999999;
  opacity: 0px;
`;

export const BoxFooter = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Name = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #FFF;
`;