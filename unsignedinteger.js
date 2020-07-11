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
 * @param {object} [configuration]
 * @param {string} [configuration.endian="B"]
 * @param {string} [configuration.method="set"]
 * @param {number} [configuration.range=1e15]
 * @returns {number}
 */
function unsignedInteger(configuration) {
	let endian = "B";
	let method = "set";
	let range = 1e15;
	if (advancedDetermine.isJSON(configuration) == true) {
		if (configuration.endian) {
			if (advancedDetermine.isString(configuration.endian) == true && (configuration.endian.toUpperCase() === "B" || configuration.endian.toUpperCase() === "L")) {
				endian = configuration.endian.toUpperCase();
			} else {
				console.warn(`Invalid type/reference of "configuration.endian"! Require type of string. Ignored this parameter. (Read the documentation for more information.)`);
			};
		};
		if (configuration.method) {
			if (advancedDetermine.isString(configuration.method) == true) {
				method = configuration.method.toLowerCase();
			} else {
				console.warn(`Invalid type of "configuration.method"! Require type of string. Ignored this parameter. (Read the documentation for more information.)`);
			};
		};
		if (configuration.range) {
			if (advancedDetermine.isNumberPositiveSafeInteger(configuration.range) == true && configuration.range >= 2 && configuration.range <= range) {
				range = configuration.range;
			} else {
				console.warn(`Invalid type of "configuration.range"! Require type of safe positive integer number, >= 2, and <= ${range}. Ignored this parameter.`);
			};
		};
	};
	let result = 0;
	switch (method) {
		case "add":
			const addModuleCount = Math.ceil(range / 256);
			for (let index = 0; index < addModuleCount; index++) {
				result += randomCore(false, 1, endian);
			};
			result = Math.floor((result / (256 * addModuleCount)) * range);
			break;
		case "digit":
			const digitModuleCount = range.toString().length;
			for (let index = 0; index < digitModuleCount; index++) {
				const element = randomCore(false, 1, endian);
				const digit = Math.floor((element / 256) * 10);
				result = result * 10 + digit;
			};
			result = Math.floor((result / Math.pow(10, digitModuleCount)) * range);
			break;
		case "set":
			const setMaximum = 281474976710656;
			const setModuleCount = Math.ceil(range / setMaximum);
			for (let index = 0; index < setModuleCount; index++) {
				result += randomCore(false, 6, endian);
			};
			result = Math.floor((result / (setMaximum * setModuleCount)) * range);
			break;
		default:
			return internalService.referenceError(`Invalid reference of "configuration.method"! (Read the documentation for more information.)`);
			break;
	};
	return result;
};
module.exports = unsignedInteger;
