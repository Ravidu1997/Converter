import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import DismissKeyboard from './Components/DismissKeyboard';

import {Unit, Input, InputContainer} from './styles/Inputs.styles';

const SpeedScreen = () => {
  const [feets, setFeets] = React.useState(null);
  const [meters, setMeters] = React.useState(null);
  const [nm, setNm] = React.useState(null);
  const [km, setKm] = React.useState(null);

  const feetEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let m, n, k;
      if (text.length === 0) {
        m = '';
        k = '';
        n = '';
      } else {
        m = Math.round(value * 0.3048 * 100) / 100;
        k = Math.round((m / 1000) * 100) / 100;
        n = Math.round((m / 1852) * 100) / 100;
      }
      setFeets(text);
      setMeters(m.toString());
      setNm(n.toString());
      setKm(k.toString());
    }
  };
  const metersEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let f, n, k;
      if (text.length === 0) {
        f = '';
        k = '';
        n = '';
      } else {
        f = Math.round(value * 3.2808399 * 100) / 100;
        k = Math.round((value / 1000) * 100) / 100;
        n = Math.round((value / 1852) * 100) / 100;
      }
      setFeets(f.toString());
      setMeters(text);
      setNm(n.toString());
      setKm(k.toString());
    }
  };
  const nauticMilesEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let f, m, k;
      if (text.length === 0) {
        f = '';
        k = '';
        m = '';
      } else {
        m = Math.round(value * 1852 * 100) / 100;
        f = Math.round(m * 3.2808399 * 100) / 100;
        k = Math.round((m / 1000) * 100) / 100;
      }
      setFeets(f.toString());
      setMeters(m.toString());
      setKm(k.toString());
      setNm(text);
    }
  };
  const kilometersEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let f, m, n;
      if (text.length === 0) {
        f = '';
        n = '';
        m = '';
      } else {
        m = Math.round(value * 1000 * 100) / 100;
        f = Math.round(m * 3.2808399 * 100) / 100;
        n = Math.round((m / 1852) * 100) / 100;
      }
      setMeters(m.toString());
      setFeets(f.toString());
      setNm(n.toString());
      setKm(text);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <View>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={feets}
              onChangeText={(text) => feetEnter(text)}
            />
            <Unit>ft</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={meters}
              onChangeText={(text) => metersEnter(text)}
            />
            <Unit>m</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={nm}
              onChangeText={(text) => nauticMilesEnter(text)}
            />
            <Unit>nm</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={km}
              onChangeText={(text) => kilometersEnter(text)}
            />
            <Unit>km</Unit>
          </InputContainer>
        </View>
      </Container>
    </DismissKeyboard>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding-top: 50px;
  justify-content: flex-start;
  align-items: center;
`;

export default SpeedScreen;
