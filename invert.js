/**
 * @module color-manipulate/invert
 *
 * @param {Color} color A color instance
 *
 * @return {Color} The changed color
 */
module.exports = function (color) {
	color.red(255 - color.red());
	color.green(255 - color.green());
	color.blue(255 - color.blue());
	return color;
};