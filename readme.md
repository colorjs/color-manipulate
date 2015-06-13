# color-manipulate [![Build Status](https://travis-ci.org/dfcreative/color-manipulate.svg?branch=master)](https://travis-ci.org/dfcreative/color-manipulate) [![Code Climate](https://codeclimate.com/github/dfcreative/color-manipulate/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-manipulate)

A collection of color manipulation functions.

`$ npm install color-manipulate`

```js
var mix = require('color-manipulate/mix');
mix(colorA, colorB, .5);
```

### Supported color libs

* **[color](https://npmjs.org/package/color)**
* **[color2](https://npmjs.org/package/color2)**
* **[jquery-color](https://github.com/jquery/jquery-color)**
* **[sumi-color](https://npmjs.org/package/sumi-color)**
* **[onecolor](https://npmjs.org/package/onecolor)**


### Manipulations

* **lighten(color, ratio)** — increase color lightness by ratio.
* **draken(color, ratio)** — decrease color lightness by ratio.
* **saturate(color, ratio)** — saturate color by ratio.
* **desaturate(color, ratio)** — decrease saturation by ratio.
* **whiten(color, ratio)** (aka _tint_) — mix to white.
* **blacken(color, ratio)** (aka _shade_) — mix to black.
* **grayscale(color, ratio)** — convert color to gray.
* **fadeout(color, ratio)** (aka _clearer_, _transparentize_) — increase transparency.
* **fadein(color, ratio)** (aka _opaquer_, _opacify_) — decrease transparency.
* **spin(color, degrees)** (aka _rotate_) — rotate hue by _degrees_.
* **invert(color, ratio)** (aka _negate_) — invert color.
* **mix(color1, color2, ratio)** (aka _blend_) — mix second color to the first color.


## Related

* **[color-measure](http://npmjs.org/package/color-measure)** — a collection of color measures.
* **[color-blend](http://npmjs.org/package/color-blend)** — a collection of color blending functions.
* **[color-space](http://npmjs.org/package/color-space)** — a collection of color spaces and conversions between them.
* **[color](http://npmjs.org/package/color2)** — color class, exposing these libs as an API.


## Contribute

Suggest color library, manipulation or tell about the library using color-manipulate.


[![NPM](https://nodei.co/npm/color-manipulate.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/color-manipulate/)