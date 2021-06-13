const advancedDetermine = require("@hugoalh/advanced-determine"),
	unsignedInteger = require("./unsigned-integer.js");
/**
 * @function unsignedFloat
 * @alias uFloat
 * @alias uFlt
 * @description Give a random unsigned float number.
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="digit"] Method.
 * @returns {number} A random unsigned float number.
 */
function unsignedFloat(option = {}) {
	let runtime = {
		endian: "B",
		method: "digit"
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
	if (typeof option.method !== "undefined") {
		if (advancedDetermine.isString(option.method) !== true) {
			throw new TypeError(`Argument "option.method" must be type of string (non-nullable)!`);
		};
		runtime.method = option.method.toLowerCase();
	};
	return Number.parseFloat(
		(unsignedInteger({
			endian: runtime.endian,
			method: runtime.method,
			range: 1e16
		}) * 1e-16).toFixed(15)
	);
};
module.exports = unsignedFloat;
