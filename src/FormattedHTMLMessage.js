import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { FormattedHTMLMessage as DefaultFormattedHTMLMessage } from 'react-intl';

export const FormattedHTMLMessage = props => (
  <DefaultFormattedHTMLMessage {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </DefaultFormattedHTMLMessage>
);

FormattedHTMLMessage.propTypes = {
  style: PropTypes.any,
};
