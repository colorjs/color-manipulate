/**
 * Basically change hue channel.
 *
 * @module color-manipulate/spin
 *
 * @param {Color} color A color instance
 * @param {number} degrees A degrees to spin, 0..1
 *
 * @return {Color} The color with increased hue
 */
module.exports = function (color, degrees) {
	var value = color.hue();
	value += degrees;
	color.hue(value);
	return color;
};