import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import RNBootSplash from 'react-native-bootsplash';

import SpeedScreen from './Screens/SpeedScreen';
import LengthScreen from './Screens/LengthScreen';

import bg3 from './assets/bg3.jpg';

const initialLayout = {width: Dimensions.get('window').width};
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    pressColor="rgba(1, 1, 1, 0.2)"
    style={{
      backgroundColor: 'transparent',
    }}
  />
);

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'speed', title: 'Speed'},
    {key: 'length', title: 'Length'},
  ]);

  const renderScene = SceneMap({
    speed: SpeedScreen,
    length: LengthScreen,
  });
  React.useEffect(() => {
    const SplashHandler = async () => {
      await RNBootSplash.hide({fade: true});
    };
    SplashHandler();
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground source={bg3} style={styles.imagebackground}>
        <SafeAreaView style={styles.container}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
          <Text style={styles.B}>Knot = one nautical mile per hour</Text>
          <Text style={styles.B}>°B = Beaufort wind force</Text>
          <Text style={styles.B}>mps = meter per second</Text>
          <Text style={styles.B}>Kmph = Kilometer per hour</Text>

          <Text style={styles.B}>ft = feat</Text>
          <Text style={styles.B}>m = meter</Text>
          <Text style={styles.B}>nm = Nanometer</Text>
          <Text style={styles.B}>Km = Kilometer</Text>

          <Text style={styles.author}>© 2022 EaseConverter</Text>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  infobtn: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  infoimg: {
    width: 20,
    height: 20,
  },
  imagebackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    height: '100%',
    backgroundColor: 'rgba(1, 1, 1, 0.8)',
  },
  author: {
    bottom: 2,
    color: 'gray',
    fontStyle: 'italic',
    fontSize: 11,
    bottom: 5,
    textAlign: 'center',
  },
  B: {
    bottom: 200,
    left: 10,
    color: 'gray',
    fontSize: 20,
  },
});

export default App;
