/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import StyleSheet from '../StyleSheet';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';
import React from 'react';
export default function Button(props) {
  var accessibilityLabel = props.accessibilityLabel,
      color = props.color,
      disabled = props.disabled,
      onPress = props.onPress,
      testID = props.testID,
      title = props.title;
  return React.createElement(TouchableOpacity, {
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    disabled: disabled,
    onPress: onPress,
    style: [styles.button, color && {
      backgroundColor: color
    }, disabled && styles.buttonDisabled],
    testID: testID
  }, React.createElement(Text, {
    style: [styles.text, disabled && styles.textDisabled]
  }, title));
}
var styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
});