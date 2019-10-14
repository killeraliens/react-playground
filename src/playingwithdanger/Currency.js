import React from 'react'
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
