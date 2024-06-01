import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Config = {
  SCREEN_WIDTH: screenWidth,
  SCREEN_HEIGHT: screenHeight,
  WINDOW_WIDTH: winWidth,
  WINDOW_HEIGHT: winHeight,
};

export default Config;
