function fixPrecision(number, precision) {
  const powerOfTen = 10 ** precision
  return Math.round(number * powerOfTen) / powerOfTen
}

module.exports = {fixPrecision}
