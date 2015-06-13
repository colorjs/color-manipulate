/**
 * Mix second color into a current one
 *
 * @module  color-manipulate/mix
 */

module.exports = function (color1, color2, weight, space) {
	space = space || 'rgb';

	weight = 1 - (weight === undefined ? 0.5 : weight);

	var t1 = weight * 2 - 1,
		d = color1.alpha() - color2.alpha();

	var weight1 = (((t1 * d == -1) ? t1 : (t1 + d) / (1 + t1 * d)) + 1) / 2;
	var weight2 = 1 - weight1;

	color1.red(color1.red() * weight1 + color2.red() * weight2);
	color1.green(color1.green() * weight1 + color2.green() * weight2);
	color1.blue(color1.blue() * weight1 + color2.blue() * weight2);

	color1.alpha(color1.alpha() * weight + color2.alpha() * (1 - weight));

	return color1;
};