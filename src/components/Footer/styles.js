import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #F3F3F3;
  padding: 20px;
`;

export const BtnCircle = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #FFF;
  padding: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px #b9b8ba;
`;
