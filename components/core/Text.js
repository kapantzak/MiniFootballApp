import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
} from 'react-native';

const Text = ({style, children}) => (
  <ReactText style={[styles.font, style]}>
    {children}
  </ReactText>
);

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Roboto-Regular',
  },
});

export default Text;
