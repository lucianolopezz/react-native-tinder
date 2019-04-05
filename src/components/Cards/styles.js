import { Dimensions } from 'react-native';
import styled from 'styled-components';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  z-index: 9999;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #F3F3F3;
`;

export const Card = styled.View`
  box-shadow: 2px 2px 5px black;
`;

export const ImagePerfil = styled.Image`
  width: ${width - 20};
  height: 100%;
  border-radius: 10px;
`;

export const ImagePreview = styled.ImageBackground`
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
  opacity: ${props => props.fadeAnim}px;
`;

export const Nope = styled.Image`
  position: absolute;  
  right: 50px;
  top: 10px;
  width: 120px;
  height: 120px;
  z-index: 999999;
  opacity: 1px;
`;