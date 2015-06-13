/**
 * Change whiteness channel.
 *
 * @module color-manipulate/whiten
 *
 * @param {Color} color A color instance
 * @param {number} ratio A ratio to whiten, 0..1
 *
 * @return {Color} The color with increased ratio
 */

module.exports = function (color, ratio) {
	var value = color.whiteness();
	value += value * ratio;
	color.whiteness(value);
	return color;
};