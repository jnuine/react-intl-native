import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { FormattedTime as DefaultFormattedTime } from 'react-intl';

export const FormattedTime = props => (
  <DefaultFormattedTime {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </DefaultFormattedTime>
);

FormattedTime.propTypes = {
  style: PropTypes.any,
};
