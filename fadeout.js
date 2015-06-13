/**
 * Basically change alpha channel.
 *
 * @module color-manipulate/fadeout
 *
 * @param {Color} color A color instance
 * @param {number} ratio A ratio to fadeout, 0..1
 *
 * @return {Color} The color with increased ratio
 */
module.exports = function (color, ratio) {
	var value = color.alpha();
	value -= value * ratio;
	color.alpha(value);
	return color;
};