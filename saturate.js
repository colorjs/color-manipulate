/**
 * Basically change saturation channel.
 *
 * @module color-manipulate/saturate
 *
 * @param {Color} color A color instance
 * @param {number} ratio A ratio to saturate, 0..1
 *
 * @return {Color} The color with increased ratio
 */
module.exports = function (color, ratio) {
	var value = color.saturation();
	value += value * ratio;
	color.saturation(value);
	return color;
};