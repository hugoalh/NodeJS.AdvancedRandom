/*==================
[NodeJS] Advanced Random - Unsigned Float
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
const randomCore = require("./randomcore.js");
/**
 * @function unsignedFloat
 * @alias uFloat
 * @alias uFlt
 * @param {object} [configuration]
 * @param {string} [configuration.endian="B"]
 * @param {string} [configuration.method="digit"]
 * @returns {number}
 */
function unsignedFloat(configuration) {
	let endian = "B";
	let method = "digit";
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
	};
	let data = 0;
	switch (method) {
		case "digit":
			for (let index = 0; index < 16; index++) {
				const element = randomCore(false, 1, endian);
				const digit = Math.floor((element / 256) * 10);
				data = data * 10 + digit;
			};
			break;
		case "set":
			const setModuleCount = 36;
			for (let index = 0; index < setModuleCount; index++) {
				data += randomCore(false, 6, endian);
			};
			data = Math.floor((data / (281474976710656 * setModuleCount)) * 1e16);
			break;
		default:
			return internalService.referenceError(`Invalid reference of "configuration.method"! (Read the documentation for more information.)`);
			break;
	};
	const result = Number.parseFloat((data * 1e-16).toFixed(15));
	return result;
};
module.exports = unsignedFloat;
