import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { FormattedRelative as DefaultFormattedRelative } from 'react-intl';

export const FormattedRelative = props => (
  <DefaultFormattedRelative {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </DefaultFormattedRelative>
);

FormattedRelative.propTypes = {
  style: PropTypes.any,
};
