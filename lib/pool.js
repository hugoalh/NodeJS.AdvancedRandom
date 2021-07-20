const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js"),
	crypto = require("crypto");
const randomDatabase = {
	lowerCase: `abcdefghijklmnopqrstuvwxyz`,
	upperCase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
	number: `0123456789`,
	symbol: `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
};
/**
 * @function random
 * @description Give a random string in the given length.
 * @param {object} [option={}] Option.
 * @param {number} [option.length=8] Random string length.
 * @param {boolean} [option.lowerCase=true] Include lowercase.
 * @param {boolean} [option.number=false] Include number.
 * @param {string} [option.pool] Custom random pool.
 * @param {boolean} [option.symbol=false] Include symbol.
 * @param {boolean} [option.upperCase=false] Include uppercase.
 * @returns {string} A random string.
 */
function random(option = {}) {
	let runtime = {
		length: 8,
		lowerCase: true,
		number: false,
		pool: undefined,
		symbol: false,
		upperCase: false
	};
	checkOption(option);
	if (typeof option.length !== "undefined") {
		if (advancedDetermine.isNumberPositiveSafeInteger(option.length) !== true) {
			throw new TypeError(`Argument \`option.length\` must be type of positive safe integer number!`);
		};
		if (option.length === 0) {
			throw new RangeError(`Argument \`option.length\` must be > 0!`);
		};
		runtime.length = option.length;
	};
	if (typeof option.lowerCase !== "undefined") {
		if (typeof option.lowerCase !== "boolean") {
			throw new TypeError(`Argument \`option.lowerCase\` must be type of boolean!`);
		};
		runtime.lowerCase = option.lowerCase;
	};
	if (typeof option.number !== "undefined") {
		if (typeof option.number !== "boolean") {
			throw new TypeError(`Argument \`option.number\` must be type of boolean!`);
		};
		runtime.number = option.number;
	};
	if (typeof option.pool !== "undefined") {
		if (advancedDetermine.isString(option.pool) !== true) {
			throw new TypeError(`Argument \`option.pool\` must be type of string (non-nullable)!`);
		};
		runtime.pool = option.pool;
	};
	if (typeof option.symbol !== "undefined") {
		if (typeof option.symbol !== "boolean") {
			throw new TypeError(`Argument \`option.symbol\` must be type of boolean!`);
		};
		runtime.symbol = option.symbol;
	};
	if (typeof option.upperCase !== "undefined") {
		if (typeof option.upperCase !== "boolean") {
			throw new TypeError(`Argument \`option.upperCase\` must be type of boolean!`);
		};
		runtime.upperCase = option.upperCase;
	};
	if (runtime.lowerCase === false && runtime.number === false && typeof runtime.pool === "undefined" && runtime.symbol === false && runtime.upperCase === false) {
		throw new Error(`Argument \`type\` is not defined!`);
	};
	if (typeof runtime.pool === "undefined") {
		runtime.pool = "";
		if (runtime.lowerCase === true) {
			runtime.pool += randomDatabase.lowerCase;
		};
		if (runtime.number === true) {
			runtime.pool += randomDatabase.number;
		};
		if (runtime.symbol === true) {
			runtime.pool += randomDatabase.symbol;
		};
		if (runtime.upperCase === true) {
			runtime.pool += randomDatabase.upperCase;
		};
	};
	let promiseDelta = [],
		resultObject = {};
	for (let index = 0; index < runtime.length; index++) {
		promiseDelta.push(
			new Promise(() => {
				resultObject[index] = runtime.pool.charAt(crypto.randomInt(0, runtime.pool.length));
			}).catch()
		);
	};
	Promise.allSettled(promiseDelta);
	return Object.values(resultObject).join("");
};
module.exports = random;
