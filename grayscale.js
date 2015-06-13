/**
 * Convert color to a grayscale
 * http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
 *
 * @module color-manipulate/grayscale
 *
 * @param {Color} color A color instance
 *
 * @return {Color} The color with increased ratio
 */
module.exports = function (color) {
	var val = color.red() * 0.2126 + color.green() * 0.715 + color.blue() * 0.0722;
	color.red(val);
	color.green(val);
	color.blue(val);
	return color;
};