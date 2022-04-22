import styled from 'styled-components';
import {View, Text, TextInput} from 'react-native';

export const InputContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid white;
  border-width: 0;
  border-bottom-width: 2px;
  margin-bottom: 20px;
`;
export const Unit = styled(Text)`
  color: white;
  font-size: 18px;
`;
export const Input = styled(TextInput)`
  color: white;
  flex-grow: 1;
  padding: 5px 10px;
  font-size: 18px;
`;
