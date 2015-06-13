/**
 * Basically change blackness channel.
 *
 * @module color-manipulate/blacken
 *
 * @param {Color} color A color instance
 * @param {number} ratio A ratio to blacken, 0..1
 *
 * @return {Color} The color with increased ratio
 */
module.exports = function (color, ratio) {
	var value = color.blackness();
	value += value * ratio;
	color.blackness(value);
	return color;
};