function fixPrecision(number, precision) {
  const powerOfTen = 10 ** precision
  return Math.round(number * powerOfTen) / powerOfTen
}

function roundCoords(coords, precision = 0) {
  return coords.map(c => fixPrecision(c, precision))
}

module.exports = {fixPrecision, roundCoords}
