const proj4 = require('proj4')

const projections = require('./projections.json')
  .map(definition => {
    const proj = proj4('EPSG:4326', definition.proj4)
    return {
      ...definition,
      proj: coords => proj.forward(coords)
        .map(c => fixPrecision(c, definition.precision))
    }
  })

function isInBBox([lon, lat], [minX, minY, maxX, maxY]) {
  return lon <= maxX && lon >= minX && lat <= maxY && lat >= minY
}

function isValid(coords) {
  return isInBBox(coords, [-180, -90, 180, 90])
}

function fixPrecision(number, precision) {
  const powerOfTen = 10 ** precision
  return Math.round(number * powerOfTen) / powerOfTen
}

function proj(coords) {
  if (!isValid(coords)) {
    throw new Error('Invalid WGS-84 coordinates')
  }
  const projection = projections.find(({bounds}) => {
    return isInBBox(coords, bounds)
  })
  if (!projection) {
    return null
  }
  return projection.proj(coords)
}

module.exports = proj
