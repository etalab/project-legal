# @etalab/project-legal

> Projection de coordonnées WGS-84 vers le système légal français en vigueur

[![npm version](https://img.shields.io/npm/v/@etalab/project-legal.svg)](https://www.npmjs.com/package/@etalab/project-legal)

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
Afin de fonctionner dans un plus grand nombre de navigateurs, elle est *transpilée* avec `babel` – avec le plugin `@babel/plugin-transform-runtime`.

Il sera donc nécessaire d’installer `@babel/runtime-corejs2` :

```bash
npm install @etalab/project-legal @babel/runtime-corejs2
```

## Projections légales supportées

| Territoire | Projection |
| ----- | ----- |
| France métropolitaine | RGF93 / Lambert-93 |
| Antilles françaises | RGAF09 / UTM zone 20N |
| Guyane | RGFG95 / UTM zone 22N |
| Réunion | RGR92 / UTM zone 40S |
| Mayotte | RGM04 / UTM zone 38S |
| Saint-Pierre-et-Miquelon | RGSPM06 / UTM zone 21N |

## Licence

MIT
