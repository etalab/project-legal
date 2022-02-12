/* eslint unicorn/numeric-separators-style: off */
const test = require('ava')
const {roundCoords} = require('./lib/util')
const proj = require('.')

test('20 Avenue de Ségur, Paris', t => {
  const coords = proj([2.308310, 48.850244])
  t.deepEqual(coords, [649242.57, 6861355.85])
})

test('Islande', t => {
  t.is(proj([-18.984375, 65.080666]), null)
})

test('Guadeloupe', t => {
  const coords = roundCoords(proj([-61.540298, 16.248957]))
  t.deepEqual(coords, roundCoords([655995.30, 1797030.02]))
})

test('Martinique', t => {
  const coords = roundCoords(proj([-61.056312, 14.608169]))
  t.deepEqual(coords, roundCoords([709371.91, 1615884.45]))
})

test('Saint-Martin', t => {
  const coords = roundCoords(proj([-63.081436, 18.075223]))
  t.deepEqual(coords, roundCoords([491382.61, 1998509.81]))
})

test('Saint-Barthélemy', t => {
  const coords = roundCoords(proj([-62.848835, 17.895324]))
  t.deepEqual(coords, roundCoords([516012.15, 1978611.10]))
})

test('Guyane', t => {
  const coords = roundCoords(proj([-52.338867, 4.885560]))
  t.deepEqual(coords, roundCoords([351541.87, 540162.02]))
})

test('Réunion', t => {
  const coords = roundCoords(proj([55.447998, -20.893366]))
  t.deepEqual(coords, roundCoords([338573.17, 7688873.88]))
})

test('Mayotte', t => {
  const coords = roundCoords(proj([45.197995, -12.792185]))
  t.deepEqual(coords, roundCoords([521488.64, 8585837.37]))
})

test('Saint-Pierre-et-Miquelon', t => {
  const coords = roundCoords(proj([-56.315575, 46.875213]))
  t.deepEqual(coords, roundCoords([552154.77, 5191524.54]))
})
