const advancedDetermine = require("@hugoalh/advanced-determine"),
	internalRandom = require("./internal/random.js"),
	unsignedInteger = require("./unsigned-integer.js");
/**
 * @function signedInteger
 * @alias int
 * @alias integer
 * @description Give a random signed integer number in the given range.
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="set"] Method.
 * @param {number} [option.range=1e16] Range.
 * @returns {number} A random signed integer number.
 */
function signedInteger(option = {}) {
	let runtime = {
		endian: "B"
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair!`);
	};
	if (typeof option.endian !== "undefined") {
		if (advancedDetermine.isString(option.endian) !== true) {
			throw new TypeError(`Argument "option.endian" must be type of string (non-nullable)!`);
		};
		option.endian = option.endian.toUpperCase();
		if (option.endian !== "B" && option.endian !== "L") {
			throw new RangeError(`Argument "option.endian"'s value is invalid! Only accept "B" and "E".`);
		};
		runtime.endian = option.endian;
	};
	let bin = unsignedInteger(option);
	return ((internalRandom(true, 1, runtime.endian) < 0) ? -bin : bin);
};
module.exports = signedInteger;
