const test = require('ava')
const proj = require('.')

test('20 Avenue de Ségur, Paris', t => {
  const coords = proj([2.308310, 48.850244])
  t.deepEqual(coords, [649242.57, 6861355.85])
})

test('Islande', t => {
  t.is(proj([-18.984375, 65.080666]), null)
})

