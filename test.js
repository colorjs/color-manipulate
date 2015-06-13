var assert = require('chai').assert;

describe('color-manipulate', function () {
	it('alltogether', function () {
		assert.equal(Color({h: 100, s: 50, l: 80}).lighten(0.5).lightness(), 100);
		assert.equal(Color({h: 100, w: 50, b: 80}).blacken(0.5).blackness(), 100);
		assert.deepEqual(Color({r: 67, g: 122, b: 134}).greyscale().rgb(), {r: 107, g: 107, b: 107});
		assert.deepEqual(Color({r: 67, g: 122, b: 134}).negate().rgb(), {r: 188, g: 133, b: 121});
		assert.equal(Color({h: 100, s: 50, l: 60}).lighten(0.5).lightness(), 90);
		assert.equal(Color({h: 100, s: 50, l: 60}).darken(0.5).lightness(), 30);
		assert.equal(Color({h: 100, w: 50, b: 60}).whiten(0.5).whiteness(), 75);
		assert.equal(Color({h: 100, w: 50, b: 60}).blacken(0.5).blackness(), 90);
		assert.equal(Color({h: 100, s: 40, l: 50}).saturate(0.5).saturation(), 60);
		assert.equal(Color({h: 100, s: 80, l: 60}).desaturate(0.5).saturation(), 40);
		assert.equal(Color({r: 10, g: 10, b: 10, a: 0.8}).clearer(0.5).alpha(), 0.4);
		assert.equal(Color({r: 10, g: 10, b: 10, a: 0.5}).opaquer(0.5).alpha(), 0.75);
		assert.equal(Color({h: 60, s: 0, l: 0}).rotate(180).hue(), 240);
		assert.equal(Color({h: 60, s: 0, l: 0}).rotate(-180).hue(), 240);

		assert.deepEqual(Color("yellow").mix(Color("cyan")).rgbArray(), [128, 255, 128]);
		assert.deepEqual(Color("yellow").mix(Color("grey")).rgbArray(), [192, 192, 64]);
		assert.deepEqual(Color("yellow").mix(Color("grey"), 1).rgbArray(), [128, 128, 128]);
		assert.deepEqual(Color("yellow").mix(Color("grey"), 0.8).rgbArray(), [153, 153, 102]);
		assert.deepEqual(Color("yellow").mix(Color("grey").alpha(0.5)).rgbaArray(), [223, 223, 32, 0.75]);
		assert.deepEqual(Color('red').mix(Color('red').hue(360), .5, 'hsl').hslArray(), [180, 100, 50]);
	});
});