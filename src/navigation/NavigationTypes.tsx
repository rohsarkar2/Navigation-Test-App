import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type BottomTabParamList = {
  Home: undefined;
  Orders: undefined;
  Account: undefined;
};

export type RootStackParamList = {
  HomeTab: NavigatorScreenParams<BottomTabParamList>;
  SignIn: undefined;
  SignUp: undefined;
  Orders: undefined;
  Account: undefined;
};
