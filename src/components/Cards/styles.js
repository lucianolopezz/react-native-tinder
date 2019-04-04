import { Dimensions } from 'react-native';
import styled from 'styled-components';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
