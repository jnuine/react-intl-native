import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { FormattedNumber as DefaultFormattedNumber } from 'react-intl';

export const FormattedNumber = props => {
  const style = props.style;

  const formatOptions = {
    localeMatcher: props.localeMatcher,
    style: props.formatStyle,
    currency: props.currency,
    currencyDisplay: props.currencyDisplay,
    useGrouping: props.useGrouping,
    minimumIntegerDigits: props.minimumIntegerDigits,
    minimumFractionDigits: props.minimumFractionDigits,
    maximumFractionDigits: props.maximumFractionDigits,
    minimumSignificantDigits: props.minimumSignificantDigits,
    maximumSignificantDigits: props.maximumSignificantDigits,
    value: props.value,
  };

  return (
    <DefaultFormattedNumber {...formatOptions}>
      {localized => <Text style={style}>{localized}</Text>}
    </DefaultFormattedNumber>
  );
};

FormattedNumber.propTypes = {
  style: PropTypes.any,
  localeMatcher: PropTypes.any,
  formatStyle: PropTypes.any,
  currency: PropTypes.any,
  currencyDisplay: PropTypes.any,
  useGrouping: PropTypes.any,
  minimumIntegerDigits: PropTypes.any,
  minimumFractionDigits: PropTypes.any,
  maximumFractionDigits: PropTypes.any,
  minimumSignificantDigits: PropTypes.any,
  maximumSignificantDigits: PropTypes.any,
  value: PropTypes.any,
};
