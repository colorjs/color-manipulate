/**
 * Basically change lightness channel.
 *
 * @module color-manipulate/lighten
 *
 * @param {Color} color A color instance
 * @param {number} ratio A ratio to lighten, 0..1
 *
 * @return {Color} The color with increased ratio
 */
module.exports = function (color, ratio) {
	var l = color.lightness();
	l += l * ratio;
	color.lightness(l);
	return color;
};