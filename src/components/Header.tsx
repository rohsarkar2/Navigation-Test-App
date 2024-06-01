import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  title?: string;
  style?: ViewStyle;
};

const Header: React.FC<Props> = props => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
