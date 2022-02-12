const {fixPrecision} = require('./util')

module.exports = (proj4, projections) => {
  const definedProjections = projections
    .map(projection => {
      const proj = proj4('EPSG:4326', projection.proj4)
      return {
        ...projection,
        proj: coords => proj.forward(coords)
          .map(c => fixPrecision(c, projection.precision))
      }
    })

  function proj(coords) {
    if (!isValid(coords)) {
      throw new Error('Invalid WGS-84 coordinates')
    }

    const projection = definedProjections.find(
      ({bounds}) => isInBBox(coords, bounds)
    )
    if (!projection) {
      return null
    }

    return projection.proj(coords)
  }

  return proj
}

function isInBBox([lon, lat], [minX, minY, maxX, maxY]) {
  return lon <= maxX && lon >= minX && lat <= maxY && lat >= minY
}

function isValid(coords) {
  return isInBBox(coords, [-180, -90, 180, 90])
}
