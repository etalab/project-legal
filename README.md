# @etalab/project-legal

> Projection de coordonnées WGS-84 vers le système légal français en vigueur

[![npm version](https://img.shields.io/npm/v/@etalab/project-legal.svg)](https://www.npmjs.com/package/@etalab/project-legal)

## Installation

```bash
npm install @etalab/project-legal
```

## Utilisation

```
const proj = require('@etalab/project-legal')

proj([2.308310, 48.850244]) // 20 Avenue de Ségur à Paris
// => [649242.57, 6861355.85] RGF93 / Lambert-93

proj([-18.984375, 65.080666]) // Islande
// => null
```

## Projections légales supportées

_En construction_

| Territoire | Projection |
| ----- | ----- |
| France métropolitaine | RGF93 / Lambert-93 |

## Licence

MIT
