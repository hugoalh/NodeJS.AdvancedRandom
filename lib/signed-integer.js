const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js"),
	crypto = require("crypto");
/**
 * @function signedInteger
 * @alias int
 * @alias integer
 * @description Give a random signed safe integer number in the given range.
 * @param {object} [option] Option.
 * @param {number} [option.range=1e14] A positive safe integer number as range.
 * @returns {number} A random signed safe integer number.
 */
function signedInteger(option = {}) {
	let runtime = {
		range: 1e14
	};
	checkOption(option);
	if (typeof option.range !== "undefined") {
		if (advancedDetermine.isNumberPositiveSafeInteger(option.range) !== true) {
			throw new TypeError(`Argument "option.range" must be type of positive safe integer number!`);
		};
		if (option.range < 1 || option.range > 1e14) {
			throw new RangeError(`Argument "option.range" must be in range 1 ~ 1e14!`);
		};
		runtime.range = option.range;
	};
	let value = crypto.randomInt(0, runtime.range);
	return ((Boolean(crypto.randomInt(0, 2))) ? -value : value);
};
module.exports = signedInteger;
