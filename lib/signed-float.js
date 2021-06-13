const advancedDetermine = require("@hugoalh/advanced-determine"),
	internalRandom = require("./internal/random.js"),
	unsignedFloat = require("./unsigned-float.js");
/**
 * @function signedFloat
 * @alias float
 * @alias flt
 * @description Give a random signed float number.
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="digit"] Method.
 * @returns {number} A random signed float number.
 */
function signedFloat(option = {}) {
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
	let bin = unsignedFloat(option);
	return ((internalRandom(true, 1, runtime.endian) < 0) ? -bin : bin);
};
module.exports = signedFloat;
