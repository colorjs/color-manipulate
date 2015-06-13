var assert = require('chai').assert;
var Color = require('color');
var m = require('./');

describe('color-manipulate', function () {
	it('alltogether', function () {
		assert.equal(m.lighten(Color({h: 100, s: 50, l: 80}), 0.5).lightness(), 100);
		assert.equal(m.blacken(Color({h: 100, w: 50, b: 80}), 0.5).blackness(), 100);
		assert.deepEqual(m.grayscale(Color({r: 67, g: 122, b: 134})).rgb(), {r: 111, g: 111, b: 111});
		assert.deepEqual(m.invert(Color({r: 67, g: 122, b: 134})).rgb(), {r: 188, g: 133, b: 121});
		assert.equal(m.lighten(Color({h: 100, s: 50, l: 60}), 0.5).lightness(), 90);
		assert.equal(m.darken(Color({h: 100, s: 50, l: 60}), 0.5).lightness(), 30);
		assert.equal(m.whiten(Color({h: 100, w: 50, b: 60}), 0.5).whiteness(), 75);
		assert.equal(m.blacken(Color({h: 100, w: 50, b: 60}), 0.5).blackness(), 90);
		assert.equal(m.saturate(Color({h: 100, s: 40, l: 50}), 0.5).saturation(), 60);
		assert.equal(m.desaturate(Color({h: 100, s: 80, l: 60}), 0.5).saturation(), 40);
		assert.equal(m.fadeout(Color({r: 10, g: 10, b: 10, a: 0.8}), 0.5).alpha(), 0.4);
		assert.equal(m.fadein(Color({r: 10, g: 10, b: 10, a: 0.5}), 0.5).alpha(), 0.75);
		assert.equal(m.spin(Color({h: 60, s: 0, l: 0}), 180).hue(), 240);
		assert.equal(m.spin(Color({h: 60, s: 0, l: 0}), -180).hue(), 240);

		assert.deepEqual(m.mix(Color("yellow"), Color("cyan")).rgbArray(), [128, 255, 128]);
		assert.deepEqual(m.mix(Color("yellow"), Color("grey")).rgbArray(), [192, 192, 64]);
		assert.deepEqual(m.mix(Color("yellow"), Color("grey"), 1).rgbArray(), [128, 128, 128]);
		assert.deepEqual(m.mix(Color("yellow"), Color("grey"), 0.8).rgbArray(), [153, 153, 102]);
		assert.deepEqual(m.mix(Color("yellow"), Color("grey").alpha(0.5)).rgbaArray(), [223, 223, 32, 0.75]);
		// assert.deepEqual(m.mix(Color('red'), Color('red').hue(360), .5, 'hsl').hslArray(), [180, 100, 50]);
	});
});