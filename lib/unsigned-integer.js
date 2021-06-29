const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js"),
	crypto = require("crypto");
/**
 * @function unsignedInteger
 * @alias uInt
 * @alias uInteger
 * @description Give a random unsigned safe integer number in the given range.
 * @param {object} [option] Option.
 * @param {number} [option.range=1e14] A positive safe integer number as range.
 * @returns {number} A random unsigned safe integer number.
 */
function unsignedInteger(option = {}) {
	let runtime = {
		range: 1e14
	};
	checkOption(option);
	if (typeof option.range !== "undefined") {
		if (advancedDetermine.isNumberPositiveSafeInteger(option.range) !== true) {
			throw new TypeError(`Argument "option.range" must be type of positive safe integer number!`);
		};
		runtime.range = option.range;
	};
	return crypto.randomInt(0, runtime.range);
};
module.exports = unsignedInteger;
