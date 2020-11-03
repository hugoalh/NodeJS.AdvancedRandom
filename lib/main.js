/*==================
[NodeJS] Advanced Random
	Language:
		NodeJS/10.13.0
==================*/
/**
 * @const {string} version
 */
const version = "1.2.0";

const signedFloat = require("./signedfloat.js"),
	signedInteger = require("./signedinteger.js"),
	unsignedFloat = require("./unsignedfloat.js"),
	unsignedInteger = require("./unsignedinteger.js");
module.exports = {
	float: signedFloat,
	flt: signedFloat,
	int: signedInteger,
	integer: signedInteger,
	pool: require("./pool.js"),
	signedFloat: signedFloat,
	signedInteger: signedInteger,
	uFloat: unsignedFloat,
	uFlt: unsignedFloat,
	uInt: unsignedInteger,
	uInteger: unsignedInteger,
	unsignedFloat: unsignedFloat,
	unsignedInteger: unsignedInteger,
	v: version,
	ver: version,
	version: version
};
