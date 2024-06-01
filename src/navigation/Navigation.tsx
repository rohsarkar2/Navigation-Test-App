import {StyleSheet, Text, View} from 'react-native';
import React, {Fragment, useState} from 'react';
import Home from '../screens/Home';
import {
  CardStyleInterpolators,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {BottomTabParamList, RootStackParamList} from './NavigationTypes';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import BottomTab from '../components/BottomTab';
import Colors from '../configs/Colors';
import Orders from '../screens/Orders';
import Account from '../screens/Account';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeTab = () => {
  const navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList>,
    BottomTabNavigationProp<BottomTabParamList>
  > = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior="none"
      tabBar={props => <BottomTab {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.mediumGrey,
        tabBarActiveBackgroundColor: Colors.white,
        tabBarInactiveBackgroundColor: Colors.white,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  const [isLoading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] =
    useState<keyof RootStackParamList>('HomeTab');

  return isLoading ? null : (
    <Fragment>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          presentation: 'transparentModal',
          detachPreviousScreen: true,
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
          cardStyle: {backgroundColor: 'transparent'},
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
    </Fragment>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
