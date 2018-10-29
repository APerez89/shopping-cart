const digitsRE = /(\d{3})(?=\d)/g;

// eslint-disable-next-line
export function currency(value, currency, decimals) {
// eslint-disable-next-line
  value = parseFloat(value);
  // eslint-disable-next-line
  if (!isFinite(value) || (!value && value !== 0)) return '';
  // eslint-disable-next-line
  currency = currency != null ? currency : '$';
  // eslint-disable-next-line
  decimals = decimals != null ? decimals : 2;
  const stringified = Math.abs(value).toFixed(decimals);
  // eslint-disable-next-line
  const _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified;
  const i = _int.length % 3;
  const head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : '';
    // eslint-disable-next-line
  const _float = decimals
    ? stringified.slice(-1 - decimals)
    : '';
  const sign = value < 0 ? '-' : '';
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float;
}
