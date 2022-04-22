import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import {Unit, Input, InputContainer} from './styles/Inputs.styles';
import DismissKeyboard from './Components/DismissKeyboard';
import BeaufortData from '../constants/Beaufort.json';

const SpeedScreen = () => {
  const [knots, setKnots] = React.useState(null);
  const [boufort, setBoufort] = React.useState(null);
  const [mps, setMps] = React.useState(null);
  const [kph, setKph] = React.useState(null);

  const knotsEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let ms, km, b;
      if (text.length === 0) {
        ms = '';
        km = '';
        b = '';
      } else {
        ms = Math.round(value * 0.514444 * 10) / 10;
        km = Math.round(ms * 3.6 * 10) / 10;
        b = Math.round(0.723 * Math.pow(value, 2 / 3));
        if (b > 12) {
          b = 12;
        }
      }
      setMps(ms.toString());
      setKph(km.toString());
      setBoufort(b.toString());
      setKnots(text);
    }
  };

  const mpsEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let km, b, knt;
      if (text.length === 0) {
        knt = '';
        km = '';
        b = '';
      } else {
        knt = Math.round((value / 0.514444) * 10) / 10;
        km = Math.round(value * 3.6 * 10) / 10;
        b = Math.round(1.127 * Math.pow(value, 2 / 3));
        if (b > 12) {
          b = 12;
        }
      }
      setMps(text);
      setKph(km.toString());
      setBoufort(b.toString());
      setKnots(knt.toString());
    }
  };

  const KphEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let ms, b, knt;
      if (text.length === 0) {
        knt = '';
        ms = '';
        b = '';
      } else {
        ms = Math.round((value / 3.6) * 10) / 10;
        knt = Math.round((ms / 0.514444) * 10) / 10;
        b = Math.round(1.127 * Math.pow(ms, 2 / 3));
        if (b > 12) {
          b = 12;
        }
      }
      setMps(ms.toString());
      setKph(text);
      setBoufort(b.toString());
      setKnots(knt.toString());
    }
  };

  const BeaufortEnter = (text) => {
    let value = parseFloat(text.replace(',', '.'));
    for (let i = 0; i < text.length; i++) {
      const code = text.charAt(i).charCodeAt(0);
      if ((code < 48 && code !== 46 && code !== 44) || code > 57) {
        value = NaN;
      }
    }
    if (!isNaN(value) || text.length === 0) {
      let ms, knt, km;
      if (value > 12) {
        return;
      }
      if (text.length === 0) {
        ms = '';
        km = '';
        knt = '';
      } else {
        BeaufortData.data.forEach((element) => {
          if (element.b.toString() === text) {
            ms = element.ms;
            km = element.kph;
            knt = element.knt;
          }
        });
      }
      setMps(ms);
      setKph(km);
      setBoufort(text);
      setKnots(knt);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <View>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={knots}
              onChangeText={(text) => knotsEnter(text)}
            />
            <Unit>knt</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={boufort}
              onChangeText={(text) => BeaufortEnter(text)}
            />
            <Unit>°B</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={mps}
              onChangeText={(text) => mpsEnter(text)}
            />
            <Unit>mps</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={kph}
              onChangeText={(text) => KphEnter(text)}
            />
            <Unit>kmph</Unit>
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
