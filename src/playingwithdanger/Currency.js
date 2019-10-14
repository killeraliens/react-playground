import React from 'react'
import PropTypes from 'prop-types';
import CurrencyError from './CurrencyError'

export default function Currency(props) {
  const { locale, currency, value} = props;
  const money = locale
    ? new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(value)
    : new Intl.NumberFormat({style: 'currency', currency: currency}).format(value)
  return(
    <div>
      {money}
    </div>
  )
}

Currency.defaultProps = {
  locale: 'en-US'
}

Currency.propTypes = {
  locale: PropTypes.string,
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
