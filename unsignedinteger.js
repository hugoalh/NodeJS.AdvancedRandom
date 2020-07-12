/*==================
[NodeJS] Advanced Random - Unsigned Integer
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
const randomCore = require("./randomcore.js");
/**
 * @function unsignedInteger
 * @alias uInteger
 * @alias uInt
 * @description Give a random unsigned integer number in the given range.
 * @param {object} [configuration] Configuration.
 * @param {string} [configuration.endian="B"] Endian.
 * @param {string} [configuration.method="set"] Method.
 * @param {number} [configuration.range=1e16] Range.
 * @returns {number} A random unsigned integer number.
 */
function unsignedInteger(configuration) {
	let method = "set";
	let range = 1e16;
	if (advancedDetermine.isJSON(configuration) == true) {
		if (configuration.method) {
			if (advancedDetermine.isString(configuration.method) == true) {
				method = configuration.method.toLowerCase();
			} else {
				console.warn(`Invalid type of "configuration.method"! Require type of string. Ignored this parameter.`);
			};
		};
		if (configuration.range) {
			if (advancedDetermine.isNumberPositiveInteger(configuration.range) == true && configuration.range >= 2 && configuration.range <= range) {
				range = configuration.range;
			} else {
				console.warn(`Invalid type of "configuration.range"! Require type of positive integer number, >= 2, and <= ${range}. Ignored this parameter.`);
			};
		};
	};
	if (method === "set") {
		if (range <= internalService.rdBytes3) {
			method = "smallset";
		} else {
			method = "bigset";
		};
	};
	let result = 0;
	switch (method) {
		case "digit":
			const digitModuleCount = range.toString().length;
			for (let index = 0; index < digitModuleCount; index++) {
				const element = randomCore(false, 1, configuration.endian) + 1;
				const digit = Math.ceil((element / internalService.rdBytes1) * 10) - 1;
				result = result * 10 + digit;
			};
			result = Math.ceil(((result + 1) / Math.pow(10, digitModuleCount)) * range) - 1;
			break;
		case "small_set":
		case "smallset":
			const smallSetModuleCount = Math.ceil(range / internalService.rdBytes1);
			for (let index = 0; index < smallSetModuleCount; index++) {
				result += (randomCore(false, 1, configuration.endian) + 1);
			};
			result = Math.ceil((result / (internalService.rdBytes1 * smallSetModuleCount)) * range) - smallSetModuleCount;
			break;
		case "big_set":
		case "bigset":
			const bigSetModuleCount = Math.ceil(range / internalService.rdBytes6);
			for (let index = 0; index < bigSetModuleCount; index++) {
				result += (randomCore(false, 6, configuration.endian) + 1);
			};
			result = Math.ceil((result / (internalService.rdBytes6 * bigSetModuleCount)) * range) - bigSetModuleCount;
			break;
		default:
			return internalService.referenceError(`Invalid reference of "configuration.method"! (Read the documentation for more information.)`);
			break;
	};
	return result;
};
module.exports = unsignedInteger;
