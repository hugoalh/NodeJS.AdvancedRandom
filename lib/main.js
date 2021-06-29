const version = 2;
const signedFloat = require("./signed-float.js"),
	signedInteger = require("./signed-integer.js"),
	unsignedFloat = require("./unsigned-float.js"),
	unsignedInteger = require("./unsigned-integer.js");
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
