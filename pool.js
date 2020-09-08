/*==================
[NodeJS] Advanced Random - Pool
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
const unsignedInteger = require("./unsignedinteger.js");
const randomDatabase = {
	lowerCase: `abcdefghijklmnopqrstuvwxyz`,
	upperCase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
	number: `0123456789`,
	symbol: `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
};
/**
 * @function random
 * @description Give a random string in the given length.
 * @param {object} [option] Option.
 * @param {number} [option.length=8] Random string length.
 * @param {boolean} [option.lowerCase=true] Include lowercase.
 * @param {boolean} [option.number=false] Include number.
 * @param {(string|undefined)} [option.pool] Custom random pool.
 * @param {boolean} [option.symbol=false] Include symbol.
 * @param {boolean} [option.upperCase=false] Include uppercase.
 * @returns {string} A random string.
 */
function random(option) {
	let runtime = {
		length: 8,
		lowerCase: true,
		number: false,
		pool: undefined,
		symbol: false,
		upperCase: false
	};
	if (advancedDetermine.isObjectPair(option) == true) {
		if (typeof option.length != "undefined") {
			if (
				advancedDetermine.isNumberPositiveSafeInteger(option.length) != true ||
				option.length == 0
			) {
				return internalService.prefabTypeError("option.length", "safe positive integer number, and > 0");
			}
			runtime.length = option.length;
		}
		if (typeof option.lowerCase != "undefined") {
			if (typeof option.lowerCase != "boolean") {
				return internalService.prefabTypeError("option.lowerCase", "boolean");
			}
			runtime.lowerCase = option.lowerCase;
		}
		if (typeof option.number != "undefined") {
			if (typeof option.number != "boolean") {
				return internalService.prefabTypeError("option.number", "boolean");
			}
			runtime.number = option.number;
		}
		if (typeof option.pool != "undefined") {
			if (
				advancedDetermine.isString(option.pool) != true ||
				option.pool.length <= 1
			) {
				return internalService.prefabTypeError("option.pool", "string, and length >= 2");
			}
			runtime.pool = option.pool;
		}
		if (typeof option.symbol != "undefined") {
			if (typeof option.symbol != "boolean") {
				return internalService.prefabTypeError("option.symbol", "boolean");
			}
			runtime.symbol = option.symbol;
		}
		if (typeof option.upperCase != "undefined") {
			if (typeof option.upperCase != "boolean") {
				return internalService.prefabTypeError("option.upperCase", "boolean");
			}
			runtime.upperCase = option.upperCase;
		}
	}
	if (runtime.lowerCase == false && runtime.number == false && typeof runtime.pool == "undefined" && runtime.symbol == false && runtime.upperCase == false) {
		return internalService.prefabNoInputError("type");
	}
	if (typeof runtime.pool == "undefined") {
		runtime.pool = "";
		if (runtime.lowerCase == true) {
			runtime.pool += randomDatabase["LowerCaseLetter"];
		}
		if (runtime.number == true) {
			runtime.pool += randomDatabase["Number"];
		}
		if (runtime.symbol == true) {
			runtime.pool += randomDatabase["Symbol"];
		}
		if (runtime.upperCase == true) {
			runtime.pool += randomDatabase["UpperCaseLetter"];
		}
	}
	const poolSize = runtime.pool.length;
	let promiseDelta = [];
	let resultObject = {};
	for (let index = 0; index < runtime.length; index++) {
		promiseDelta.push(
			new Promise(() => {
				resultObject[index] = runtime.pool.charAt(
					unsignedInteger({
						range: poolSize
					})
				);
			}).catch()
		);
	}
	Promise.allSettled(promiseDelta);
	return Object.values(resultObject).join("");
}
module.exports = random;
