const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js"),
	crypto = require("crypto");
/**
 * @function signedFloat
 * @alias float
 * @alias flt
 * @description Give a random signed float number.
 * @param {object} [option={}] Option.
 * @param {number} [option.decimalPlace=14] Number of decimal place.
 * @returns {number} A random signed float number.
 */
function signedFloat(option = {}) {
	let runtime = {
		decimalPlace: 14
	};
	checkOption(option);
	if (typeof option.decimalPlace !== "undefined") {
		if (advancedDetermine.isNumberPositiveSafeInteger(option.decimalPlace) !== true) {
			throw new TypeError(`Argument \`option.decimalPlace\` must be type of positive safe integer number!`);
		};
		if (
			option.decimalPlace < 1 ||
			option.decimalPlace > 14
		) {
			throw new RangeError(`Argument \`option.decimalPlace\` must be in range 1 ~ 14!`);
		};
		runtime.decimalPlace = option.decimalPlace;
	};
	let value = crypto.randomInt(0, 1e14) / 1e14;
	return Number.parseFloat(((Boolean(crypto.randomInt(0, 2))) ? -value : value).toFixed(runtime.decimalPlace));
};
module.exports = signedFloat;
