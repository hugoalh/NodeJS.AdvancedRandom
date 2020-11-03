/*==================
[NodeJS] Advanced Random - Pool
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	unsignedInteger = require("./unsignedinteger.js");
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
 * @param {string} [option.endian="B"] Endian.
 * @param {number} [option.length=8] Random string length.
 * @param {boolean} [option.lowerCase=true] Include lowercase.
 * @param {string} [option.method="set"] Method.
 * @param {boolean} [option.number=false] Include number.
 * @param {string} [option.pool] Custom random pool.
 * @param {boolean} [option.symbol=false] Include symbol.
 * @param {boolean} [option.upperCase=false] Include uppercase.
 * @returns {string} A random string.
 */
function random(option = {}) {
	let runtime = {
		endian: "B",
		length: 8,
		lowerCase: true,
		method: "set",
		number: false,
		pool: undefined,
		symbol: false,
		upperCase: false
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Random - Pool)`);
	};
	if (typeof option.endian !== "undefined") {
		if (advancedDetermine.isString(option.endian) !== true) {
			throw new TypeError(`Argument "option.endian" must be type of string (non-nullable)! ([NodeJS] Advanced Random - Pool)`);
		};
		option.endian = option.endian.toUpperCase();
		if (option.endian !== "B" && option.endian !== "L") {
			throw new RangeError(`Argument "option.endian"'s value is invalid! Only accept "B" and "E". ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.endian = option.endian;
	};
	if (typeof option.length !== "undefined") {
		if (
			advancedDetermine.isNumberPositiveSafeInteger(option.length) !== true ||
			option.length === 0
		) {
			throw new TypeError(`Argument "option.length" must be type of safe positive integer number and > 0! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.length = option.length;
	};
	if (typeof option.lowerCase !== "undefined") {
		if (typeof option.lowerCase !== "boolean") {
			throw new TypeError(`Argument "option.lowerCase" must be type of boolean! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.lowerCase = option.lowerCase;
	};
	if (typeof option.method !== "undefined") {
		if (advancedDetermine.isString(option.method) !== true) {
			throw new TypeError(`Argument "option.method" must be type of string (non-nullable)! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.method = option.method.toLowerCase();
	};
	if (typeof option.number !== "undefined") {
		if (typeof option.number !== "boolean") {
			throw new TypeError(`Argument "option.number" must be type of boolean! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.number = option.number;
	};
	if (typeof option.pool !== "undefined") {
		if (
			advancedDetermine.isString(option.pool) !== true ||
			option.pool.length <= 1
		) {
			throw new TypeError(`Argument "option.pool" must be type of string (non-nullable) and length >= 2! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.pool = option.pool;
	};
	if (typeof option.symbol !== "undefined") {
		if (typeof option.symbol !== "boolean") {
			throw new TypeError(`Argument "option.symbol" must be type of boolean! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.symbol = option.symbol;
	};
	if (typeof option.upperCase !== "undefined") {
		if (typeof option.upperCase !== "boolean") {
			throw new TypeError(`Argument "option.upperCase" must be type of boolean! ([NodeJS] Advanced Random - Pool)`);
		};
		runtime.upperCase = option.upperCase;
	};
	if (runtime.lowerCase === false && runtime.number === false && typeof runtime.pool === "undefined" && runtime.symbol === false && runtime.upperCase === false) {
		throw new Error(`No input at argument "type"! ([NodeJS] Advanced Random - Pool)`);
	};
	if (typeof runtime.pool === "undefined") {
		runtime.pool = "";
		if (runtime.lowerCase === true) {
			runtime.pool += randomDatabase["LowerCaseLetter"];
		};
		if (runtime.number === true) {
			runtime.pool += randomDatabase["Number"];
		};
		if (runtime.symbol === true) {
			runtime.pool += randomDatabase["Symbol"];
		};
		if (runtime.upperCase === true) {
			runtime.pool += randomDatabase["UpperCaseLetter"];
		};
	};
	if (Promise.allSettled) {
		let promiseDelta = [],
			resultObject = {};
		for (let index = 0; index < runtime.length; index++) {
			promiseDelta.push(
				new Promise(() => {
					resultObject[index] = runtime.pool.charAt(
						unsignedInteger({
							endian: runtime.endian,
							method: runtime.method,
							range: runtime.pool.length
						})
					);
				}).catch()
			);
		};
		Promise.allSettled(promiseDelta);
		return Object.values(resultObject).join("");
	};
	let resultArray = [];
	for (let index = 0; index < runtime.length; index++) {
		resultArray.push(
			runtime.pool.charAt(
				unsignedInteger({
					endian: runtime.endian,
					method: runtime.method,
					range: runtime.pool.length
				})
			)
		);
	};
	return resultArray.join("");
};
module.exports = random;
