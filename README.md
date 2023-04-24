# @etalab/project-legal

> Projection de coordonnées WGS-84 vers le système légal français en vigueur

[![npm version](https://img.shields.io/npm/v/@etalab/project-legal.svg)](https://www.npmjs.com/package/@etalab/project-legal) [![Coverage Status](https://coveralls.io/repos/github/etalab/project-legal/badge.svg?branch=master)](https://coveralls.io/github/etalab/project-legal?branch=master)

## Installation

```bash
npm install @etalab/project-legal
```

## Utilisation

```js
const proj = require('@etalab/project-legal')

proj([2.308310, 48.850244]) // 20 Avenue de Ségur à Paris
// => [649242.57, 6861355.85] RGF93 / Lambert-93

proj([-18.984375, 65.080666]) // Islande
// => null
```

## Navigateur

Cette bibliothèque expose un point d’entrée `browser` pour être utilisée dans une application web.

## Projections légales supportées

| Territoire | Projection |
| ----- | ----- |
| France métropolitaine | RGF93 / Lambert-93 |
| Antilles françaises | RGAF09 / UTM zone 20N |
| Guyane | RGFG95 / UTM zone 22N |
| Réunion | RGR92 / UTM zone 40S |
| Mayotte | RGM04 / UTM zone 38S |
| Saint-Pierre-et-Miquelon | RGSPM06 / UTM zone 21N |
| Nouvelle Calédonie | RGNC91-93 / Lambert New Caledonia |
| Polynésie Française | RGPF / UTM zone 5S 6S 7S 8S |
| Wallis et Futuna | MOP78 / UTM zone 1S |

## Licence

MIT
