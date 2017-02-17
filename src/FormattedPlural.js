import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { FormattedPlural as DefaultFormattedPlural } from 'react-intl';

export const FormattedPlural = props => (
  <DefaultFormattedPlural {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </DefaultFormattedPlural>
);

FormattedPlural.propTypes = {
  style: PropTypes.any,
};
