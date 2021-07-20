const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js"),
	crypto = require("crypto");
/**
 * @function unsignedFloat
 * @alias uFloat
 * @alias uFlt
 * @description Give a random unsigned float number.
 * @param {object} [option={}] Option.
 * @param {number} [option.decimalPlace=14] Number of decimal place.
 * @returns {number} A random unsigned float number.
 */
function unsignedFloat(option = {}) {
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
	return Number.parseFloat((crypto.randomInt(0, 1e14) / 1e14).toFixed(runtime.decimalPlace));
};
module.exports = unsignedFloat;
