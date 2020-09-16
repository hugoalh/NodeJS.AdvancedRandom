/*==================
[NodeJS] Advanced Random
	Language:
		NodeJS 14
==================*/
/**
 * @const {string} version
 */
const version = "1.1.2";

const signedFloat = require("./signedfloat.js");
const signedInteger = require("./signedinteger.js");
const unsignedFloat = require("./unsignedfloat.js");
const unsignedInteger = require("./unsignedinteger.js");
module.exports.float = signedFloat;
module.exports.flt = signedFloat;
module.exports.int = signedInteger;
module.exports.integer = signedInteger;
module.exports.pool = require("./pool.js");
module.exports.signedFloat = signedFloat;
module.exports.signedInteger = signedInteger;
module.exports.uFloat = unsignedFloat;
module.exports.uFlt = unsignedFloat;
module.exports.uInt = unsignedInteger;
module.exports.uInteger = unsignedInteger;
module.exports.unsignedFloat = unsignedFloat;
module.exports.unsignedInteger = unsignedInteger;
module.exports.v = version;
module.exports.ver = version;
module.exports.version = version;
