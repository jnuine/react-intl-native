import React, { PropTypes, isValidElement, createElement } from 'react';
import { Text } from 'react-native';
import { FormattedMessage as DefaultFormattedMessage } from 'react-intl';

export const FormattedMessage = props => (
  <DefaultFormattedMessage {...props}>
    {(...nodes) => {
      const newNodes = nodes.map((node) => {
        if (!isValidElement(node)) {
          return (<Text style={props.style}>{node}</Text>);
        }
        return node;
      });
      return createElement(Text, { style: props.style }, ...newNodes);
    }}
  </DefaultFormattedMessage>
);

FormattedMessage.propTypes = {
  style: PropTypes.any,
};
