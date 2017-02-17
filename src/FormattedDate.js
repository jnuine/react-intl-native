import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { FormattedDate as DefaultFormattedDate } from 'react-intl';

export const FormattedDate = props => (
  <DefaultFormattedDate {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </DefaultFormattedDate>
);

FormattedDate.propTypes = {
  style: PropTypes.any,
};
