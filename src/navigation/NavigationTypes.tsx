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
};

export type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignIn'>;

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export type OrdersScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Orders'>,
  StackScreenProps<RootStackParamList>
>;

export type AccountScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Account'>,
  StackScreenProps<RootStackParamList>
>;
