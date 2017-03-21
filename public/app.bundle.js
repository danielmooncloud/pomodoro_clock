/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
(function (global, factory) {

	"use strict";

	if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var _slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	function DOMEval(code, doc) {
		doc = doc || document;

		var script = doc.createElement("script");

		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.2.1",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {

			// Return all the elements in a clean array
			if (num == null) {
				return _slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function each(callback) {
			return jQuery.each(this, callback);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isWindow: function isWindow(obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function isNumeric(obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		},

		isPlainObject: function isPlainObject(obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function isEmptyObject(obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function type(obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		},

		// Evaluates a script in a global context
		globalEval: function globalEval(code) {
			DOMEval(code);
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		each: function each(obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function fcssescape(ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function dir(elem, _dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[_dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var _siblings = function _siblings(n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	function nodeName(elem, name) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	};
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not);
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter(qualifier, elements);
		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function has(target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return _siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return _siblings(elem.firstChild);
		},
		contents: function contents(elem) {
			if (nodeName(elem, "iframe")) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if (nodeName(elem, "template")) {
				elem = elem.content || elem;
			}

			return jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		_fired,


		// Flag to prevent firing
		_locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function fire() {

			// Enforce single-firing
			_locked = _locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			_fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (_locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function remove() {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function empty() {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function disable() {
				_locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function disabled() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function lock() {
				_locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function locked() {
				return !!_locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (!_locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject, noValue) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && jQuery.isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && jQuery.isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply(undefined, [value].slice(noValue));
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply(undefined, [value]);
		}
	}

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function _catch(fn) {
					return _promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function pipe() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function then(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function mightThrow() {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (jQuery.isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						_state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// progress_callbacks.lock
					tuples[0][2].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = _slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function updateFunc(i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function acceptData(owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function cache(owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function set(owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function get(owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access: function access(owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function remove(owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (Array.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function hasData(owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function hasData(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function data(elem, name, _data) {
			return dataUser.access(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function _data(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function _removeData(elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || Array.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function swap(elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function _on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				_on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function fn(event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function dispatch(nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function addProp(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function set(value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function fix(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function which(event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function on(types, selector, data, fn) {
			return _on(this, types, selector, data, fn);
		},
		one: function one(types, selector, data, fn) {
			return _on(this, types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return jQuery(">tbody", elem)[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function _remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function htmlPrefilter(html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function cleanData(elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function detach(selector) {
			return _remove(this, selector, true);
		},

		remove: function remove(selector) {
			return _remove(this, selector);
		},

		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function append() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function getStyles(elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);

		jQuery.extend(support, {
			pixelPosition: function pixelPosition() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function boxSizingReliable() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function pixelMarginRight() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function reliableMarginLeft() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,


		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

		computed = computed || getStyles(elem);

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rcustomProp = /^--/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName(name) {
		var ret = jQuery.cssProps[name];
		if (!ret) {
			ret = jQuery.cssProps[name] = vendorPropName(name) || name;
		}
		return ret;
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i,
		    val = 0;

		// If we already have the right measurement, avoid augmentation
		if (extra === (isBorderBox ? "border" : "content")) {
			i = 4;

			// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with computed style
		var valueIsBorderBox,
		    styles = getStyles(elem),
		    val = curCSS(elem, name, styles),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if (rnumnonpx.test(val)) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if (val === "auto") {
			val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat(val) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name),
			    style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					if (isCustomProp) {
						style.setProperty(name, value);
					} else {
						style[name] = value;
					}
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name);

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}

			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (Array.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    inProgress,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function schedule() {
		if (inProgress) {
			if (document.hidden === false && window.requestAnimationFrame) {
				window.requestAnimationFrame(schedule);
			} else {
				window.setTimeout(schedule, jQuery.fx.interval);
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			// If there's more to do, yield
			if (percent < 1 && length) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if (!length) {
				deferred.notifyWith(elem, [animation, 1, 0]);
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith(elem, [animation]);
			return false;
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		// Attach callbacks from options
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		return animation;
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		// Go to the end state if fx are off
		if (jQuery.fx.off) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Run the timer and safely remove it when done (allowing for external removal)
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (inProgress) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function () {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function set(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnothtmlwhite) || [];

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (Array.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (Array.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend(jQuery.event, {

		trigger: function trigger(event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function simulate(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	support.focusin = "onfocusin" in window;

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (Array.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (Array.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			_statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available, append data to url
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			var wrap;

			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap(selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var _callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function send(headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					_callback = function callback(type) {
						return function () {
							if (_callback) {
								_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = _callback();
					errorCallback = xhr.onerror = _callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (_callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					_callback = _callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (_callback) {
							throw e;
						}
					}
				},

				abort: function abort() {
					if (_callback) {
						_callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, _callback2;
			return {
				send: function send(_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", _callback2 = function callback(evt) {
						script.remove();
						_callback2 = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function abort() {
					if (_callback2) {
						_callback2();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function offset(options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var doc,
			    docElem,
			    rect,
			    win,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {

				// Coalesce documents and windows
				var win;
				if (jQuery.isWindow(elem)) {
					win = elem;
				} else if (elem.nodeType === 9) {
					win = elem.defaultView;
				}

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.fn.extend({

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	jQuery.holdReady = function (hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Timer = __webpack_require__(4);

module.exports = function Clock(view) {
	'use strict';

	var timer = new Timer(25);
	var breakTimer = new Timer(5);
	var interval;
	var inProgress = false;
	var breakTime = false;
	var paused = false;
	var minutes;
	var seconds;

	var init = function init() {
		view.init();
		view.renderTime(timer.getLength());
	};

	var getTimeRemaining = function getTimeRemaining(deadline) {
		minutes = Math.floor((deadline - Date.parse(new Date())) / 60000);
		seconds = Math.floor((deadline - Date.parse(new Date())) / 1000 % 60);
		return seconds >= 10 ? minutes + ':' + seconds : minutes + ':0' + seconds;
	};

	var clockInterval = function clockInterval(deadline) {
		interval = setInterval(function () {
			var timeRemaining = getTimeRemaining(deadline);
			view.renderTime(timeRemaining);
			if (minutes + seconds === 0) switchToBreak();
		}, 1000);
	};

	var switchToBreak = function switchToBreak() {
		inProgress = false;
		if (!breakTime) {
			clearInterval(interval);
			breakTime = true;
			this.tickTock(breakTimer.getLength());
		} else {
			this.reset();
		}
	};

	this.tickTock = function () {
		var current = breakTime ? breakTimer : timer;
		if (!inProgress) {
			inProgress = true;
			var deadline = Date.parse(new Date()) + current.getLength() * 60 * 1000;
			clockInterval(deadline);
		}
	};

	this.pause = function () {
		if (!paused) {
			clearInterval(interval);
		} else {
			var deadline = Date.parse(new Date()) + minutes * 60 * 1000 + seconds * 1000;
			clockInterval(deadline);
		}
		paused = !paused;
	};

	this.addOneMinute = function (num) {
		var length = timer.addMinute(num) || 1;
		view.renderTimeSet(length);
		if (!inProgress) view.renderTime(length);
	};

	this.addBreakMinute = function (num) {
		var length = breakTimer.addMinute(num) || 1;
		view.renderBreakSet(length);
	};

	this.reset = function () {
		clearInterval(interval);
		paused = breakTime = inProgress = false;
		view.renderTime(timer.getLength());
	};

	init();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line import/no-webpack-loader-syntax
module.exports = __webpack_require__(15);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function Timer(num) {
	'use strict';

	var length = num;

	this.getLength = function () {
		return length;
	};

	this.addMinute = function (num) {
		if (length === 1 && num < 0) ;else return length += num;
	};
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }

    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.3.7';

  Collapse.TRANSITION_DURATION = 350;

  Collapse.DEFAULTS = {
    toggle: true
  };

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;

    var activesData;
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();

    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

    this.transitioning = 1;

    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;

    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    var dimension = this.dimension();

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };

  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');

    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  }

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;

  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };

  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);

    if (!$this.attr('data-target')) e.preventDefault();

    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();

    Plugin.call($target, option);
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.3.7';

  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

    this.$element.trigger(e);

    if (this.isShown || e.isDefaultPrevented()) return;

    this.isShown = true;

    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');

    this.escape();
    this.resize();

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);

      that.adjustDialog();

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in');

      that.enforceFocus();

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();

    e = $.Event('hide.bs.modal');

    this.$element.trigger(e);

    if (!this.isShown || e.isDefaultPrevented()) return;

    this.isShown = false;

    this.escape();
    this.resize();

    $(document).off('focusin.bs.modal');

    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

    this.$dialog.off('mousedown.dismiss.bs.modal');

    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;

      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));

      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');

      if (!callback) return;

      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;

  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

    if ($this.is('a')) e.preventDefault();

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(5);
var ieee754 = __webpack_require__(10);
var isArray = __webpack_require__(11);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8).Buffer))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.css = __webpack_require__ (19);
module.exports.js = __webpack_require__ (16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (7);
__webpack_require__ (6);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, ".btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:hover,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:hover,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:hover,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtbG9hZGVyL25vLW9wLmpzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19oaWRlLXRleHQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fb3BhY2l0eS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19pbWFnZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19sYWJlbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzZXQtZmlsdGVyLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2l6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19yZXNwb25zaXZlLXZpc2liaWxpdHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fc2l6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190YWItZm9jdXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzZXQtdGV4dC5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190ZXh0LWVtcGhhc2lzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RleHQtb3ZlcmZsb3cuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdmVuZG9yLXByZWZpeGVzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2FsZXJ0cy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19idXR0b25zLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3BhbmVscy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19wYWdpbmF0aW9uLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2xpc3QtZ3JvdXAuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbmF2LWRpdmlkZXIuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZm9ybXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcHJvZ3Jlc3MtYmFyLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RhYmxlLXJvdy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19iYWNrZ3JvdW5kLXZhcmlhbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYm9yZGVyLXJhZGl1cy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmFkaWVudHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2xlYXJmaXguc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2VudGVyLWJsb2NrLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX25hdi12ZXJ0aWNhbC1hbGlnbi5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmlkLWZyYW1ld29yay5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmlkLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbi1ncm91cHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jbG9zZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xpc3QtZ3JvdXAuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19mb3Jtcy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3R5cGUuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190b29sdGlwLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdXRpbGl0aWVzLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGluc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlc1wiO1xuJGljb24tZm9udC1wYXRoOiBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9mb250cy9ib290c3RyYXAvXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbi1ncm91cHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jbG9zZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xpc3QtZ3JvdXBcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19mb3Jtc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3R5cGVcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190b29sdGlwXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdXRpbGl0aWVzXCI7XG5cbiIsIi8vIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVXRpbGl0aWVzXG5AaW1wb3J0IFwibWl4aW5zL2hpZGUtdGV4dFwiO1xuQGltcG9ydCBcIm1peGlucy9vcGFjaXR5XCI7XG5AaW1wb3J0IFwibWl4aW5zL2ltYWdlXCI7XG5AaW1wb3J0IFwibWl4aW5zL2xhYmVsc1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC1maWx0ZXJcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eVwiO1xuQGltcG9ydCBcIm1peGlucy9zaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RhYi1mb2N1c1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC10ZXh0XCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtZW1waGFzaXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGV4dC1vdmVyZmxvd1wiO1xuQGltcG9ydCBcIm1peGlucy92ZW5kb3ItcHJlZml4ZXNcIjtcblxuLy8gQ29tcG9uZW50c1xuQGltcG9ydCBcIm1peGlucy9hbGVydHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvYnV0dG9uc1wiO1xuQGltcG9ydCBcIm1peGlucy9wYW5lbHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcGFnaW5hdGlvblwiO1xuQGltcG9ydCBcIm1peGlucy9saXN0LWdyb3VwXCI7XG5AaW1wb3J0IFwibWl4aW5zL25hdi1kaXZpZGVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL2Zvcm1zXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Byb2dyZXNzLWJhclwiO1xuQGltcG9ydCBcIm1peGlucy90YWJsZS1yb3dcIjtcblxuLy8gU2tpbnNcbkBpbXBvcnQgXCJtaXhpbnMvYmFja2dyb3VuZC12YXJpYW50XCI7XG5AaW1wb3J0IFwibWl4aW5zL2JvcmRlci1yYWRpdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JhZGllbnRzXCI7XG5cbi8vIExheW91dFxuQGltcG9ydCBcIm1peGlucy9jbGVhcmZpeFwiO1xuQGltcG9ydCBcIm1peGlucy9jZW50ZXItYmxvY2tcIjtcbkBpbXBvcnQgXCJtaXhpbnMvbmF2LXZlcnRpY2FsLWFsaWduXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWQtZnJhbWV3b3JrXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWRcIjtcbiIsIi8vIENTUyBpbWFnZSByZXBsYWNlbWVudFxuLy9cbi8vIEhlYWRzIHVwISB2MyBsYXVuY2hlZCB3aXRoIG9ubHkgYC5oaWRlLXRleHQoKWAsIGJ1dCBwZXIgb3VyIHBhdHRlcm4gZm9yXG4vLyBtaXhpbnMgYmVpbmcgcmV1c2VkIGFzIGNsYXNzZXMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGlzIGRvZXNuJ3QgaG9sZCB1cC4gQXNcbi8vIG9mIHYzLjAuMSB3ZSBoYXZlIGFkZGVkIGAudGV4dC1oaWRlKClgIGFuZCBkZXByZWNhdGVkIGAuaGlkZS10ZXh0KClgLlxuLy9cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvY29tbWl0L2FhMDM5NmVhZTc1N1xuXG4vLyBEZXByZWNhdGVkIGFzIG9mIHYzLjAuMSAoaGFzIGJlZW4gcmVtb3ZlZCBpbiB2NClcbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6IDAvMCBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBOZXcgbWl4aW4gdG8gdXNlIGFzIG9mIHYzLjAuMVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgQGluY2x1ZGUgaGlkZS10ZXh0O1xufVxuIiwiLy8gT3BhY2l0eVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgLy8gSUU4IGZpbHRlclxuICAkb3BhY2l0eS1pZTogKCRvcGFjaXR5ICogMTAwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcbn1cbiIsIi8vIEltYWdlIE1peGluc1xuLy8gLSBSZXNwb25zaXZlIGltYWdlXG4vLyAtIFJldGluYSBpbWFnZVxuXG5cbi8vIFJlc3BvbnNpdmUgaW1hZ2Vcbi8vXG4vLyBLZWVwIGltYWdlcyBmcm9tIHNjYWxpbmcgYmV5b25kIHRoZSB3aWR0aCBvZiB0aGVpciBwYXJlbnRzLlxuQG1peGluIGltZy1yZXNwb25zaXZlKCRkaXNwbGF5OiBibG9jaykge1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBQYXJ0IDE6IFNldCBhIG1heGltdW0gcmVsYXRpdmUgdG8gdGhlIHBhcmVudFxuICBoZWlnaHQ6IGF1dG87IC8vIFBhcnQgMjogU2NhbGUgdGhlIGhlaWdodCBhY2NvcmRpbmcgdG8gdGhlIHdpZHRoLCBvdGhlcndpc2UgeW91IGdldCBzdHJldGNoaW5nXG59XG5cblxuLy8gUmV0aW5hIGltYWdlXG4vL1xuLy8gU2hvcnQgcmV0aW5hIG1peGluIGZvciBzZXR0aW5nIGJhY2tncm91bmQtaW1hZ2UgYW5kIC1zaXplLiBOb3RlIHRoYXQgdGhlXG4vLyBzcGVsbGluZyBvZiBgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvYCBpcyBpbnRlbnRpb25hbC5cbkBtaXhpbiBpbWctcmV0aW5hKCRmaWxlLTF4LCAkZmlsZS0yeCwgJHdpZHRoLTF4LCAkaGVpZ2h0LTF4KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWltYWdlLXBhdGgoXCIjeyRmaWxlLTF4fVwiKSwgXCIjeyRmaWxlLTF4fVwiKSk7XG5cbiAgQG1lZGlhXG4gIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICBtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKCAgICAgLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgIG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgICAgICAgICBtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtaW1hZ2UtcGF0aChcIiN7JGZpbGUtMnh9XCIpLCBcIiN7JGZpbGUtMnh9XCIpKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR3aWR0aC0xeCAkaGVpZ2h0LTF4O1xuICB9XG59XG4iLCIvLyBMYWJlbHNcblxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAmW2hyZWZdIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuXG5AbWl4aW4gcmVzZXQtZmlsdGVyKCkge1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xufVxuIiwiLy8gUmVzaXplIGFueXRoaW5nXG5cbkBtaXhpbiByZXNpemFibGUoJGRpcmVjdGlvbikge1xuICByZXNpemU6ICRkaXJlY3Rpb247IC8vIE9wdGlvbnM6IGhvcml6b250YWwsIHZlcnRpY2FsLCBib3RoXG4gIG92ZXJmbG93OiBhdXRvOyAvLyBQZXIgQ1NTMyBVSSwgYHJlc2l6ZWAgb25seSBhcHBsaWVzIHdoZW4gYG92ZXJmbG93YCBpc24ndCBgdmlzaWJsZWBcbn1cbiIsIi8vIFJlc3BvbnNpdmUgdXRpbGl0aWVzXG5cbi8vXG4vLyBNb3JlIGVhc2lseSBpbmNsdWRlIGFsbCB0aGUgc3RhdGVzIGZvciByZXNwb25zaXZlLXV0aWxpdGllcy5sZXNzLlxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCRwYXJlbnQpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICB0YWJsZSN7JHBhcmVudH0gIHsgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICB0ciN7JHBhcmVudH0gICAgIHsgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgdGgjeyRwYXJlbnR9LFxuICB0ZCN7JHBhcmVudH0gICAgIHsgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG59XG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCRwYXJlbnQpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvLyBTaXppbmcgc2hvcnRjdXRzXG5cbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuIiwiLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5cbkBtaXhpbiB0YWItZm9jdXMoKSB7XG4gIC8vIFdlYktpdC1zcGVjaWZpYy4gT3RoZXIgYnJvd3NlcnMgd2lsbCBrZWVwIHRoZWlyIGRlZmF1bHQgb3V0bGluZSBzdHlsZS5cbiAgLy8gKEluaXRpYWxseSB0cmllZCB0byBhbHNvIGZvcmNlIGRlZmF1bHQgdmlhIGBvdXRsaW5lOiBpbml0aWFsYCxcbiAgLy8gYnV0IHRoYXQgc2VlbXMgdG8gZXJyb25lb3VzbHkgcmVtb3ZlIHRoZSBvdXRsaW5lIGluIEZpcmVmb3ggYWx0b2dldGhlci4pXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4iLCJAbWl4aW4gcmVzZXQtdGV4dCgpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICAvLyBXZSBkZWxpYmVyYXRlbHkgZG8gTk9UIHJlc2V0IGZvbnQtc2l6ZS5cbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIEZhbGxiYWNrIGZvciB3aGVyZSBgc3RhcnRgIGlzIG5vdCBzdXBwb3J0ZWRcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cbiIsIi8vIFR5cG9ncmFwaHlcblxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gdGV4dC1lbXBoYXNpcy12YXJpYW50KCRwYXJlbnQsICRjb2xvcikge1xuICAjeyRwYXJlbnR9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICB9XG4gIGEjeyRwYXJlbnR9OmhvdmVyLFxuICBhI3skcGFyZW50fTpmb2N1cyB7XG4gICAgY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiLy8gVmVuZG9yIFByZWZpeGVzXG4vL1xuLy8gQWxsIHZlbmRvciBtaXhpbnMgYXJlIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGR1ZSB0byB0aGUgaW50cm9kdWN0aW9uIG9mXG4vLyBBdXRvcHJlZml4ZXIgaW4gb3VyIEdydW50ZmlsZS4gVGhleSBoYXZlIGJlZW4gcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246ICRhbmltYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLW5hbWUoJG5hbWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogJG5hbWU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xufVxuQG1peGluIGFuaW1hdGlvbi1kdXJhdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRkZWxheSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xufVxuQG1peGluIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoJGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbi1jb3VudDtcbn1cbkBtaXhpbiBhbmltYXRpb24tZGlyZWN0aW9uKCRkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLWZpbGwtbW9kZSgkZmlsbC1tb2RlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiAkZmlsbC1tb2RlO1xufVxuXG4vLyBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyBQcmV2ZW50IGJyb3dzZXJzIGZyb20gZmxpY2tlcmluZyB3aGVuIHVzaW5nIENTUyAzRCB0cmFuc2Zvcm1zLlxuLy8gRGVmYXVsdCB2YWx1ZSBpcyBgdmlzaWJsZWAsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byBgaGlkZGVuYFxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmlzaWJpbGl0eSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xuICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xufVxuXG4vLyBEcm9wIHNoYWRvd3Ncbi8vXG4vLyBOb3RlOiBEZXByZWNhdGVkIGAuYm94LXNoYWRvdygpYCBhcyBvZiB2My4xLjAgc2luY2UgYWxsIG9mIEJvb3RzdHJhcCdzXG4vLyBzdXBwb3J0ZWQgYnJvd3NlcnMgdGhhdCBoYXZlIGJveCBzaGFkb3cgY2FwYWJpbGl0aWVzIG5vdyBzdXBwb3J0IGl0LlxuXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdzsgLy8gaU9TIDw0LjMgJiBBbmRyb2lkIDw0LjFcbiAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG4vLyBCb3ggc2l6aW5nXG5AbWl4aW4gYm94LXNpemluZygkYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6ICRib3htb2RlbDtcbn1cblxuLy8gQ1NTMyBDb250ZW50IENvbHVtbnNcbkBtaXhpbiBjb250ZW50LWNvbHVtbnMoJGNvbHVtbi1jb3VudCwgJGNvbHVtbi1nYXA6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAtd2Via2l0LWNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xuICAgICAtbW96LWNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xuICAgICAgICAgIGNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xufVxuXG4vLyBPcHRpb25hbCBoeXBoZW5hdGlvblxuQG1peGluIGh5cGhlbnMoJG1vZGU6IGF1dG8pIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWh5cGhlbnM6ICRtb2RlO1xuICAgICAtbW96LWh5cGhlbnM6ICRtb2RlO1xuICAgICAgLW1zLWh5cGhlbnM6ICRtb2RlOyAvLyBJRTEwK1xuICAgICAgIC1vLWh5cGhlbnM6ICRtb2RlO1xuICAgICAgICAgIGh5cGhlbnM6ICRtb2RlO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgLy8gRmlyZWZveFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIG9wYWNpdHk6IDE7IC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVHJhbnNmb3JtYXRpb25zXG5AbWl4aW4gc2NhbGUoJHJhdGlvLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xufVxuXG5AbWl4aW4gc2NhbGVYKCRyYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7XG59XG5AbWl4aW4gc2NhbGVZKCRyYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7XG59XG5AbWl4aW4gc2tldygkeCwgJHkpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy80ODg1OyBJRTkrXG4gICAgICAgLW8tdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xufVxuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiByb3RhdGVYKCRkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiByb3RhdGVZKCRkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbn1cbkBtaXhpbiBwZXJzcGVjdGl2ZS1vcmlnaW4oJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tcHJvcGVydHkoJHRyYW5zaXRpb24tcHJvcGVydHkuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAkdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAkdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCR0cmFuc2l0aW9uLWRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kdXJhdGlvbigkdHJhbnNpdGlvbi1kdXJhdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSgkdHJhbnNpdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb247XG59XG5cblxuLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG5AbWl4aW4gdXNlci1zZWxlY3QoJHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiAkc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiAkc2VsZWN0O1xufVxuIiwiLy8gQWxlcnRzXG5cbkBtaXhpbiBhbGVydC12YXJpYW50KCRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkdGV4dC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkYm9yZGVyLCA1JSk7XG4gIH1cbiAgLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiBkYXJrZW4oJHRleHQtY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIEJ1dHRvbiB2YXJpYW50c1xuLy9cbi8vIEVhc2lseSBwdW1wIG91dCBkZWZhdWx0IHN0eWxlcywgYXMgd2VsbCBhcyA6aG92ZXIsIDpmb2N1cywgOmFjdGl2ZSxcbi8vIGFuZCBkaXNhYmxlZCBvcHRpb25zIGZvciBhbGwgYnV0dG9uc1xuXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlcikge1xuICBjb2xvcjogJGNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xuICB9XG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgLm9wZW4gPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDEwJSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDEyJSk7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxNyUpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDI1JSk7XG4gICAgfVxuICB9XG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgLm9wZW4gPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICAmLmRpc2FibGVkLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAuYmFkZ2Uge1xuICAgIGNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gQnV0dG9uIHNpemVzXG5AbWl4aW4gYnV0dG9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJvcmRlci1yYWRpdXMpIHtcbiAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cbiIsIi8vIFBhbmVsc1xuXG5AbWl4aW4gcGFuZWwtdmFyaWFudCgkYm9yZGVyLCAkaGVhZGluZy10ZXh0LWNvbG9yLCAkaGVhZGluZy1iZy1jb2xvciwgJGhlYWRpbmctYm9yZGVyKSB7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAmID4gLnBhbmVsLWhlYWRpbmcge1xuICAgIGNvbG9yOiAkaGVhZGluZy10ZXh0LWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkaW5nLWJnLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGhlYWRpbmctYm9yZGVyO1xuXG4gICAgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9yZGVyO1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgY29sb3I6ICRoZWFkaW5nLWJnLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRpbmctdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJiA+IC5wYW5lbC1mb290ZXIge1xuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFBhZ2luYXRpb25cblxuQG1peGluIHBhZ2luYXRpb24tc2l6ZSgkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIExpc3QgR3JvdXBzXG5cbkBtaXhpbiBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kLCAkY29sb3IpIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG5cbiAgICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYsIGJ1dHRvbiYgdG8gYS5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9LCBidXR0b24ubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfVxuICB9XG5cbiAgYS5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9LFxuICBidXR0b24ubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSB7XG4gICAgY29sb3I6ICRjb2xvcjtcblxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpO1xuICAgIH1cbiAgICAmLmFjdGl2ZSxcbiAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAmLmFjdGl2ZTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSG9yaXpvbnRhbCBkaXZpZGVyc1xuLy9cbi8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gaHIpIHdpdGhpbiBkcm9wZG93bnMgYW5kIG5hdiBsaXN0c1xuXG5AbWl4aW4gbmF2LWRpdmlkZXIoJGNvbG9yOiAjZTVlNWU1KSB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46ICgoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgLSAxKSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG59XG4iLCIvLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4vL1xuLy8gVXNlZCBpbiBmb3Jtcy5sZXNzIHRvIGdlbmVyYXRlIHRoZSBmb3JtIHZhbGlkYXRpb24gQ1NTIGZvciB3YXJuaW5ncywgZXJyb3JzLFxuLy8gYW5kIHN1Y2Nlc3Nlcy5cblxuQG1peGluIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCR0ZXh0LWNvbG9yOiAjNTU1LCAkYm9yZGVyLWNvbG9yOiAjY2NjLCAkYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSkge1xuICAvLyBDb2xvciB0aGUgbGFiZWwgYW5kIGhlbHAgdGV4dFxuICAuaGVscC1ibG9jayxcbiAgLmNvbnRyb2wtbGFiZWwsXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94LFxuICAucmFkaW8taW5saW5lLFxuICAuY2hlY2tib3gtaW5saW5lLFxuICAmLnJhZGlvIGxhYmVsLFxuICAmLmNoZWNrYm94IGxhYmVsLFxuICAmLnJhZGlvLWlubGluZSBsYWJlbCxcbiAgJi5jaGVja2JveC1pbmxpbmUgbGFiZWwgIHtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gIH1cbiAgLy8gU2V0IHRoZSBib3JkZXIgYW5kIGJveCBzaGFkb3cgb24gc3BlY2lmaWMgaW5wdXRzIHRvIG1hdGNoXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpKTsgLy8gUmVkZWNsYXJlIHNvIHRyYW5zaXRpb25zIHdvcmtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXItY29sb3IsIDEwJSk7XG4gICAgICAkc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDZweCBsaWdodGVuKCRib3JkZXItY29sb3IsIDIwJSk7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCRzaGFkb3cpO1xuICAgIH1cbiAgfVxuICAvLyBTZXQgdmFsaWRhdGlvbiBzdGF0ZXMgYWxzbyBmb3IgYWRkb25zXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxuICAvLyBPcHRpb25hbCBmZWVkYmFjayBpY29uXG4gIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmb2N1cyBzdGF0ZVxuLy9cbi8vIEdlbmVyYXRlIGEgY3VzdG9taXplZCBmb2N1cyBzdGF0ZSBhbmQgZm9yIGFueSBpbnB1dCB3aXRoIHRoZSBzcGVjaWZpZWQgY29sb3IsXG4vLyB3aGljaCBkZWZhdWx0cyB0byB0aGUgYCRpbnB1dC1ib3JkZXItZm9jdXNgIHZhcmlhYmxlLlxuLy9cbi8vIFdlIGhpZ2hseSBlbmNvdXJhZ2UgeW91IHRvIG5vdCBjdXN0b21pemUgdGhlIGRlZmF1bHQgdmFsdWUsIGJ1dCBpbnN0ZWFkIHVzZVxuLy8gdGhpcyB0byB0d2VhayBjb2xvcnMgb24gYW4gYXMtbmVlZGVkIGJhc2lzLiBUaGlzIGFlc3RoZXRpYyBjaGFuZ2UgaXMgYmFzZWQgb25cbi8vIFdlYktpdCdzIGRlZmF1bHQgc3R5bGVzLCBidXQgYXBwbGljYWJsZSB0byBhIHdpZGVyIHJhbmdlIG9mIGJyb3dzZXJzLiBJdHNcbi8vIHVzYWJpbGl0eSBhbmQgYWNjZXNzaWJpbGl0eSBzaG91bGQgYmUgdGFrZW4gaW50byBhY2NvdW50IHdpdGggYW55IGNoYW5nZS5cbi8vXG4vLyBFeGFtcGxlIHVzYWdlOiBjaGFuZ2UgdGhlIGRlZmF1bHQgYmx1ZSBib3JkZXIgYW5kIHNoYWRvdyB0byB3aGl0ZSBmb3IgYmV0dGVyXG4vLyBjb250cmFzdCBhZ2FpbnN0IGEgZGFyayBncmF5IGJhY2tncm91bmQuXG5AbWl4aW4gZm9ybS1jb250cm9sLWZvY3VzKCRjb2xvcjogJGlucHV0LWJvcmRlci1mb2N1cykge1xuICAkY29sb3ItcmdiYTogcmdiYShyZWQoJGNvbG9yKSwgZ3JlZW4oJGNvbG9yKSwgYmx1ZSgkY29sb3IpLCAuNik7XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIG91dGxpbmU6IDA7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCAkY29sb3ItcmdiYSk7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIFJlbGF0aXZlIHRleHQgc2l6ZSwgcGFkZGluZywgYW5kIGJvcmRlci1yYWRpaSBjaGFuZ2VzIGZvciBmb3JtIGNvbnRyb2xzLiBGb3Jcbi8vIGhvcml6b250YWwgc2l6aW5nLCB3cmFwIGNvbnRyb2xzIGluIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy4gYDxzZWxlY3Q+YFxuLy8gZWxlbWVudCBnZXRzIHNwZWNpYWwgbG92ZSBiZWNhdXNlIGl0J3Mgc3BlY2lhbCwgYW5kIHRoYXQncyBhIGZhY3QhXG4vLyBbY29udmVydGVyXSAkcGFyZW50IGhhY2tcbkBtaXhpbiBpbnB1dC1zaXplKCRwYXJlbnQsICRpbnB1dC1oZWlnaHQsICRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgc2VsZWN0I3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICB9XG5cbiAgdGV4dGFyZWEjeyRwYXJlbnR9LFxuICBzZWxlY3RbbXVsdGlwbGVdI3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4iLCIvLyBQcm9ncmVzcyBiYXJzXG5cbkBtaXhpbiBwcm9ncmVzcy1iYXItdmFyaWFudCgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gIC8vIERlcHJlY2F0ZWQgcGFyZW50IGNsYXNzIHJlcXVpcmVtZW50IGFzIG9mIHYzLjIuMFxuICAucHJvZ3Jlc3Mtc3RyaXBlZCAmIHtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkO1xuICB9XG59XG4iLCIvLyBUYWJsZXNcblxuQG1peGluIHRhYmxlLXJvdy12YXJpYW50KCRzdGF0ZSwgJGJhY2tncm91bmQpIHtcbiAgLy8gRXhhY3Qgc2VsZWN0b3JzIGJlbG93IHJlcXVpcmVkIHRvIG92ZXJyaWRlIGAudGFibGUtc3RyaXBlZGAgYW5kIHByZXZlbnRcbiAgLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cbiAgLnRhYmxlID4gdGhlYWQgPiB0cixcbiAgLnRhYmxlID4gdGJvZHkgPiB0cixcbiAgLnRhYmxlID4gdGZvb3QgPiB0ciB7XG4gICAgPiB0ZC4jeyRzdGF0ZX0sXG4gICAgPiB0aC4jeyRzdGF0ZX0sXG4gICAgJi4jeyRzdGF0ZX0gPiB0ZCxcbiAgICAmLiN7JHN0YXRlfSA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvdmVyIHN0YXRlcyBmb3IgYC50YWJsZS1ob3ZlcmBcbiAgLy8gTm90ZTogdGhpcyBpcyBub3QgYXZhaWxhYmxlIGZvciBjZWxscyBvciByb3dzIHdpdGhpbiBgdGhlYWRgIG9yIGB0Zm9vdGAuXG4gIC50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIge1xuICAgID4gdGQuI3skc3RhdGV9OmhvdmVyLFxuICAgID4gdGguI3skc3RhdGV9OmhvdmVyLFxuICAgICYuI3skc3RhdGV9OmhvdmVyID4gdGQsXG4gICAgJjpob3ZlciA+IC4jeyRzdGF0ZX0sXG4gICAgJi4jeyRzdGF0ZX06aG92ZXIgPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcblxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gYmctdmFyaWFudCgkcGFyZW50LCAkY29sb3IpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG4gIGEjeyRwYXJlbnR9OmhvdmVyLFxuICBhI3skcGFyZW50fTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgfVxufVxuIiwiLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gYm9yZGVyLXRvcC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuIiwiLy8gR3JhZGllbnRzXG5cblxuXG4vLyBIb3Jpem9udGFsIGdyYWRpZW50LCBmcm9tIGxlZnQgdG8gcmlnaHRcbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFNhZmFyaSA1LjEtNiwgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbi8vIFZlcnRpY2FsIGdyYWRpZW50LCBmcm9tIHRvcCB0byBib3R0b21cbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAjNTU1LCAkb3V0ZXItY29sb3I6ICMzMzMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cbiIsIi8vIENsZWFyZml4XG4vL1xuLy8gRm9yIG1vZGVybiBicm93c2Vyc1xuLy8gMS4gVGhlIHNwYWNlIGNvbnRlbnQgaXMgb25lIHdheSB0byBhdm9pZCBhbiBPcGVyYSBidWcgd2hlbiB0aGVcbi8vICAgIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgaXMgaW5jbHVkZWQgYW55d2hlcmUgZWxzZSBpbiB0aGUgZG9jdW1lbnQuXG4vLyAgICBPdGhlcndpc2UgaXQgY2F1c2VzIHNwYWNlIHRvIGFwcGVhciBhdCB0aGUgdG9wIGFuZCBib3R0b20gb2YgZWxlbWVudHNcbi8vICAgIHRoYXQgYXJlIGNsZWFyZml4ZWQuXG4vLyAyLiBUaGUgdXNlIG9mIGB0YWJsZWAgcmF0aGVyIHRoYW4gYGJsb2NrYCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB1c2luZ1xuLy8gICAgYDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxuLy9cbi8vIFNvdXJjZTogaHR0cDovL25pY29sYXNnYWxsYWdoZXIuY29tL21pY3JvLWNsZWFyZml4LWhhY2svXG5cbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiOyAvLyAxXG4gICAgZGlzcGxheTogdGFibGU7IC8vIDJcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuIiwiLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuXG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiIsIi8vIE5hdmJhciB2ZXJ0aWNhbCBhbGlnblxuLy9cbi8vIFZlcnRpY2FsbHkgY2VudGVyIGVsZW1lbnRzIGluIHRoZSBuYXZiYXIuXG4vLyBFeGFtcGxlOiBhbiBlbGVtZW50IGhhcyBhIGhlaWdodCBvZiAzMHB4LCBzbyB3cml0ZSBvdXQgYC5uYXZiYXItdmVydGljYWwtYWxpZ24oMzBweCk7YCB0byBjYWxjdWxhdGUgdGhlIGFwcHJvcHJpYXRlIHRvcCBtYXJnaW4uXG5cbkBtaXhpbiBuYXZiYXItdmVydGljYWwtYWxpZ24oJGVsZW1lbnQtaGVpZ2h0KSB7XG4gIG1hcmdpbi10b3A6ICgoJG5hdmJhci1oZWlnaHQgLSAkZWxlbWVudC1oZWlnaHQpIC8gMik7XG4gIG1hcmdpbi1ib3R0b206ICgoJG5hdmJhci1oZWlnaHQgLSAkZWxlbWVudC1oZWlnaHQpIC8gMik7XG59XG4iLCIvLyBGcmFtZXdvcmsgZ3JpZCBnZW5lcmF0aW9uXG4vL1xuLy8gVXNlZCBvbmx5IGJ5IEJvb3RzdHJhcCB0byBnZW5lcmF0ZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgZ3JpZCBjbGFzc2VzIGdpdmVuXG4vLyBhbnkgdmFsdWUgb2YgYCRncmlkLWNvbHVtbnNgLlxuXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGRlZmluZWQgcmVjdXJzaXZlbHkgaW4gTEVTUywgYnV0IFNhc3Mgc3VwcG9ydHMgcmVhbCBsb29wc1xuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRpOiAxLCAkbGlzdDogXCIuY29sLXhzLSN7JGl9LCAuY29sLXNtLSN7JGl9LCAuY29sLW1kLSN7JGl9LCAuY29sLWxnLSN7JGl9XCIpIHtcbiAgQGZvciAkaSBmcm9tICgxICsgMSkgdGhyb3VnaCAkZ3JpZC1jb2x1bW5zIHtcbiAgICAkbGlzdDogXCIjeyRsaXN0fSwgLmNvbC14cy0jeyRpfSwgLmNvbC1zbS0jeyRpfSwgLmNvbC1tZC0jeyRpfSwgLmNvbC1sZy0jeyRpfVwiO1xuICB9XG4gICN7JGxpc3R9IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gY29sbGFwc2luZyB3aGVuIGVtcHR5XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIC8vIElubmVyIGd1dHRlciB2aWEgcGFkZGluZ1xuICAgIHBhZGRpbmctbGVmdDogIGNlaWwoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpO1xuICB9XG59XG5cblxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBkZWZpbmVkIHJlY3Vyc2l2ZWx5IGluIExFU1MsIGJ1dCBTYXNzIHN1cHBvcnRzIHJlYWwgbG9vcHNcbkBtaXhpbiBmbG9hdC1ncmlkLWNvbHVtbnMoJGNsYXNzLCAkaTogMSwgJGxpc3Q6IFwiLmNvbC0jeyRjbGFzc30tI3skaX1cIikge1xuICBAZm9yICRpIGZyb20gKDEgKyAxKSB0aHJvdWdoICRncmlkLWNvbHVtbnMge1xuICAgICRsaXN0OiBcIiN7JGxpc3R9LCAuY29sLSN7JGNsYXNzfS0jeyRpfVwiO1xuICB9XG4gICN7JGxpc3R9IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG5cbkBtaXhpbiBjYWxjLWdyaWQtY29sdW1uKCRpbmRleCwgJGNsYXNzLCAkdHlwZSkge1xuICBAaWYgKCR0eXBlID09IHdpZHRoKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS0jeyRpbmRleH0ge1xuICAgICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRpbmRleCAvICRncmlkLWNvbHVtbnMpKTtcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBwdXNoKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdXNoLSN7JGluZGV4fSB7XG4gICAgICBsZWZ0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVzaCkgYW5kICgkaW5kZXggPT0gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1c2gtMCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1bGwpIGFuZCAoJGluZGV4ID4gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1bGwtI3skaW5kZXh9IHtcbiAgICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVsbCkgYW5kICgkaW5kZXggPT0gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1bGwtMCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBvZmZzZXQpIHtcbiAgICAuY29sLSN7JGNsYXNzfS1vZmZzZXQtI3skaW5kZXh9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgZGVmaW5lZCByZWN1cnNpdmVseSBpbiBMRVNTLCBidXQgU2FzcyBzdXBwb3J0cyByZWFsIGxvb3BzXG5AbWl4aW4gbG9vcC1ncmlkLWNvbHVtbnMoJGNvbHVtbnMsICRjbGFzcywgJHR5cGUpIHtcbiAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgQGluY2x1ZGUgY2FsYy1ncmlkLWNvbHVtbigkaSwgJGNsYXNzLCAkdHlwZSk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgZ3JpZCBmb3Igc3BlY2lmaWMgY2xhc3NcbkBtaXhpbiBtYWtlLWdyaWQoJGNsYXNzKSB7XG4gIEBpbmNsdWRlIGZsb2F0LWdyaWQtY29sdW1ucygkY2xhc3MpO1xuICBAaW5jbHVkZSBsb29wLWdyaWQtY29sdW1ucygkZ3JpZC1jb2x1bW5zLCAkY2xhc3MsIHdpZHRoKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBwdWxsKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBwdXNoKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBvZmZzZXQpO1xufVxuIiwiLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbi8vIENlbnRlcmVkIGNvbnRhaW5lciBlbGVtZW50XG5AbWl4aW4gY29udGFpbmVyLWZpeGVkKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICBmbG9vcigoJGd1dHRlciAvIDIpKTtcbiAgcGFkZGluZy1yaWdodDogY2VpbCgoJGd1dHRlciAvIDIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIENyZWF0ZXMgYSB3cmFwcGVyIGZvciBhIHNlcmllcyBvZiBjb2x1bW5zXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIG1hcmdpbi1sZWZ0OiAgY2VpbCgoJGd1dHRlciAvIC0yKSk7XG4gIG1hcmdpbi1yaWdodDogZmxvb3IoKCRndXR0ZXIgLyAtMikpO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cblxuLy8gR2VuZXJhdGUgdGhlIGV4dHJhIHNtYWxsIGNvbHVtbnNcbkBtaXhpbiBtYWtlLXhzLWNvbHVtbigkY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLW9mZnNldCgkY29sdW1ucykge1xuICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbn1cblxuLy8gR2VuZXJhdGUgdGhlIHNtYWxsIGNvbHVtbnNcbkBtaXhpbiBtYWtlLXNtLWNvbHVtbigkY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLW9mZnNldCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1wdXNoKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGUgdGhlIG1lZGl1bSBjb2x1bW5zXG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBsYXJnZSBjb2x1bW5zXG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG4iLCIkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyOiBmYWxzZSAhZGVmYXVsdDtcbi8vXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy89PSBDb2xvcnNcbi8vXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBCb290c3RyYXAuXG5cbiRncmF5LWJhc2U6ICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGdyYXktZGFya2VyOiAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAyMCUpICFkZWZhdWx0OyAgIC8vICMzMzNcbiRncmF5OiAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA5My41JSkgIWRlZmF1bHQ7IC8vICNlZWVcblxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNWNiODVjICFkZWZhdWx0O1xuJGJyYW5kLWluZm86ICAgICAgICAgICAgIzViYzBkZSAhZGVmYXVsdDtcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuXG5cbi8vPT0gU2NhZmZvbGRpbmdcbi8vXG4vLyMjIFNldHRpbmdzIGZvciBzb21lIG9mIHRoZSBtb3N0IGdsb2JhbCBzdHlsZXMuXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgYDxib2R5PmAuXG4kYm9keS1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgdGV4dCBjb2xvciBvbiBgPGJvZHk+YC5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIHRleHR1YWwgbGluayBjb2xvci5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBMaW5rIGhvdmVyIGNvbG9yIHNldCB2aWEgYGRhcmtlbigpYCBmdW5jdGlvbi5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbi8vKiogTGluayBob3ZlciBkZWNvcmF0aW9uLlxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogdW5kZXJsaW5lICFkZWZhdWx0O1xuXG5cbi8vPT0gVHlwb2dyYXBoeVxuLy9cbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgICBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYgIWRlZmF1bHQ7XG4vLyoqIERlZmF1bHQgbW9ub3NwYWNlIGZvbnRzIGZvciBgPGNvZGU+YCwgYDxrYmQ+YCwgYW5kIGA8cHJlPmAuXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7IC8vIH4xMnB4XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNikpICFkZWZhdWx0OyAvLyB+MzZweFxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4xNSkpICFkZWZhdWx0OyAvLyB+MzBweFxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjcpKSAhZGVmYXVsdDsgLy8gfjI0cHhcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDAuODUpKSAhZGVmYXVsdDsgLy8gfjEycHhcblxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAxLjQyODU3MTQyOSAhZGVmYXVsdDsgLy8gMjAvMTRcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXG4kbGluZS1oZWlnaHQtY29tcHV0ZWQ6ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSkpICFkZWZhdWx0OyAvLyB+MjBweFxuXG4vLyoqIEJ5IGRlZmF1bHQsIHRoaXMgaW5oZXJpdHMgZnJvbSB0aGUgYDxib2R5PmAuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuXG5cbi8vPT0gSWNvbm9ncmFwaHlcbi8vXG4vLyMjIFNwZWNpZnkgY3VzdG9tIGxvY2F0aW9uIGFuZCBmaWxlbmFtZSBvZiB0aGUgaW5jbHVkZWQgR2x5cGhpY29ucyBpY29uIGZvbnQuIFVzZWZ1bCBmb3IgdGhvc2UgaW5jbHVkaW5nIEJvb3RzdHJhcCB2aWEgQm93ZXIuXG5cbi8vKiogTG9hZCBmb250cyBmcm9tIHRoaXMgZGlyZWN0b3J5LlxuXG4vLyBbY29udmVydGVyXSBJZiAkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyIGlmIHVzZWQsIHByb3ZpZGUgcGF0aCByZWxhdGl2ZSB0byB0aGUgYXNzZXRzIGxvYWQgcGF0aC5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgYmVjYXVzZSBzb21lIGFzc2V0IGhlbHBlcnMsIHN1Y2ggYXMgU3Byb2NrZXRzLCBkbyBub3Qgd29yayB3aXRoIGZpbGUtcmVsYXRpdmUgcGF0aHMuXG4kaWNvbi1mb250LXBhdGg6IGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIFwiYm9vdHN0cmFwL1wiLCBcIi4uL2ZvbnRzL2Jvb3RzdHJhcC9cIikgIWRlZmF1bHQ7XG5cbi8vKiogRmlsZSBuYW1lIGZvciBhbGwgZm9udCBmaWxlcy5cbiRpY29uLWZvbnQtbmFtZTogICAgICAgICAgXCJnbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyXCIgIWRlZmF1bHQ7XG4vLyoqIEVsZW1lbnQgSUQgd2l0aGluIFNWRyBpY29uIGZpbGUuXG4kaWNvbi1mb250LXN2Zy1pZDogICAgICAgIFwiZ2x5cGhpY29uc19oYWxmbGluZ3NyZWd1bGFyXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuLy8jIyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuIFZhbHVlcyBiYXNlZCBvbiAxNHB4IHRleHQgYW5kIDEuNDI4IGxpbmUtaGVpZ2h0ICh+MjBweCB0byBzdGFydCkuXG5cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICA2cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgMTJweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgMTZweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgIDVweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgIDVweCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgICAgIDEuMzMzMzMzMyAhZGVmYXVsdDsgLy8gZXh0cmEgZGVjaW1hbHMgZm9yIFdpbiA4LjEgQ2hyb21lXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAzcHggIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIGNvbG9yIGZvciBhY3RpdmUgaXRlbXMgKGUuZy4sIG5hdnMgb3IgZHJvcGRvd25zKS5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgYmFja2dyb3VuZCBjb2xvciBmb3IgYWN0aXZlIGl0ZW1zIChlLmcuLCBuYXZzIG9yIGRyb3Bkb3ducykuXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vKiogV2lkdGggb2YgdGhlIGBib3JkZXJgIGZvciBnZW5lcmF0aW5nIGNhcmV0cyB0aGF0IGluZGljYXRlIGRyb3Bkb3ducy5cbiRjYXJldC13aWR0aC1iYXNlOiAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4vLyoqIENhcmV0cyBpbmNyZWFzZSBzbGlnaHRseSBpbiBzaXplIGZvciBsYXJnZXIgY29tcG9uZW50cy5cbiRjYXJldC13aWR0aC1sYXJnZTogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cblxuLy89PSBUYWJsZXNcbi8vXG4vLyMjIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuLy8qKiBQYWRkaW5nIGZvciBgPHRoPmBzIGFuZCBgPHRkPmBzLlxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgICA4cHggIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgZm9yIGNlbGxzIGluIGAudGFibGUtY29uZGVuc2VkYC5cbiR0YWJsZS1jb25kZW5zZWQtY2VsbC1wYWRkaW5nOiAgNXB4ICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgYmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBhbGwgdGFibGVzLlxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBgLnRhYmxlLXN0cmlwZWRgLlxuJHRhYmxlLWJnLWFjY2VudDogICAgICAgICAgICAgICAjZjlmOWY5ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIHVzZWQgZm9yIGAudGFibGUtaG92ZXJgLlxuJHRhYmxlLWJnLWhvdmVyOiAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHRhYmxlLWJnLWFjdGl2ZTogICAgICAgICAgICAgICAkdGFibGUtYmctaG92ZXIgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciB0YWJsZSBhbmQgY2VsbCBib3JkZXJzLlxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT0gQnV0dG9uc1xuLy9cbi8vIyMgRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbm9ybWFsICFkZWZhdWx0O1xuXG4kYnRuLWRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJGJ0bi1kZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tZGVmYXVsdC1ib3JkZXI6ICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRidG4tcHJpbWFyeS1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRidG4tcHJpbWFyeS1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXByaW1hcnktYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1zdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJGJ0bi1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgICAgZGFya2VuKCRidG4tc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLWluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1pbmZvLWJnOiAgICAgICAgICAgICAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG4kYnRuLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1pbmZvLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4td2FybmluZy1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbiRidG4td2FybmluZy1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXdhcm5pbmctYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1kYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tZGFuZ2VyLWJnOiAgICAgICAgICAgICAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1ib3JkZXI6ICAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG5cbi8vPT0gRm9ybXNcbi8vXG4vLyMjXG5cbi8vKiogYDxpbnB1dD5gIGJhY2tncm91bmQgY29sb3JcbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIGA8aW5wdXQgZGlzYWJsZWQ+YCBiYWNrZ3JvdW5kIGNvbG9yXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4vLyoqIFRleHQgY29sb3IgZm9yIGA8aW5wdXQ+YHNcbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5ICFkZWZhdWx0O1xuLy8qKiBgPGlucHV0PmAgYm9yZGVyIGNvbG9yXG4kaW5wdXQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4vLyBUT0RPOiBSZW5hbWUgYCRpbnB1dC1ib3JkZXItcmFkaXVzYCB0byBgJGlucHV0LWJvcmRlci1yYWRpdXMtYmFzZWAgaW4gdjRcbi8vKiogRGVmYXVsdCBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuLy8gVGhpcyBoYXMgbm8gZWZmZWN0IG9uIGA8c2VsZWN0PmBzIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiBgPHNlbGVjdD5gcyBpbiBDU1MuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuLy8qKiBMYXJnZSBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG4vLyoqIFNtYWxsIGAuZm9ybS1jb250cm9sYCBib3JkZXIgcmFkaXVzXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuLy8qKiBCb3JkZXIgY29sb3IgZm9yIGlucHV0cyBvbiBmb2N1c1xuJGlucHV0LWJvcmRlci1mb2N1czogICAgICAgICAgICAgIzY2YWZlOSAhZGVmYXVsdDtcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAgICAjOTk5ICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcbi8vKiogTGFyZ2UgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1sYXJnZTogICAgICAgICAgICAgKGNlaWwoJGZvbnQtc2l6ZS1sYXJnZSAqICRsaW5lLWhlaWdodC1sYXJnZSkgKyAoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuLy8qKiBTbWFsbCBgLmZvcm0tY29udHJvbGAgaGVpZ2h0XG4kaW5wdXQtaGVpZ2h0LXNtYWxsOiAgICAgICAgICAgICAoZmxvb3IoJGZvbnQtc2l6ZS1zbWFsbCAqICRsaW5lLWhlaWdodC1zbWFsbCkgKyAoJHBhZGRpbmctc21hbGwtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuXG4vLyoqIGAuZm9ybS1ncm91cGAgbWFyZ2luXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kbGVnZW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJGxlZ2VuZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0ZXh0dWFsIGlucHV0IGFkZG9uc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogQm9yZGVyIGNvbG9yIGZvciB0ZXh0dWFsIGlucHV0IGFkZG9uc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlciAhZGVmYXVsdDtcblxuLy8qKiBEaXNhYmxlZCBjdXJzb3IgZm9yIGZvcm0gY29udHJvbHMgYW5kIGJ1dHRvbnMuXG4kY3Vyc29yLWRpc2FibGVkOiAgICAgICAgICAgICAgICBub3QtYWxsb3dlZCAhZGVmYXVsdDtcblxuXG4vLz09IERyb3Bkb3duc1xuLy9cbi8vIyMgRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4vLyoqIEJhY2tncm91bmQgZm9yIHRoZSBkcm9wZG93biBtZW51LlxuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogRHJvcGRvd24gbWVudSBgYm9yZGVyLWNvbG9yYC5cbiRkcm9wZG93bi1ib3JkZXI6ICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjE1KSAhZGVmYXVsdDtcbi8vKiogRHJvcGRvd24gbWVudSBgYm9yZGVyLWNvbG9yYCAqKmZvciBJRTgqKi5cbiRkcm9wZG93bi1mYWxsYmFjay1ib3JkZXI6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyoqIERpdmlkZXIgY29sb3IgZm9yIGJldHdlZW4gZHJvcGRvd24gaXRlbXMuXG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyoqIERyb3Bkb3duIGxpbmsgdGV4dCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4vLyoqIEhvdmVyIGNvbG9yIGZvciBkcm9wZG93biBsaW5rcy5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkZ3JheS1kYXJrLCA1JSkgIWRlZmF1bHQ7XG4vLyoqIEhvdmVyIGJhY2tncm91bmQgZm9yIGRyb3Bkb3duIGxpbmtzLlxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuLy8qKiBBY3RpdmUgZHJvcGRvd24gbWVudSBpdGVtIHRleHQgY29sb3IuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vKiogQWN0aXZlIGRyb3Bkb3duIG1lbnUgaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbi8vKiogRGlzYWJsZWQgZHJvcGRvd24gbWVudSBpdGVtIGJhY2tncm91bmQgY29sb3IuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIGZvciBoZWFkZXJzIHdpdGhpbiBkcm9wZG93biBtZW51cy5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyoqIERlcHJlY2F0ZWQgYCRkcm9wZG93bi1jYXJldC1jb2xvcmAgYXMgb2YgdjMuMS4wXG4kZHJvcGRvd24tY2FyZXQtY29sb3I6ICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuXG5cbi8vLS0gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuLy9cbi8vIE5vdGU6IFRoZXNlIHZhcmlhYmxlcyBhcmUgbm90IGdlbmVyYXRlZCBpbnRvIHRoZSBDdXN0b21pemVyLlxuXG4kemluZGV4LW5hdmJhcjogICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC1uYXZiYXItZml4ZWQ6ICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2dyb3VuZDogIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuXG5cbi8vPT0gTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xuLy9cbi8vIyMgRGVmaW5lIHRoZSBicmVha3BvaW50cyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSwgYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14c2AgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXhzOiAgICAgICAgICAgICAgICAgIDQ4MHB4ICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXhzLW1pbmAgYXMgb2YgdjMuMi4wXG4kc2NyZWVuLXhzLW1pbjogICAgICAgICAgICAgICRzY3JlZW4teHMgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tcGhvbmVgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1waG9uZTogICAgICAgICAgICAgICAkc2NyZWVuLXhzLW1pbiAhZGVmYXVsdDtcblxuLy8gU21hbGwgc2NyZWVuIC8gdGFibGV0XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tc21gIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1zbTogICAgICAgICAgICAgICAgICA3NjhweCAhZGVmYXVsdDtcbiRzY3JlZW4tc20tbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1zbSAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi10YWJsZXRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi10YWJsZXQ6ICAgICAgICAgICAgICAkc2NyZWVuLXNtLW1pbiAhZGVmYXVsdDtcblxuLy8gTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3Bcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1tZGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDk5MnB4ICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1taW46ICAgICAgICAgICAgICAkc2NyZWVuLW1kICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1kZXNrdG9wOiAgICAgICAgICAgICAkc2NyZWVuLW1kLW1pbiAhZGVmYXVsdDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbGdgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZzogICAgICAgICAgICAgICAgICAxMjAwcHggIWRlZmF1bHQ7XG4kc2NyZWVuLWxnLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tbGcgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbGctZGVza3RvcGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWxnLWRlc2t0b3A6ICAgICAgICAgICRzY3JlZW4tbGctbWluICFkZWZhdWx0O1xuXG4vLyBTbyBtZWRpYSBxdWVyaWVzIGRvbid0IG92ZXJsYXAgd2hlbiByZXF1aXJlZCwgcHJvdmlkZSBhIG1heGltdW1cbiRzY3JlZW4teHMtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tc20tbWluIC0gMSkgIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLW1kLW1pbiAtIDEpICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1sZy1taW4gLSAxKSAhZGVmYXVsdDtcblxuXG4vLz09IEdyaWQgc3lzdGVtXG4vL1xuLy8jIyBEZWZpbmUgeW91ciBjdXN0b20gcmVzcG9uc2l2ZSBncmlkLlxuXG4vLyoqIE51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBncmlkLlxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGJldHdlZW4gY29sdW1ucy4gR2V0cyBkaXZpZGVkIGluIGhhbGYgZm9yIHRoZSBsZWZ0IGFuZCByaWdodC5cbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xuLy8gTmF2YmFyIGNvbGxhcHNlXG4vLyoqIFBvaW50IGF0IHdoaWNoIHRoZSBuYXZiYXIgYmVjb21lcyB1bmNvbGxhcHNlZC5cbiRncmlkLWZsb2F0LWJyZWFrcG9pbnQ6ICAgICAkc2NyZWVuLXNtLW1pbiAhZGVmYXVsdDtcbi8vKiogUG9pbnQgYXQgd2hpY2ggdGhlIG5hdmJhciBiZWdpbnMgY29sbGFwc2luZy5cbiRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4OiAoJGdyaWQtZmxvYXQtYnJlYWtwb2ludCAtIDEpICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29udGFpbmVyIHNpemVzXG4vL1xuLy8jIyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBTbWFsbCBzY3JlZW4gLyB0YWJsZXRcbiRjb250YWluZXItdGFibGV0OiAgICAgICAgICAgICAoNzIwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tc20tbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLXNtOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci10YWJsZXQgIWRlZmF1bHQ7XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4kY29udGFpbmVyLWRlc2t0b3A6ICAgICAgICAgICAgKDk0MHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLW1kLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1tZDogICAgICAgICAgICAgICAgICRjb250YWluZXItZGVza3RvcCAhZGVmYXVsdDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4kY29udGFpbmVyLWxhcmdlLWRlc2t0b3A6ICAgICAgKDExNDBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1sZy1taW5gIGFuZCB1cC5cbiRjb250YWluZXItbGc6ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLWxhcmdlLWRlc2t0b3AgIWRlZmF1bHQ7XG5cblxuLy89PSBOYXZiYXJcbi8vXG4vLyMjXG5cbi8vIEJhc2ljcyBvZiBhIG5hdmJhclxuJG5hdmJhci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA1MHB4ICFkZWZhdWx0O1xuJG5hdmJhci1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAkbGluZS1oZWlnaHQtY29tcHV0ZWQgIWRlZmF1bHQ7XG4kbmF2YmFyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDogICAgICAgIGZsb29yKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSkgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctdmVydGljYWw6ICAgICAgICAgICgoJG5hdmJhci1oZWlnaHQgLSAkbGluZS1oZWlnaHQtY29tcHV0ZWQpIC8gMikgIWRlZmF1bHQ7XG4kbmF2YmFyLWNvbGxhcHNlLW1heC1oZWlnaHQ6ICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICM3NzcgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICNmOGY4ZjggIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWRlZmF1bHQtYmcsIDYuNSUpICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgbGlua3NcbiRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAjNzc3ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAgIzU1NSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJnLCA2LjUlKSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAjY2NjICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc6ICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgYnJhbmQgbGFiZWxcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJyYW5kLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWJnOiAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgdG9nZ2xlXG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWhvdmVyLWJnOiAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtaWNvbi1iYXItYmc6ICAgICAgICAjODg4ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ib3JkZXItY29sb3I6ICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PT0gSW52ZXJ0ZWQgbmF2YmFyXG4vLyBSZXNldCBpbnZlcnRlZCBuYXZiYXIgYmFzaWNzXG4kbmF2YmFyLWludmVyc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktbGlnaHQsIDE1JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDEwJSkgIWRlZmF1bHQ7XG5cbi8vIEludmVydGVkIG5hdmJhciBsaW5rc1xuJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWxpZ2h0LCAxNSUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDEwJSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM0NDQgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1iZzogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgYnJhbmQgbGFiZWxcbiRuYXZiYXItaW52ZXJzZS1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgdG9nZ2xlXG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWhvdmVyLWJnOiAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWljb24tYmFyLWJnOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWJvcmRlci1jb2xvcjogICAgICAgICMzMzMgIWRlZmF1bHQ7XG5cblxuLy89PSBOYXZzXG4vL1xuLy8jI1xuXG4vLz09PSBTaGFyZWQgbmF2IHN0eWxlc1xuJG5hdi1saW5rLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMHB4IDE1cHggIWRlZmF1bHQ7XG4kbmF2LWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbiRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kbmF2LWRpc2FibGVkLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLz09IFRhYnNcbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkZ3JheSAhZGVmYXVsdDtcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAgI2RkZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJG5hdi10YWJzLWp1c3RpZmllZC1hY3RpdmUtbGluay1ib3JkZXItY29sb3I6ICAgICAkYm9keS1iZyAhZGVmYXVsdDtcblxuLy89PSBQaWxsc1xuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy89PSBQYWdpbmF0aW9uXG4vL1xuLy8jI1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI6ICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyOiAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09IFBhZ2VyXG4vL1xuLy8jI1xuXG4kcGFnZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1iZyAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJvcmRlciAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRwYWdlci1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kcGFnZXItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cbiRwYWdlci1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vPT0gSnVtYm90cm9uXG4vL1xuLy8jI1xuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWhlYWRpbmctY29sb3I6ICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1mb250LXNpemU6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS41KSkgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWhlYWRpbmctZm9udC1zaXplOiAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKSAhZGVmYXVsdDtcblxuXG4vLz09IEZvcm0gc3RhdGVzIGFuZCBhbGVydHNcbi8vXG4vLyMjIERlZmluZSBjb2xvcnMgZm9yIGZvcm0gZmVlZGJhY2sgc3RhdGVzIGFuZCwgYnkgZGVmYXVsdCwgYWxlcnRzLlxuXG4kc3RhdGUtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAgICAjM2M3NjNkICFkZWZhdWx0O1xuJHN0YXRlLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgICAgI2RmZjBkOCAhZGVmYXVsdDtcbiRzdGF0ZS1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1zdWNjZXNzLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1pbmZvLXRleHQ6ICAgICAgICAgICAgICAgICMzMTcwOGYgIWRlZmF1bHQ7XG4kc3RhdGUtaW5mby1iZzogICAgICAgICAgICAgICAgICAjZDllZGY3ICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLWluZm8tYmcsIC0xMCksIDclKSAhZGVmYXVsdDtcblxuJHN0YXRlLXdhcm5pbmctdGV4dDogICAgICAgICAgICAgIzhhNmQzYiAhZGVmYXVsdDtcbiRzdGF0ZS13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1ib3JkZXI6ICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtd2FybmluZy1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG4kc3RhdGUtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAgICAjYTk0NDQyICFkZWZhdWx0O1xuJHN0YXRlLWRhbmdlci1iZzogICAgICAgICAgICAgICAgI2YyZGVkZSAhZGVmYXVsdDtcbiRzdGF0ZS1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1kYW5nZXItYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuXG4vLz09IFRvb2x0aXBzXG4vL1xuLy8jI1xuXG4vLyoqIFRvb2x0aXAgbWF4IHdpZHRoXG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCB0ZXh0IGNvbG9yXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIGJhY2tncm91bmQgY29sb3JcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcblxuLy8qKiBUb29sdGlwIGFycm93IHdpZHRoXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICA1cHggIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgYXJyb3cgY29sb3JcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG5cbi8vPT0gUG9wb3ZlcnNcbi8vXG4vLyMjXG5cbi8vKiogUG9wb3ZlciBib2R5IGJhY2tncm91bmQgY29sb3JcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBtYXhpbXVtIHdpZHRoXG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGJvcmRlciBjb2xvclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBmYWxsYmFjayBib3JkZXIgY29sb3JcbiRwb3BvdmVyLWZhbGxiYWNrLWJvcmRlci1jb2xvcjogICAgICAgI2NjYyAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIHRpdGxlIGJhY2tncm91bmQgY29sb3JcbiRwb3BvdmVyLXRpdGxlLWJnOiAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciBhcnJvdyB3aWR0aFxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGFycm93IGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgd2lkdGhcbiRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoOiAgICAgICAgICAgKCRwb3BvdmVyLWFycm93LXdpZHRoICsgMSkgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgY29sb3JcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgICAgZmFkZV9pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIDAuMDUpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IGZhbGxiYWNrIGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjogIGRhcmtlbigkcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3IsIDIwJSkgIWRlZmF1bHQ7XG5cblxuLy89PSBMYWJlbHNcbi8vXG4vLyMjXG5cbi8vKiogRGVmYXVsdCBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtZGVmYXVsdC1iZzogICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogUHJpbWFyeSBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtcHJpbWFyeS1iZzogICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbi8vKiogU3VjY2VzcyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtc3VjY2Vzcy1iZzogICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbi8vKiogSW5mbyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtaW5mby1iZzogICAgICAgICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcbi8vKiogV2FybmluZyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtd2FybmluZy1iZzogICAgICAgICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbi8vKiogRGFuZ2VyIGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1kYW5nZXItYmc6ICAgICAgICAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBsYWJlbCB0ZXh0IGNvbG9yXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBEZWZhdWx0IHRleHQgY29sb3Igb2YgYSBsaW5rZWQgbGFiZWxcbiRsYWJlbC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XG5cblxuLy89PSBNb2RhbHNcbi8vXG4vLyMjXG5cbi8vKiogUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyoqIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgdGl0bGVcbiRtb2RhbC10aXRsZS1wYWRkaW5nOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIHRpdGxlIGxpbmUtaGVpZ2h0XG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIG1vZGFsIGNvbnRlbnQgYXJlYVxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBjb250ZW50IGJvcmRlciBjb2xvclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgY29udGVudCBib3JkZXIgY29sb3IgKipmb3IgSUU4KipcbiRtb2RhbC1jb250ZW50LWZhbGxiYWNrLWJvcmRlci1jb2xvcjogICAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuLy8qKiBNb2RhbCBiYWNrZHJvcCBiYWNrZ3JvdW5kIGNvbG9yXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBiYWNrZHJvcCBvcGFjaXR5XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAuNSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgaGVhZGVyIGJvcmRlciBjb2xvclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgI2U1ZTVlNSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgZm9vdGVyIGJvcmRlciBjb2xvclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgIDkwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgNjAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuXG4vLz09IEFsZXJ0c1xuLy9cbi8vIyMgRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgYm9sZCAhZGVmYXVsdDtcblxuJGFsZXJ0LXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYmcgIWRlZmF1bHQ7XG4kYWxlcnQtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtaW5mby1iZzogICAgICAgICAgICAgICAkc3RhdGUtaW5mby1iZyAhZGVmYXVsdDtcbiRhbGVydC1pbmZvLXRleHQ6ICAgICAgICAgICAgICRzdGF0ZS1pbmZvLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtaW5mby1ib3JkZXI6ICAgICAgICAgICAkc3RhdGUtaW5mby1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC13YXJuaW5nLWJnOiAgICAgICAgICAgICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xuJGFsZXJ0LXdhcm5pbmctdGV4dDogICAgICAgICAgJHN0YXRlLXdhcm5pbmctdGV4dCAhZGVmYXVsdDtcbiRhbGVydC13YXJuaW5nLWJvcmRlcjogICAgICAgICRzdGF0ZS13YXJuaW5nLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LWRhbmdlci1iZzogICAgICAgICAgICAgJHN0YXRlLWRhbmdlci1iZyAhZGVmYXVsdDtcbiRhbGVydC1kYW5nZXItdGV4dDogICAgICAgICAgICRzdGF0ZS1kYW5nZXItdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1kYW5nZXItYm9yZGVyOiAgICAgICAgICRzdGF0ZS1kYW5nZXItYm9yZGVyICFkZWZhdWx0O1xuXG5cbi8vPT0gUHJvZ3Jlc3MgYmFyc1xuLy9cbi8vIyNcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB3aG9sZSBwcm9ncmVzcyBjb21wb25lbnRcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4vLyoqIFByb2dyZXNzIGJhciB0ZXh0IGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBWYXJpYWJsZSBmb3Igc2V0dGluZyByb3VuZGVkIGNvcm5lcnMgb24gcHJvZ3Jlc3MgYmFyLlxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIFN1Y2Nlc3MgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6ICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbi8vKiogV2FybmluZyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItd2FybmluZy1iZzogICAgICRicmFuZC13YXJuaW5nICFkZWZhdWx0O1xuLy8qKiBEYW5nZXIgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuLy8qKiBJbmZvIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1pbmZvLWJnOiAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG5cblxuLy89PSBMaXN0IGdyb3VwXG4vL1xuLy8jI1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb24gYC5saXN0LWdyb3VwLWl0ZW1gXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIGAubGlzdC1ncm91cC1pdGVtYCBib3JkZXIgY29sb3JcbiRsaXN0LWdyb3VwLWJvcmRlcjogICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbi8vKiogTGlzdCBncm91cCBib3JkZXIgcmFkaXVzXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBzaW5nbGUgbGlzdCBpdGVtcyBvbiBob3ZlclxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8qKiBCb3JkZXIgY29sb3Igb2YgYWN0aXZlIGxpc3QgZWxlbWVudHNcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI6ICAgICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIGZvciBjb250ZW50IHdpdGhpbiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLXRleHQtY29sb3I6ICBsaWdodGVuKCRsaXN0LWdyb3VwLWFjdGl2ZS1iZywgNDAlKSAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIG9mIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3IgZm9yIGNvbnRlbnQgd2l0aGluIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLXRleHQtY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1saW5rLWNvbG9yOiAgICAgICAgICM1NTUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1saW5rLWhvdmVyLWNvbG9yOiAgICRsaXN0LWdyb3VwLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1saW5rLWhlYWRpbmctY29sb3I6ICMzMzMgIWRlZmF1bHQ7XG5cblxuLy89PSBQYW5lbHNcbi8vXG4vLyMjXG5cbiRwYW5lbC1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFuZWwtYm9keS1wYWRkaW5nOiAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJHBhbmVsLWhlYWRpbmctcGFkZGluZzogICAgICAgMTBweCAxNXB4ICFkZWZhdWx0O1xuJHBhbmVsLWZvb3Rlci1wYWRkaW5nOiAgICAgICAgJHBhbmVsLWhlYWRpbmctcGFkZGluZyAhZGVmYXVsdDtcbiRwYW5lbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciBlbGVtZW50cyB3aXRoaW4gcGFuZWxzXG4kcGFuZWwtaW5uZXItYm9yZGVyOiAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJHBhbmVsLWZvb3Rlci1iZzogICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHBhbmVsLWRlZmF1bHQtdGV4dDogICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRwYW5lbC1kZWZhdWx0LWJvcmRlcjogICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kcGFuZWwtcHJpbWFyeS10ZXh0OiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhbmVsLXByaW1hcnktYm9yZGVyOiAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kcGFuZWwtcHJpbWFyeS1oZWFkaW5nLWJnOiAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhbmVsLXN1Y2Nlc3MtdGV4dDogICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1zdWNjZXNzLWJvcmRlcjogICAgICAgICRzdGF0ZS1zdWNjZXNzLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1zdWNjZXNzLWhlYWRpbmctYmc6ICAgICRzdGF0ZS1zdWNjZXNzLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtaW5mby10ZXh0OiAgICAgICAgICAgICAkc3RhdGUtaW5mby10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLWluZm8tYm9yZGVyOiAgICAgICAgICAgJHN0YXRlLWluZm8tYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLWluZm8taGVhZGluZy1iZzogICAgICAgJHN0YXRlLWluZm8tYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC13YXJuaW5nLXRleHQ6ICAgICAgICAgICRzdGF0ZS13YXJuaW5nLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtd2FybmluZy1ib3JkZXI6ICAgICAgICAkc3RhdGUtd2FybmluZy1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtd2FybmluZy1oZWFkaW5nLWJnOiAgICAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLWRhbmdlci10ZXh0OiAgICAgICAgICAgJHN0YXRlLWRhbmdlci10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLWRhbmdlci1ib3JkZXI6ICAgICAgICAgJHN0YXRlLWRhbmdlci1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtZGFuZ2VyLWhlYWRpbmctYmc6ICAgICAkc3RhdGUtZGFuZ2VyLWJnICFkZWZhdWx0O1xuXG5cbi8vPT0gVGh1bWJuYWlsc1xuLy9cbi8vIyNcblxuLy8qKiBQYWRkaW5nIGFyb3VuZCB0aGUgdGh1bWJuYWlsIGltYWdlXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBiYWNrZ3JvdW5kIGNvbG9yXG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJvcmRlciBjb2xvclxuJHRodW1ibmFpbC1ib3JkZXI6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJvcmRlciByYWRpdXNcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQ3VzdG9tIHRleHQgY29sb3IgZm9yIHRodW1ibmFpbCBjYXB0aW9uc1xuJHRodW1ibmFpbC1jYXB0aW9uLWNvbG9yOiAgICAgJHRleHQtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgYXJvdW5kIHRoZSB0aHVtYm5haWwgY2FwdGlvblxuJHRodW1ibmFpbC1jYXB0aW9uLXBhZGRpbmc6ICAgOXB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gV2VsbHNcbi8vXG4vLyMjXG5cbiR3ZWxsLWJnOiAgICAgICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kd2VsbC1ib3JkZXI6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHdlbGwtYmcsIDclKSAhZGVmYXVsdDtcblxuXG4vLz09IEJhZGdlc1xuLy9cbi8vIyNcblxuJGJhZGdlLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogTGlua2VkIGJhZGdlIHRleHQgY29sb3Igb24gaG92ZXJcbiRiYWRnZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYmFkZ2UtYmc6ICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBCYWRnZSB0ZXh0IGNvbG9yIGluIGFjdGl2ZSBuYXYgbGlua1xuJGJhZGdlLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEJhZGdlIGJhY2tncm91bmQgY29sb3IgaW4gYWN0aXZlIG5hdiBsaW5rXG4kYmFkZ2UtYWN0aXZlLWJnOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGJhZGdlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgMSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBCcmVhZGNydW1ic1xuLy9cbi8vIyNcblxuJGJyZWFkY3J1bWItcGFkZGluZy12ZXJ0aWNhbDogICA4cHggIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLWhvcml6b250YWw6IDE1cHggIWRlZmF1bHQ7XG4vLyoqIEJyZWFkY3J1bWIgYmFja2dyb3VuZCBjb2xvclxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBCcmVhZGNydW1iIHRleHQgY29sb3JcbiRicmVhZGNydW1iLWNvbG9yOiAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBvZiBjdXJyZW50IHBhZ2UgaW4gdGhlIGJyZWFkY3J1bWJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIFRleHR1YWwgc2VwYXJhdG9yIGZvciBiZXR3ZWVuIGJyZWFkY3J1bWIgZWxlbWVudHNcbiRicmVhZGNydW1iLXNlcGFyYXRvcjogICAgICAgICAgXCIvXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDYXJvdXNlbFxuLy9cbi8vIyNcblxuJGNhcm91c2VsLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKDAsMCwwLC42KSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gQ2xvc2Vcbi8vXG4vLyMjXG5cbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgMCAxcHggMCAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29kZVxuLy9cbi8vIyNcblxuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgI2M3MjU0ZSAhZGVmYXVsdDtcbiRjb2RlLWJnOiAgICAgICAgICAgICAgICAgICAgICNmOWYyZjQgIWRlZmF1bHQ7XG5cbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuXG4kcHJlLWJnOiAgICAgICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRwcmUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLz09IFR5cGVcbi8vXG4vLyMjXG5cbi8vKiogSG9yaXpvbnRhbCBvZmZzZXQgZm9yIGZvcm1zIGFuZCBsaXN0cy5cbiRjb21wb25lbnQtb2Zmc2V0LWhvcml6b250YWw6IDE4MHB4ICFkZWZhdWx0O1xuLy8qKiBUZXh0IG11dGVkIGNvbG9yXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQWJicmV2aWF0aW9ucyBhbmQgYWNyb255bXMgYm9yZGVyIGNvbG9yXG4kYWJici1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogSGVhZGluZ3Mgc21hbGwgY29sb3JcbiRoZWFkaW5ncy1zbWFsbC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCbG9ja3F1b3RlIHNtYWxsIGNvbG9yXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBmb250IHNpemVcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBib3JkZXIgY29sb3JcbiRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjogICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFBhZ2UgaGVhZGVyIGJvcmRlciBjb2xvclxuJHBhZ2UtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogV2lkdGggb2YgaG9yaXpvbnRhbCBkZXNjcmlwdGlvbiBsaXN0IHRpdGxlc1xuJGRsLWhvcml6b250YWwtb2Zmc2V0OiAgICAgICAgJGNvbXBvbmVudC1vZmZzZXQtaG9yaXpvbnRhbCAhZGVmYXVsdDtcbi8vKiogUG9pbnQgYXQgd2hpY2ggLmRsLWhvcml6b250YWwgYmVjb21lcyBob3Jpem9udGFsXG4kZGwtaG9yaXpvbnRhbC1icmVha3BvaW50OiAgICAkZ3JpZC1mbG9hdC1icmVha3BvaW50ICFkZWZhdWx0O1xuLy8qKiBIb3Jpem9udGFsIGxpbmUgY29sb3IuXG4kaHItYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuIiwiLy9cbi8vIEJ1dHRvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBzdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIEZvciBpbnB1dC5idG5cbiAgZm9udC13ZWlnaHQ6ICRidG4tZm9udC13ZWlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLy8gUmVzZXQgdW51c3VhbCBGaXJlZm94LW9uLUFuZHJvaWQgZGVmYXVsdCBzdHlsZTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvaXNzdWVzLzIxNFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsLCAkZm9udC1zaXplLWJhc2UsICRsaW5lLWhlaWdodC1iYXNlLCAkYnRuLWJvcmRlci1yYWRpdXMtYmFzZSk7XG4gIEBpbmNsdWRlIHVzZXItc2VsZWN0KG5vbmUpO1xuXG4gICYsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIEBpbmNsdWRlIHRhYi1mb2N1cztcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICBjb2xvcjogJGJ0bi1kZWZhdWx0LWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuICB9XG5cbiAgJi5kaXNhYmxlZCxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgQGluY2x1ZGUgb3BhY2l0eSguNjUpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYgdG8gYS5idG5cbn1cblxuYS5idG4ge1xuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vIEZ1dHVyZS1wcm9vZiBkaXNhYmxpbmcgb2YgY2xpY2tzIG9uIGA8YT5gIGVsZW1lbnRzXG4gIH1cbn1cblxuXG4vLyBBbHRlcm5hdGUgYnV0dG9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1kZWZhdWx0IHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1kZWZhdWx0LWNvbG9yLCAkYnRuLWRlZmF1bHQtYmcsICRidG4tZGVmYXVsdC1ib3JkZXIpO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1wcmltYXJ5LWNvbG9yLCAkYnRuLXByaW1hcnktYmcsICRidG4tcHJpbWFyeS1ib3JkZXIpO1xufVxuLy8gU3VjY2VzcyBhcHBlYXJzIGFzIGdyZWVuXG4uYnRuLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXN1Y2Nlc3MtY29sb3IsICRidG4tc3VjY2Vzcy1iZywgJGJ0bi1zdWNjZXNzLWJvcmRlcik7XG59XG4vLyBJbmZvIGFwcGVhcnMgYXMgYmx1ZS1ncmVlblxuLmJ0bi1pbmZvIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1pbmZvLWNvbG9yLCAkYnRuLWluZm8tYmcsICRidG4taW5mby1ib3JkZXIpO1xufVxuLy8gV2FybmluZyBhcHBlYXJzIGFzIG9yYW5nZVxuLmJ0bi13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi13YXJuaW5nLWNvbG9yLCAkYnRuLXdhcm5pbmctYmcsICRidG4td2FybmluZy1ib3JkZXIpO1xufVxuLy8gRGFuZ2VyIGFuZCBlcnJvciBhcHBlYXIgYXMgcmVkXG4uYnRuLWRhbmdlciB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tZGFuZ2VyLWNvbG9yLCAkYnRuLWRhbmdlci1iZywgJGJ0bi1kYW5nZXItYm9yZGVyKTtcbn1cblxuXG4vLyBMaW5rIGJ1dHRvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWFrZSBhIGJ1dHRvbiBsb29rIGFuZCBiZWhhdmUgbGlrZSBhIGxpbmtcbi5idG4tbGluayB7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMDtcblxuICAmLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1ob3Zlci1kZWNvcmF0aW9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQnV0dG9uIFNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWxnIHtcbiAgLy8gbGluZS1oZWlnaHQ6IGVuc3VyZSBldmVuLW51bWJlcmVkIGhlaWdodCBvZiBidXR0b24gbmV4dCB0byBsYXJnZSBpbnB1dFxuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1sYXJnZSwgJGxpbmUtaGVpZ2h0LWxhcmdlLCAkYnRuLWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xufVxuLmJ0bi1zbSB7XG4gIC8vIGxpbmUtaGVpZ2h0OiBlbnN1cmUgcHJvcGVyIGhlaWdodCBvZiBidXR0b24gbmV4dCB0byBzbWFsbCBpbnB1dFxuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkYnRuLWJvcmRlci1yYWRpdXMtc21hbGwpO1xufVxuLmJ0bi14cyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXhzLXZlcnRpY2FsLCAkcGFkZGluZy14cy1ob3Jpem9udGFsLCAkZm9udC1zaXplLXNtYWxsLCAkbGluZS1oZWlnaHQtc21hbGwsICRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG59XG5cblxuLy8gQmxvY2sgYnV0dG9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBWZXJ0aWNhbGx5IHNwYWNlIG91dCBtdWx0aXBsZSBibG9jayBidXR0b25zXG4uYnRuLWJsb2NrICsgLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLy8gU3BlY2lmaWNpdHkgb3ZlcnJpZGVzXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XG4gICYuYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLy9cbi8vIEJ1dHRvbiBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1ha2UgdGhlIGRpdiBiZWhhdmUgbGlrZSBhIGJ1dHRvblxuLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLy8gbWF0Y2ggLmJ0biBhbGlnbm1lbnQgZ2l2ZW4gZm9udC1zaXplIGhhY2sgYWJvdmVcbiAgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLy8gQnJpbmcgdGhlIFwiYWN0aXZlXCIgYnV0dG9uIHRvIHRoZSBmcm9udFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSxcbiAgICAmLmFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQcmV2ZW50IGRvdWJsZSBib3JkZXJzIHdoZW4gYnV0dG9ucyBhcmUgbmV4dCB0byBlYWNoIG90aGVyXG4uYnRuLWdyb3VwIHtcbiAgLmJ0biArIC5idG4sXG4gIC5idG4gKyAuYnRuLWdyb3VwLFxuICAuYnRuLWdyb3VwICsgLmJ0bixcbiAgLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG59XG5cbi8vIE9wdGlvbmFsOiBHcm91cCBtdWx0aXBsZSBidXR0b24gZ3JvdXBzIHRvZ2V0aGVyIGZvciBhIHRvb2xiYXJcbi5idG4tdG9vbGJhciB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4OyAvLyBPZmZzZXQgdGhlIGZpcnN0IGNoaWxkJ3MgbWFyZ2luXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gIC5idG4sXG4gIC5idG4tZ3JvdXAsXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAsXG4gID4gLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi5idG4tZ3JvdXAgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gU2V0IGNvcm5lcnMgaW5kaXZpZHVhbCBiZWNhdXNlIHNvbWV0aW1lcyBhIHNpbmdsZSBidXR0b24gY2FuIGJlIGluIGEgLmJ0bi1ncm91cCBhbmQgd2UgbmVlZCA6Zmlyc3QtY2hpbGQgYW5kIDpsYXN0LWNoaWxkIHRvIGJvdGggbWF0Y2hcbi5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gICY6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoMCk7XG4gIH1cbn1cbi8vIE5lZWQgLmRyb3Bkb3duLXRvZ2dsZSBzaW5jZSA6bGFzdC1jaGlsZCBkb2Vzbid0IGFwcGx5LCBnaXZlbiB0aGF0IGEgLmRyb3Bkb3duLW1lbnUgaXMgdXNlZCBpbW1lZGlhdGVseSBhZnRlciBpdFxuLmJ0bi1ncm91cCA+IC5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuXG4vLyBDdXN0b20gZWRpdHMgZm9yIGluY2x1ZGluZyBidG4tZ3JvdXBzIHdpdGhpbiBidG4tZ3JvdXBzICh1c2VmdWwgZm9yIGluY2x1ZGluZyBkcm9wZG93biBidXR0b25zIHdpdGhpbiBhIGJ0bi1ncm91cClcbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgPiAuYnRuOmxhc3QtY2hpbGQsXG4gID4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbiAgfVxufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoMCk7XG59XG5cbi8vIE9uIGFjdGl2ZSBhbmQgb3BlbiwgZG9uJ3Qgc2hvdyBvdXRsaW5lXG4uYnRuLWdyb3VwIC5kcm9wZG93bi10b2dnbGU6YWN0aXZlLFxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICBvdXRsaW5lOiAwO1xufVxuXG5cbi8vIFNpemluZ1xuLy9cbi8vIFJlbWl4IHRoZSBkZWZhdWx0IGJ1dHRvbiBzaXppbmcgY2xhc3NlcyBpbnRvIG5ldyBvbmVzIGZvciBlYXNpZXIgbWFuaXB1bGF0aW9uLlxuXG4uYnRuLWdyb3VwLXhzID4gLmJ0biB7IEBleHRlbmQgLmJ0bi14czsgfVxuLmJ0bi1ncm91cC1zbSA+IC5idG4geyBAZXh0ZW5kIC5idG4tc207IH1cbi5idG4tZ3JvdXAtbGcgPiAuYnRuIHsgQGV4dGVuZCAuYnRuLWxnOyB9XG5cblxuLy8gU3BsaXQgYnV0dG9uIGRyb3Bkb3duc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBHaXZlIHRoZSBsaW5lIGJldHdlZW4gYnV0dG9ucyBzb21lIGRlcHRoXG4uYnRuLWdyb3VwID4gLmJ0biArIC5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmJ0bi1ncm91cCA+IC5idG4tbGcgKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4vLyBUaGUgY2xpY2thYmxlIGJ1dHRvbiBmb3IgdG9nZ2xpbmcgdGhlIG1lbnVcbi8vIFJlbW92ZSB0aGUgZ3JhZGllbnQgYW5kIHNldCB0aGUgc2FtZSBpbnNldCBzaGFkb3cgYXMgdGhlIDphY3RpdmUgc3RhdGVcbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KSk7XG5cbiAgLy8gU2hvdyBubyBzaGFkb3cgZm9yIGAuYnRuLWxpbmtgIHNpbmNlIGl0IGhhcyBubyBvdGhlciBidXR0b24gc3R5bGVzLlxuICAmLmJ0bi1saW5rIHtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cblxuLy8gUmVwb3NpdGlvbiB0aGUgY2FyZXRcbi5idG4gLmNhcmV0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4vLyBDYXJldHMgaW4gb3RoZXIgYnV0dG9uIHNpemVzXG4uYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogJGNhcmV0LXdpZHRoLWxhcmdlICRjYXJldC13aWR0aC1sYXJnZSAwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuLy8gVXBzaWRlIGRvd24gY2FyZXRzIGZvciAuZHJvcHVwXG4uZHJvcHVwIC5idG4tbGcgLmNhcmV0IHtcbiAgYm9yZGVyLXdpZHRoOiAwICRjYXJldC13aWR0aC1sYXJnZSAkY2FyZXQtd2lkdGgtbGFyZ2U7XG59XG5cblxuLy8gVmVydGljYWwgYnV0dG9uIGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAsXG4gID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIENsZWFyIGZsb2F0cyBzbyBkcm9wZG93biBtZW51cyBjYW4gYmUgcHJvcGVybHkgcGxhY2VkXG4gID4gLmJ0bi1ncm91cCB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXg7XG4gICAgPiAuYnRuIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gID4gLmJ0biArIC5idG4sXG4gID4gLmJ0biArIC5idG4tZ3JvdXAsXG4gID4gLmJ0bi1ncm91cCArIC5idG4sXG4gID4gLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4ge1xuICAmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgJjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkYnRuLWJvcmRlci1yYWRpdXMtYmFzZSk7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoMCk7XG4gIH1cbiAgJjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygkYnRuLWJvcmRlci1yYWRpdXMtYmFzZSk7XG4gIH1cbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICA+IC5idG46bGFzdC1jaGlsZCxcbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbiAgfVxufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbn1cblxuXG4vLyBKdXN0aWZpZWQgYnV0dG9uIGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWdyb3VwLWp1c3RpZmllZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDElO1xuICB9XG4gID4gLmJ0bi1ncm91cCAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gID4gLmJ0bi1ncm91cCAuZHJvcGRvd24tbWVudSB7XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuXG5cbi8vIENoZWNrYm94IGFuZCByYWRpbyBvcHRpb25zXG4vL1xuLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgYnJvd3NlcidzIGZvcm0gdmFsaWRhdGlvbiBmZWVkYmFjaywgcG93ZXJlZCBieSB0aGVcbi8vIGByZXF1aXJlZGAgYXR0cmlidXRlLCB3ZSBoYXZlIHRvIFwiaGlkZVwiIHRoZSBpbnB1dHMgdmlhIGBjbGlwYC4gV2UgY2Fubm90IHVzZVxuLy8gYGRpc3BsYXk6IG5vbmU7YCBvciBgdmlzaWJpbGl0eTogaGlkZGVuO2AgYXMgdGhhdCBhbHNvIGhpZGVzIHRoZSBwb3BvdmVyLlxuLy8gU2ltcGx5IHZpc3VhbGx5IGhpZGluZyB0aGUgaW5wdXRzIHZpYSBgb3BhY2l0eWAgd291bGQgbGVhdmUgdGhlbSBjbGlja2FibGUgaW5cbi8vIGNlcnRhaW4gY2FzZXMgd2hpY2ggaXMgcHJldmVudGVkIGJ5IHVzaW5nIGBjbGlwYCBhbmQgYHBvaW50ZXItZXZlbnRzYC5cbi8vIFRoaXMgd2F5LCB3ZSBlbnN1cmUgYSBET00gZWxlbWVudCBpcyB2aXNpYmxlIHRvIHBvc2l0aW9uIHRoZSBwb3BvdmVyIGZyb20uXG4vL1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzEyNzk0IGFuZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTQ1NTkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbltkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0ge1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIENsb3NlIGljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS41KTtcbiAgZm9udC13ZWlnaHQ6ICRjbG9zZS1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAkY2xvc2UtY29sb3I7XG4gIHRleHQtc2hhZG93OiAkY2xvc2UtdGV4dC1zaGFkb3c7XG4gIEBpbmNsdWRlIG9wYWNpdHkoLjIpO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkY2xvc2UtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAaW5jbHVkZSBvcGFjaXR5KC41KTtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBidXR0b24mIHRvIGJ1dHRvbi5jbG9zZVxufVxuXG4vLyBBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4vLyBpT1MgcmVxdWlyZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGluc3RlYWQgb2YgYW4gYW5jaG9yIHRhZy5cbi8vIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNTYWZhcmlfTW9iaWxlXG5idXR0b24uY2xvc2Uge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbiIsIi8vXG4vLyBMaXN0IGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4vL1xuLy8gRWFzaWx5IHVzYWJsZSBvbiA8dWw+LCA8b2w+LCBvciA8ZGl2Pi5cblxuLmxpc3QtZ3JvdXAge1xuICAvLyBObyBuZWVkIHRvIHNldCBsaXN0LXN0eWxlOiBub25lOyBzaW5jZSAubGlzdC1ncm91cC1pdGVtIGlzIGJsb2NrIGxldmVsXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gcmVzZXQgcGFkZGluZyBiZWNhdXNlIHVsIGFuZCBvbFxufVxuXG5cbi8vIEluZGl2aWR1YWwgbGlzdCBpdGVtc1xuLy9cbi8vIFVzZSBvbiBgbGlgcyBvciBgZGl2YHMgd2l0aGluIHRoZSBgLmxpc3QtZ3JvdXBgIHBhcmVudC5cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgLy8gUGxhY2UgdGhlIGJvcmRlciBvbiB0aGUgbGlzdCBpdGVtcyBhbmQgbmVnYXRpdmUgbWFyZ2luIHVwIGZvciBiZXR0ZXIgc3R5bGluZ1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpc3QtZ3JvdXAtYm9yZGVyO1xuXG4gIC8vIFJvdW5kIHRoZSBmaXJzdCBhbmQgbGFzdCBpdGVtc1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbn1cblxuXG4vLyBJbnRlcmFjdGl2ZSBsaXN0IGl0ZW1zXG4vL1xuLy8gVXNlIGFuY2hvciBvciBidXR0b24gZWxlbWVudHMgaW5zdGVhZCBvZiBgbGlgcyBvciBgZGl2YHMgdG8gY3JlYXRlIGludGVyYWN0aXZlIGl0ZW1zLlxuLy8gSW5jbHVkZXMgYW4gZXh0cmEgYC5hY3RpdmVgIG1vZGlmaWVyIGNsYXNzIGZvciBzaG93aW5nIHNlbGVjdGVkIGl0ZW1zLlxuXG5hLmxpc3QtZ3JvdXAtaXRlbSxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBjb2xvcjogJGxpc3QtZ3JvdXAtbGluay1jb2xvcjtcblxuICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1saW5rLWhlYWRpbmctY29sb3I7XG4gIH1cblxuICAvLyBIb3ZlciBzdGF0ZVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWxpbmstaG92ZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtaG92ZXItYmc7XG4gIH1cbn1cblxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgLy8gRGlzYWJsZWQgc3RhdGVcbiAgJi5kaXNhYmxlZCxcbiAgJi5kaXNhYmxlZDpob3ZlcixcbiAgJi5kaXNhYmxlZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yO1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcblxuICAgIC8vIEZvcmNlIGNvbG9yIHRvIGluaGVyaXQgZm9yIGN1c3RvbSBjb250ZW50XG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZlIGNsYXNzIG9uIGl0ZW0gaXRzZWxmLCBub3QgcGFyZW50XG4gICYuYWN0aXZlLFxuICAmLmFjdGl2ZTpob3ZlcixcbiAgJi5hY3RpdmU6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7IC8vIFBsYWNlIGFjdGl2ZSBpdGVtcyBhYm92ZSB0aGVpciBzaWJsaW5ncyBmb3IgcHJvcGVyIGJvcmRlciBzdHlsaW5nXG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYmc7XG4gICAgYm9yZGVyLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyO1xuXG4gICAgLy8gRm9yY2UgY29sb3IgdG8gaW5oZXJpdCBmb3IgY3VzdG9tIGNvbnRlbnRcbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gc21hbGwsXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIENvbnRleHR1YWwgdmFyaWFudHNcbi8vXG4vLyBBZGQgbW9kaWZpZXIgY2xhc3NlcyB0byBjaGFuZ2UgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBvbiBpbmRpdmlkdWFsIGl0ZW1zLlxuLy8gT3JnYW5pemF0aW9uYWxseSwgdGhpcyBtdXN0IGNvbWUgYWZ0ZXIgdGhlIGA6aG92ZXJgIHN0YXRlcy5cblxuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoc3VjY2VzcywgJHN0YXRlLXN1Y2Nlc3MtYmcsICRzdGF0ZS1zdWNjZXNzLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoaW5mbywgJHN0YXRlLWluZm8tYmcsICRzdGF0ZS1pbmZvLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQod2FybmluZywgJHN0YXRlLXdhcm5pbmctYmcsICRzdGF0ZS13YXJuaW5nLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoZGFuZ2VyLCAkc3RhdGUtZGFuZ2VyLWJnLCAkc3RhdGUtZGFuZ2VyLXRleHQpO1xuXG5cbi8vIEN1c3RvbSBjb250ZW50IG9wdGlvbnNcbi8vXG4vLyBFeHRyYSBjbGFzc2VzIGZvciBjcmVhdGluZyB3ZWxsLWZvcm1hdHRlZCBjb250ZW50IHdpdGhpbiBgLmxpc3QtZ3JvdXAtaXRlbWBzLlxuXG4ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuIiwiLy9cbi8vIEZvcm1zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIE5vcm1hbGl6ZSBub24tY29udHJvbHNcbi8vXG4vLyBSZXN0eWxlIGFuZCBiYXNlbGluZSBub24tY29udHJvbCBmb3JtIGVsZW1lbnRzLlxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICAvLyBDaHJvbWUgYW5kIEZpcmVmb3ggc2V0IGEgYG1pbi13aWR0aDogbWluLWNvbnRlbnQ7YCBvbiBmaWVsZHNldHMsXG4gIC8vIHNvIHdlIHJlc2V0IHRoYXQgdG8gZW5zdXJlIGl0IGJlaGF2ZXMgbW9yZSBsaWtlIGEgc3RhbmRhcmQgYmxvY2sgZWxlbWVudC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTIzNTkuXG4gIG1pbi13aWR0aDogMDtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogJGxlZ2VuZC1jb2xvcjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxlZ2VuZC1ib3JkZXItY29sb3I7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIEZvcmNlIElFOCB0byB3cmFwIGxvbmcgY29udGVudCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTMxNDEpXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLy8gTm9ybWFsaXplIGZvcm0gY29udHJvbHNcbi8vXG4vLyBXaGlsZSBtb3N0IG9mIG91ciBmb3JtIHN0eWxlcyByZXF1aXJlIGV4dHJhIGNsYXNzZXMsIHNvbWUgYmFzaWMgbm9ybWFsaXphdGlvblxuLy8gaXMgcmVxdWlyZWQgdG8gZW5zdXJlIG9wdGltdW0gZGlzcGxheSB3aXRoIG9yIHdpdGhvdXQgdGhvc2UgY2xhc3NlcyB0byBiZXR0ZXJcbi8vIGFkZHJlc3MgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMuXG5cbi8vIE92ZXJyaWRlIGNvbnRlbnQtYm94IGluIE5vcm1hbGl6ZSAoKiBpc24ndCBzcGVjaWZpYyBlbm91Z2gpXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cblxuLy8gUG9zaXRpb24gcmFkaW9zIGFuZCBjaGVja2JveGVzIGJldHRlclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxcHggXFw5OyAvLyBJRTgtOVxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyBNYWtlIHJhbmdlIGlucHV0cyBiZWhhdmUgbGlrZSB0ZXh0dWFsIGZvcm0gY29udHJvbHNcbmlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gTWFrZSBtdWx0aXBsZSBzZWxlY3QgZWxlbWVudHMgaGVpZ2h0IG5vdCBmaXhlZFxuc2VsZWN0W211bHRpcGxlXSxcbnNlbGVjdFtzaXplXSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gRm9jdXMgZm9yIGZpbGUsIHJhZGlvLCBhbmQgY2hlY2tib3hcbmlucHV0W3R5cGU9XCJmaWxlXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzIHtcbiAgQGluY2x1ZGUgdGFiLWZvY3VzO1xufVxuXG4vLyBBZGp1c3Qgb3V0cHV0IGVsZW1lbnRcbm91dHB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbn1cblxuXG4vLyBDb21tb24gZm9ybSBjb250cm9sc1xuLy9cbi8vIFNoYXJlZCBzaXplIGFuZCB0eXBlIHJlc2V0cyBmb3IgZm9ybSBjb250cm9scy4gQXBwbHkgYC5mb3JtLWNvbnRyb2xgIHRvIGFueVxuLy8gb2YgdGhlIGZvbGxvd2luZyBmb3JtIGNvbnRyb2xzOlxuLy9cbi8vIHNlbGVjdFxuLy8gdGV4dGFyZWFcbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZVwiXVxuLy8gaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXVxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXVxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl1cbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl1cbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXVxuLy8gaW5wdXRbdHlwZT1cInVybFwiXVxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXVxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXVxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdXG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1iYXNlOyAvLyBNYWtlIGlucHV0cyBhdCBsZWFzdCB0aGUgaGVpZ2h0IG9mIHRoZWlyIGJ1dHRvbiBjb3VudGVycGFydCAoYmFzZSBsaW5lLWhlaWdodCArIHBhZGRpbmcgKyBib3JkZXIpXG4gIHBhZGRpbmc6ICRwYWRkaW5nLWJhc2UtdmVydGljYWwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTRcbiAgYm9yZGVyOiAxcHggc29saWQgJGlucHV0LWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7IC8vIE5vdGU6IFRoaXMgaGFzIG5vIGVmZmVjdCBvbiA8c2VsZWN0PnMgaW4gc29tZSBicm93c2VycywgZHVlIHRvIHRoZSBsaW1pdGVkIHN0eWxhYmlsaXR5IG9mIDxzZWxlY3Q+cyBpbiBDU1MuXG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXMpO1xuXG4gIC8vIEN1c3RvbWl6ZSB0aGUgYDpmb2N1c2Agc3RhdGUgdG8gaW1pdGF0ZSBuYXRpdmUgV2ViS2l0IHN0eWxlcy5cbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLWZvY3VzO1xuXG4gIC8vIFBsYWNlaG9sZGVyXG4gIEBpbmNsdWRlIHBsYWNlaG9sZGVyO1xuXG4gIC8vIFVuc3R5bGUgdGhlIGNhcmV0IG9uIGA8c2VsZWN0PmBzIGluIElFMTArLlxuICAmOjotbXMtZXhwYW5kIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAvLyBEaXNhYmxlZCBhbmQgcmVhZC1vbmx5IGlucHV0c1xuICAvL1xuICAvLyBIVE1MNSBzYXlzIHRoYXQgY29udHJvbHMgdW5kZXIgYSBmaWVsZHNldCA+IGxlZ2VuZDpmaXJzdC1jaGlsZCB3b24ndCBiZVxuICAvLyBkaXNhYmxlZCBpZiB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQuIER1ZSB0byBpbXBsZW1lbnRhdGlvbiBkaWZmaWN1bHR5LCB3ZVxuICAvLyBkb24ndCBob25vciB0aGF0IGVkZ2UgY2FzZTsgd2Ugc3R5bGUgdGhlbSBhcyBkaXNhYmxlZCBhbnl3YXkuXG4gICZbZGlzYWJsZWRdLFxuICAmW3JlYWRvbmx5XSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZy1kaXNhYmxlZDtcbiAgICBvcGFjaXR5OiAxOyAvLyBpT1MgZml4IGZvciB1bnJlYWRhYmxlIGRpc2FibGVkIGNvbnRlbnQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjU1XG4gIH1cblxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCB0ZXh0YXJlYSYgdG8gdGV4dGFyZWEuZm9ybS1jb250cm9sXG59XG5cbi8vIFJlc2V0IGhlaWdodCBmb3IgYHRleHRhcmVhYHNcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuXG4vLyBTZWFyY2ggaW5wdXRzIGluIGlPU1xuLy9cbi8vIFRoaXMgb3ZlcnJpZGVzIHRoZSBleHRyYSByb3VuZGVkIGNvcm5lcnMgb24gc2VhcmNoIGlucHV0cyBpbiBpT1Mgc28gdGhhdCBvdXJcbi8vIGAuZm9ybS1jb250cm9sYCBjbGFzcyBjYW4gcHJvcGVybHkgc3R5bGUgdGhlbS4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IHNpbXBseVxuLy8gYmUgYWRkZWQgdG8gYC5mb3JtLWNvbnRyb2xgIGFzIGl0J3Mgbm90IHNwZWNpZmljIGVub3VnaC4gRm9yIGRldGFpbHMsIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU4Ni5cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuXG4vLyBTcGVjaWFsIHN0eWxlcyBmb3IgaU9TIHRlbXBvcmFsIGlucHV0c1xuLy9cbi8vIEluIE1vYmlsZSBTYWZhcmksIHNldHRpbmcgYGRpc3BsYXk6IGJsb2NrYCBvbiB0ZW1wb3JhbCBpbnB1dHMgY2F1c2VzIHRoZVxuLy8gdGV4dCB3aXRoaW4gdGhlIGlucHV0IHRvIGJlY29tZSB2ZXJ0aWNhbGx5IG1pc2FsaWduZWQuIEFzIGEgd29ya2Fyb3VuZCwgd2Vcbi8vIHNldCBhIHBpeGVsIGxpbmUtaGVpZ2h0IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gaGVpZ2h0IG9mIHRoZSBpbnB1dCwgYnV0IG9ubHlcbi8vIGZvciBTYWZhcmkuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM5ODQ4XG4vL1xuLy8gTm90ZSB0aGF0IGFzIG9mIDkuMywgaU9TIGRvZXNuJ3Qgc3VwcG9ydCBgd2Vla2AuXG5cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXG4gIGlucHV0W3R5cGU9XCJtb250aFwiXSB7XG4gICAgJi5mb3JtLWNvbnRyb2wge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgICB9XG5cbiAgICAmLmlucHV0LXNtLFxuICAgIC5pbnB1dC1ncm91cC1zbSAmIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICAgIH1cblxuICAgICYuaW5wdXQtbGcsXG4gICAgLmlucHV0LWdyb3VwLWxnICYge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgfVxuICB9XG59XG5cblxuLy8gRm9ybSBncm91cHNcbi8vXG4vLyBEZXNpZ25lZCB0byBoZWxwIHdpdGggdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2luZyBvZiB2ZXJ0aWNhbCBmb3Jtcy4gRm9yXG4vLyBob3Jpem9udGFsIGZvcm1zLCB1c2UgdGhlIHByZWRlZmluZWQgZ3JpZCBjbGFzc2VzLlxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206ICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b207XG59XG5cblxuLy8gQ2hlY2tib3hlcyBhbmQgcmFkaW9zXG4vL1xuLy8gSW5kZW50IHRoZSBsYWJlbHMgdG8gcG9zaXRpb24gcmFkaW9zL2NoZWNrYm94ZXMgYXMgaGFuZ2luZyBjb250cm9scy5cblxuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBsYWJlbCB7XG4gICAgbWluLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkOyAvLyBFbnN1cmUgdGhlIGlucHV0IGRvZXNuJ3QganVtcCB3aGVuIHRoZXJlIGlzIG5vIHRleHRcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5yYWRpby1pbmxpbmUgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi10b3A6IDRweCBcXDk7XG59XG5cbi5yYWRpbyArIC5yYWRpbyxcbi5jaGVja2JveCArIC5jaGVja2JveCB7XG4gIG1hcmdpbi10b3A6IC01cHg7IC8vIE1vdmUgdXAgc2libGluZyByYWRpb3Mgb3IgY2hlY2tib3hlcyBmb3IgdGlnaHRlciBzcGFjaW5nXG59XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBvbiBzYW1lIGxpbmVcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhZGlvLWlubGluZSArIC5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lICsgLmNoZWNrYm94LWlubGluZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAvLyBzcGFjZSBvdXQgY29uc2VjdXRpdmUgaW5saW5lIGNvbnRyb2xzXG59XG5cbi8vIEFwcGx5IHNhbWUgZGlzYWJsZWQgY3Vyc29yIHR3ZWFrIGFzIGZvciBpbnB1dHNcbi8vIFNvbWUgc3BlY2lhbCBjYXJlIGlzIG5lZWRlZCBiZWNhdXNlIDxsYWJlbD5zIGRvbid0IGluaGVyaXQgdGhlaXIgcGFyZW50J3MgYGN1cnNvcmAuXG4vL1xuLy8gTm90ZTogTmVpdGhlciByYWRpb3Mgbm9yIGNoZWNrYm94ZXMgY2FuIGJlIHJlYWRvbmx5LlxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgJltkaXNhYmxlZF0sXG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgZGlyZWN0bHkgb24gPGxhYmVsPnNcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuLy8gVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBvbiBlbGVtZW50cyB3aXRoIDxsYWJlbD4gZGVzY2VuZGFudHNcbi5yYWRpbyxcbi5jaGVja2JveCB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBsYWJlbCB7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gU3RhdGljIGZvcm0gY29udHJvbCB0ZXh0XG4vL1xuLy8gQXBwbHkgY2xhc3MgdG8gYSBgcGAgZWxlbWVudCB0byBtYWtlIGFueSBzdHJpbmcgb2YgdGV4dCBhbGlnbiB3aXRoIGxhYmVscyBpblxuLy8gYSBob3Jpem9udGFsIGZvcm0gbGF5b3V0LlxuXG4uZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gIC8vIFNpemUgaXQgYXBwcm9wcmlhdGVseSBuZXh0IHRvIHJlYWwgZm9ybSBjb250cm9sc1xuICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgcGFkZGluZy1ib3R0b206ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIC8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGBwYFxuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1iYXNlKTtcblxuICAmLmlucHV0LWxnLFxuICAmLmlucHV0LXNtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBCdWlsZCBvbiBgLmZvcm0tY29udHJvbGAgd2l0aCBtb2RpZmllciBjbGFzc2VzIHRvIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZVxuLy8gaGVpZ2h0IGFuZCBmb250LXNpemUgb2YgZm9ybSBjb250cm9scy5cbi8vXG4vLyBUaGUgYC5mb3JtLWdyb3VwLSogZm9ybS1jb250cm9sYCB2YXJpYXRpb25zIGFyZSBzYWRseSBkdXBsaWNhdGVkIHRvIGF2b2lkIHRoZVxuLy8gaXNzdWUgZG9jdW1lbnRlZCBpbiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE1MDc0LlxuXG5AaW5jbHVkZSBpbnB1dC1zaXplKCcuaW5wdXQtc20nLCAkaW5wdXQtaGVpZ2h0LXNtYWxsLCAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4uZm9ybS1ncm91cC1zbSB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LXNtYWxsO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsO1xuICB9XG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgfVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsXG4gIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgcGFkZGluZzogKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICsgMSkgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1zbWFsbDtcbiAgfVxufVxuXG5AaW5jbHVkZSBpbnB1dC1zaXplKCcuaW5wdXQtbGcnLCAkaW5wdXQtaGVpZ2h0LWxhcmdlLCAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1sYXJnZSwgJGxpbmUtaGVpZ2h0LWxhcmdlLCAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZSk7XG4uZm9ybS1ncm91cC1sZyB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWxhcmdlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlO1xuICB9XG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgfVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsXG4gIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1sYXJnZSk7XG4gICAgcGFkZGluZzogKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICsgMSkgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1sYXJnZTtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmZWVkYmFjayBzdGF0ZXNcbi8vXG4vLyBBcHBseSBjb250ZXh0dWFsIGFuZCBzZW1hbnRpYyBzdGF0ZXMgdG8gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2xzLlxuXG4uaGFzLWZlZWRiYWNrIHtcbiAgLy8gRW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAvLyBFbnN1cmUgaWNvbnMgZG9uJ3Qgb3ZlcmxhcCB0ZXh0XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmctcmlnaHQ6ICgkaW5wdXQtaGVpZ2h0LWJhc2UgKiAxLjI1KTtcbiAgfVxufVxuLy8gRmVlZGJhY2sgaWNvbiAocmVxdWlyZXMgLmdseXBoaWNvbiBjbGFzc2VzKVxuLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjsgLy8gRW5zdXJlIGljb24gaXMgYWJvdmUgaW5wdXQgZ3JvdXBzXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1iYXNlO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5pbnB1dC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbn1cbi5pbnB1dC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbn1cblxuLy8gRmVlZGJhY2sgc3RhdGVzXG4uaGFzLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG59XG4uaGFzLXdhcm5pbmcge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy1iZyk7XG59XG4uaGFzLWVycm9yIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLWRhbmdlci10ZXh0LCAkc3RhdGUtZGFuZ2VyLXRleHQsICRzdGF0ZS1kYW5nZXItYmcpO1xufVxuXG4vLyBSZXBvc2l0aW9uIGZlZWRiYWNrIGljb24gaWYgaW5wdXQgaGFzIHZpc2libGUgbGFiZWwgYWJvdmVcbi5oYXMtZmVlZGJhY2sgbGFiZWwge1xuXG4gICYgfiAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICB0b3A6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyA1KTsgLy8gSGVpZ2h0IG9mIHRoZSBgbGFiZWxgIGFuZCBpdHMgbWFyZ2luXG4gIH1cbiAgJi5zci1vbmx5IH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgdG9wOiAwO1xuICB9XG59XG5cblxuLy8gSGVscCB0ZXh0XG4vL1xuLy8gQXBwbHkgdG8gYW55IGVsZW1lbnQgeW91IHdpc2ggdG8gY3JlYXRlIGxpZ2h0IHRleHQgZm9yIHBsYWNlbWVudCBpbW1lZGlhdGVseVxuLy8gYmVsb3cgYSBmb3JtIGNvbnRyb2wuIFVzZSBmb3IgZ2VuZXJhbCBoZWxwLCBmb3JtYXR0aW5nLCBvciBpbnN0cnVjdGlvbmFsIHRleHQuXG5cbi5oZWxwLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7IC8vIGFjY291bnQgZm9yIGFueSBlbGVtZW50IHVzaW5nIGhlbHAtYmxvY2tcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogbGlnaHRlbigkdGV4dC1jb2xvciwgMjUlKTsgLy8gbGlnaHRlbiB0aGUgdGV4dCBzb21lIGZvciBjb250cmFzdFxufVxuXG5cbi8vIElubGluZSBmb3Jtc1xuLy9cbi8vIE1ha2UgZm9ybXMgYXBwZWFyIGlubGluZSgtYmxvY2spIGJ5IGFkZGluZyB0aGUgYC5mb3JtLWlubGluZWAgY2xhc3MuIElubGluZVxuLy8gZm9ybXMgYmVnaW4gc3RhY2tlZCBvbiBleHRyYSBzbWFsbCAobW9iaWxlKSBkZXZpY2VzIGFuZCB0aGVuIGdvIGlubGluZSB3aGVuXG4vLyB2aWV3cG9ydHMgcmVhY2ggPDc2OHB4LlxuLy9cbi8vIFJlcXVpcmVzIHdyYXBwaW5nIGlucHV0cyBhbmQgbGFiZWxzIHdpdGggYC5mb3JtLWdyb3VwYCBmb3IgcHJvcGVyIGRpc3BsYXkgb2Zcbi8vIGRlZmF1bHQgSFRNTCBmb3JtIGNvbnRyb2xzIGFuZCBvdXIgY3VzdG9tIGZvcm0gY29udHJvbHMgKGUuZy4sIGlucHV0IGdyb3VwcykuXG4vL1xuLy8gSGVhZHMgdXAhIFRoaXMgaXMgbWl4aW4tZWQgaW50byBgLm5hdmJhci1mb3JtYCBpbiBuYXZiYXJzLmxlc3MuXG5cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBmcm9tIGAuZm9ybS1pbmxpbmVgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbkBtaXhpbiBmb3JtLWlubGluZSB7XG5cbiAgLy8gS2ljayBpbiB0aGUgaW5saW5lXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIC8vIElubGluZS1ibG9jayBhbGwgdGhlIHRoaW5ncyBmb3IgXCJpbmxpbmVcIlxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIEluIG5hdmJhci1mb3JtLCBhbGxvdyBmb2xrcyB0byAqbm90KiB1c2UgYC5mb3JtLWdyb3VwYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGF1dG87IC8vIFByZXZlbnQgbGFiZWxzIGZyb20gc3RhY2tpbmcgYWJvdmUgaW5wdXRzIGluIGAuZm9ybS1ncm91cGBcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdGF0aWMgY29udHJvbHMgYmVoYXZlIGxpa2UgcmVndWxhciBvbmVzXG4gICAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAuaW5wdXQtZ3JvdXAtYWRkb24sXG4gICAgICAuaW5wdXQtZ3JvdXAtYnRuLFxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElucHV0IGdyb3VwcyBuZWVkIHRoYXQgMTAwJSB3aWR0aCB0aG91Z2hcbiAgICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBvbiByYWRpb3MvY2hlY2tib3hlcyB0aGF0IHdlcmUgdXNlZCBmb3Igc3RhY2tpbmcsIGFuZFxuICAgIC8vIHRoZW4gdW5kbyB0aGUgZmxvYXRpbmcgb2YgcmFkaW9zIGFuZCBjaGVja2JveGVzIHRvIG1hdGNoLlxuICAgIC5yYWRpbyxcbiAgICAuY2hlY2tib3gge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgICAuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC8vIFJlLW92ZXJyaWRlIHRoZSBmZWVkYmFjayBpY29uLlxuICAgIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG59XG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYXMgYEBtaXhpbiBmb3JtLWlubGluZWAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuLmZvcm0taW5saW5lIHtcbiAgQGluY2x1ZGUgZm9ybS1pbmxpbmU7XG59XG5cblxuXG4vLyBIb3Jpem9udGFsIGZvcm1zXG4vL1xuLy8gSG9yaXpvbnRhbCBmb3JtcyBhcmUgYnVpbHQgb24gZ3JpZCBjbGFzc2VzIGFuZCBhbGxvdyB5b3UgdG8gY3JlYXRlIGZvcm1zIHdpdGhcbi8vIGxhYmVscyBvbiB0aGUgbGVmdCBhbmQgaW5wdXRzIG9uIHRoZSByaWdodC5cblxuLmZvcm0taG9yaXpvbnRhbCB7XG5cbiAgLy8gQ29uc2lzdGVudCB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgcmFkaW9zIGFuZCBjaGVja2JveGVzXG4gIC8vXG4gIC8vIExhYmVscyBhbHNvIGdldCBzb21lIHJlc2V0IHN0eWxlcywgYnV0IHRoYXQgaXMgc2NvcGVkIHRvIGEgbWVkaWEgcXVlcnkgYmVsb3cuXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94LFxuICAucmFkaW8taW5saW5lLFxuICAuY2hlY2tib3gtaW5saW5lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7IC8vIERlZmF1bHQgcGFkZGluZyBwbHVzIGEgYm9yZGVyXG4gIH1cbiAgLy8gQWNjb3VudCBmb3IgcGFkZGluZyB3ZSdyZSBhZGRpbmcgdG8gZW5zdXJlIHRoZSBhbGlnbm1lbnQgYW5kIG9mIGhlbHAgdGV4dFxuICAvLyBhbmQgb3RoZXIgY29udGVudCBiZWxvdyBpdGVtc1xuICAucmFkaW8sXG4gIC5jaGVja2JveCB7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSkpO1xuICB9XG5cbiAgLy8gTWFrZSBmb3JtIGdyb3VwcyBiZWhhdmUgbGlrZSByb3dzXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBtYWtlLXJvdztcbiAgfVxuXG4gIC8vIFJlc2V0IHNwYWNpbmcgYW5kIHJpZ2h0IGFsaWduIGxhYmVscywgYnV0IHNjb3BlIHRvIG1lZGlhIHF1ZXJpZXMgc28gdGhhdFxuICAvLyBsYWJlbHMgb24gbmFycm93IHZpZXdwb3J0cyBzdGFjayB0aGUgc2FtZSBhcyBhIGRlZmF1bHQgZm9ybSBleGFtcGxlLlxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTsgLy8gRGVmYXVsdCBwYWRkaW5nIHBsdXMgYSBib3JkZXJcbiAgICB9XG4gIH1cblxuICAvLyBWYWxpZGF0aW9uIHN0YXRlc1xuICAvL1xuICAvLyBSZXBvc2l0aW9uIHRoZSBpY29uIGJlY2F1c2UgaXQncyBub3cgd2l0aGluIGEgZ3JpZCBjb2x1bW4gYW5kIGNvbHVtbnMgaGF2ZVxuICAvLyBgcG9zaXRpb246IHJlbGF0aXZlO2Agb24gdGhlbS4gQWxzbyBhY2NvdW50cyBmb3IgdGhlIGdyaWQgZ3V0dGVyIHBhZGRpbmcuXG4gIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgcmlnaHQ6IGZsb29yKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSk7XG4gIH1cblxuICAvLyBGb3JtIGdyb3VwIHNpemVzXG4gIC8vXG4gIC8vIFF1aWNrIHV0aWxpdHkgY2xhc3MgZm9yIGFwcGx5aW5nIGAuaW5wdXQtbGdgIGFuZCBgLmlucHV0LXNtYCBzdHlsZXMgdG8gdGhlXG4gIC8vIGlucHV0cyBhbmQgbGFiZWxzIHdpdGhpbiBhIGAuZm9ybS1ncm91cGAuXG4gIC5mb3JtLWdyb3VwLWxnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCArIDEpO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mb3JtLWdyb3VwLXNtIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCArIDEpO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gVHlwb2dyYXBoeVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBIZWFkaW5nc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ3MtZm9udC1mYW1pbHk7XG4gIGZvbnQtd2VpZ2h0OiAkaGVhZGluZ3MtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogJGhlYWRpbmdzLXNtYWxsLWNvbG9yO1xuICB9XG59XG5cbmgxLCAuaDEsXG5oMiwgLmgyLFxuaDMsIC5oMyB7XG4gIG1hcmdpbi10b3A6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogNjUlO1xuICB9XG59XG5oNCwgLmg0LFxuaDUsIC5oNSxcbmg2LCAuaDYge1xuICBtYXJnaW4tdG9wOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG4gIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcblxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgfVxufVxuXG5oMSwgLmgxIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgxOyB9XG5oMiwgLmgyIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgyOyB9XG5oMywgLmgzIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgzOyB9XG5oNCwgLmg0IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg0OyB9XG5oNSwgLmg1IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg1OyB9XG5oNiwgLmg2IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg2OyB9XG5cblxuLy8gQm9keSB0ZXh0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnAge1xuICBtYXJnaW46IDAgMCAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG59XG5cbi5sZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXNpemU6IGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjE1KSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS41KTtcbiAgfVxufVxuXG5cbi8vIEVtcGhhc2lzICYgbWlzY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFeDogKDEycHggc21hbGwgZm9udCAvIDE0cHggYmFzZSBmb250KSAqIDEwMCUgPSBhYm91dCA4NSVcbnNtYWxsLFxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiBmbG9vcigoMTAwJSAqICRmb250LXNpemUtc21hbGwgLyAkZm9udC1zaXplLWJhc2UpKTtcbn1cblxubWFyayxcbi5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXRlLXdhcm5pbmctYmc7XG4gIHBhZGRpbmc6IC4yZW07XG59XG5cbi8vIEFsaWdubWVudFxuLnRleHQtbGVmdCAgICAgICAgICAgeyB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4udGV4dC1yaWdodCAgICAgICAgICB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4udGV4dC1jZW50ZXIgICAgICAgICB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLnRleHQtanVzdGlmeSAgICAgICAgeyB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG4udGV4dC1ub3dyYXAgICAgICAgICB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLy8gVHJhbnNmb3JtYXRpb25cbi50ZXh0LWxvd2VyY2FzZSAgICAgIHsgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxuLnRleHQtdXBwZXJjYXNlICAgICAgeyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4udGV4dC1jYXBpdGFsaXplICAgICB7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG5cbi8vIENvbnRleHR1YWwgY29sb3JzXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAkdGV4dC1tdXRlZDtcbn1cblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1wcmltYXJ5JywgJGJyYW5kLXByaW1hcnkpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXN1Y2Nlc3MnLCAkc3RhdGUtc3VjY2Vzcy10ZXh0KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1pbmZvJywgJHN0YXRlLWluZm8tdGV4dCk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtd2FybmluZycsICRzdGF0ZS13YXJuaW5nLXRleHQpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LWRhbmdlcicsICRzdGF0ZS1kYW5nZXItdGV4dCk7XG5cbi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcbi8vIEZvciBub3cgd2UnbGwgbGVhdmUgdGhlc2UgYWxvbmdzaWRlIHRoZSB0ZXh0IGNsYXNzZXMgdW50aWwgdjQgd2hlbiB3ZSBjYW5cbi8vIHNhZmVseSBzaGlmdCB0aGluZ3MgYXJvdW5kIChwZXIgU2VtVmVyIHJ1bGVzKS5cbi5iZy1wcmltYXJ5IHtcbiAgLy8gR2l2ZW4gdGhlIGNvbnRyYXN0IGhlcmUsIHRoaXMgaXMgdGhlIG9ubHkgY2xhc3MgdG8gaGF2ZSBpdHMgY29sb3IgaW52ZXJ0ZWRcbiAgLy8gYXV0b21hdGljYWxseS5cbiAgY29sb3I6ICNmZmY7XG59XG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctcHJpbWFyeScsICRicmFuZC1wcmltYXJ5KTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXN1Y2Nlc3MnLCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1pbmZvJywgJHN0YXRlLWluZm8tYmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctd2FybmluZycsICRzdGF0ZS13YXJuaW5nLWJnKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLWRhbmdlcicsICRzdGF0ZS1kYW5nZXItYmcpO1xuXG5cbi8vIFBhZ2UgaGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5wYWdlLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpIC0gMSk7XG4gIG1hcmdpbjogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAqIDIpIDAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHBhZ2UtaGVhZGVyLWJvcmRlci1jb2xvcjtcbn1cblxuXG4vLyBMaXN0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBVbm9yZGVyZWQgYW5kIE9yZGVyZWQgbGlzdHNcbnVsLFxub2wge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4vLyBMaXN0IG9wdGlvbnNcblxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGZyb20gYC5saXN0LXVuc3R5bGVkYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhcyBgQG1peGluIGxpc3QtdW5zdHlsZWRgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbi5saXN0LXVuc3R5bGVkIHtcbiAgQGluY2x1ZGUgbGlzdC11bnN0eWxlZDtcbn1cblxuXG4vLyBJbmxpbmUgdHVybnMgbGlzdCBpdGVtcyBpbnRvIGlubGluZS1ibG9ja1xuLmxpc3QtaW5saW5lIHtcbiAgQGluY2x1ZGUgbGlzdC11bnN0eWxlZDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG5cbiAgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4vLyBEZXNjcmlwdGlvbiBMaXN0c1xuZGwge1xuICBtYXJnaW4tdG9wOiAwOyAvLyBSZW1vdmUgYnJvd3NlciBkZWZhdWx0XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbn1cbmR0LFxuZGQge1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG59XG5kdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuZGQge1xuICBtYXJnaW4tbGVmdDogMDsgLy8gVW5kbyBicm93c2VyIGRlZmF1bHRcbn1cblxuLy8gSG9yaXpvbnRhbCBkZXNjcmlwdGlvbiBsaXN0c1xuLy9cbi8vIERlZmF1bHRzIHRvIGJlaW5nIHN0YWNrZWQgd2l0aG91dCBhbnkgb2YgdGhlIGJlbG93IHN0eWxlcyBhcHBsaWVkLCB1bnRpbCB0aGVcbi8vIGdyaWQgYnJlYWtwb2ludCBpcyByZWFjaGVkIChkZWZhdWx0IG9mIH43NjhweCkuXG5cbi5kbC1ob3Jpem9udGFsIHtcbiAgZGQge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4OyAvLyBDbGVhciB0aGUgZmxvYXRlZCBgZHRgIGlmIGFuIGVtcHR5IGBkZGAgaXMgcHJlc2VudFxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRkbC1ob3Jpem9udGFsLWJyZWFrcG9pbnQpIHtcbiAgICBkdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAoJGRsLWhvcml6b250YWwtb2Zmc2V0IC0gMjApO1xuICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3c7XG4gICAgfVxuICAgIGRkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAkZGwtaG9yaXpvbnRhbC1vZmZzZXQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gTWlzY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBBYmJyZXZpYXRpb25zIGFuZCBhY3Jvbnltc1xuYWJiclt0aXRsZV0sXG4vLyBBZGQgZGF0YS0qIGF0dHJpYnV0ZSB0byBoZWxwIG91dCBvdXIgdG9vbHRpcCBwbHVnaW4sIHBlciBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzUyNTdcbmFiYnJbZGF0YS1vcmlnaW5hbC10aXRsZV0ge1xuICBjdXJzb3I6IGhlbHA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgJGFiYnItYm9yZGVyLWNvbG9yO1xufVxuLmluaXRpYWxpc20ge1xuICBmb250LXNpemU6IDkwJTtcbiAgQGV4dGVuZCAudGV4dC11cHBlcmNhc2U7XG59XG5cbi8vIEJsb2NrcXVvdGVzXG5ibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luOiAwIDAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXNpemU6ICRibG9ja3F1b3RlLWZvbnQtc2l6ZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmxvY2txdW90ZS1ib3JkZXItY29sb3I7XG5cbiAgcCxcbiAgdWwsXG4gIG9sIHtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBOb3RlOiBEZXByZWNhdGVkIHNtYWxsIGFuZCAuc21hbGwgYXMgb2YgdjMuMS4wXG4gIC8vIENvbnRleHQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2NjBcbiAgZm9vdGVyLFxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDgwJTsgLy8gYmFjayB0byBkZWZhdWx0IGZvbnQtc2l6ZVxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgICBjb2xvcjogJGJsb2NrcXVvdGUtc21hbGwtY29sb3I7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnXFwyMDE0IFxcMDBBMCc7IC8vIGVtIGRhc2gsIG5ic3BcbiAgICB9XG4gIH1cbn1cblxuLy8gT3Bwb3NpdGUgYWxpZ25tZW50IG9mIGJsb2NrcXVvdGVcbi8vXG4vLyBIZWFkcyB1cDogYGJsb2NrcXVvdGUucHVsbC1yaWdodGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhcyBvZiB2My4xLjAuXG4uYmxvY2txdW90ZS1yZXZlcnNlLFxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAkYmxvY2txdW90ZS1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAvLyBBY2NvdW50IGZvciBjaXRhdGlvblxuICBmb290ZXIsXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgICY6YmVmb3JlIHsgY29udGVudDogJyc7IH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwQTAgXFwyMDE0JzsgLy8gbmJzcCwgZW0gZGFzaFxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGRyZXNzZXNcbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xufVxuIiwiLy9cbi8vIFRvb2x0aXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAkemluZGV4LXRvb2x0aXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBPdXIgcGFyZW50IGVsZW1lbnQgY2FuIGJlIGFyYml0cmFyeSBzaW5jZSB0b29sdGlwcyBhcmUgYnkgZGVmYXVsdCBpbnNlcnRlZCBhcyBhIHNpYmxpbmcgb2YgdGhlaXIgdGFyZ2V0IGVsZW1lbnQuXG4gIC8vIFNvIHJlc2V0IG91ciBmb250IGFuZCB0ZXh0IHByb3BlcnRpZXMgdG8gYXZvaWQgaW5oZXJpdGluZyB3ZWlyZCB2YWx1ZXMuXG4gIEBpbmNsdWRlIHJlc2V0LXRleHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcblxuICBAaW5jbHVkZSBvcGFjaXR5KDApO1xuXG4gICYuaW4gICAgIHsgQGluY2x1ZGUgb3BhY2l0eSgkdG9vbHRpcC1vcGFjaXR5KTsgfVxuICAmLnRvcCAgICB7IG1hcmdpbi10b3A6ICAtM3B4OyBwYWRkaW5nOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwOyB9XG4gICYucmlnaHQgIHsgbWFyZ2luLWxlZnQ6ICAzcHg7IHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7IH1cbiAgJi5ib3R0b20geyBtYXJnaW4tdG9wOiAgIDNweDsgcGFkZGluZzogJHRvb2x0aXAtYXJyb3ctd2lkdGggMDsgfVxuICAmLmxlZnQgICB7IG1hcmdpbi1sZWZ0OiAtM3B4OyBwYWRkaW5nOiAwICR0b29sdGlwLWFycm93LXdpZHRoOyB9XG59XG5cbi8vIFdyYXBwZXIgZm9yIHRoZSB0b29sdGlwIGNvbnRlbnRcbi50b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAkdG9vbHRpcC1tYXgtd2lkdGg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGNvbG9yOiAkdG9vbHRpcC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9vbHRpcC1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbn1cblxuLy8gQXJyb3dzXG4udG9vbHRpcC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLnRvcC1sZWZ0LCAudG9wLXJpZ2h0LCAuYm90dG9tLWxlZnQsIGFuZCAuYm90dG9tLXJpZ2h0IGFzIG9mIHYzLjMuMVxuLnRvb2x0aXAge1xuICAmLnRvcCAudG9vbHRpcC1hcnJvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLnRvcC1sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi1ib3R0b206IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi50b3AtcmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYucmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYubGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5ib3R0b20gLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5ib3R0b20tbGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYuYm90dG9tLXJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxufVxuIiwiLy9cbi8vIFV0aWxpdHkgY2xhc3Nlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBGbG9hdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmNsZWFyZml4IHtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG4uY2VudGVyLWJsb2NrIHtcbiAgQGluY2x1ZGUgY2VudGVyLWJsb2NrO1xufVxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5cbi8vIFRvZ2dsaW5nIGNvbnRlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTm90ZTogRGVwcmVjYXRlZCAuaGlkZSBpbiBmYXZvciBvZiAuaGlkZGVuIG9yIC5zci1vbmx5IChhcyBhcHByb3ByaWF0ZSkgaW4gdjMuMC4xXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4udGV4dC1oaWRlIHtcbiAgQGluY2x1ZGUgdGV4dC1oaWRlO1xufVxuXG5cbi8vIEhpZGUgZnJvbSBzY3JlZW5yZWFkZXJzIGFuZCBicm93c2Vyc1xuLy9cbi8vIENyZWRpdDogSFRNTDUgQm9pbGVycGxhdGVcblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4vLyBGb3IgQWZmaXggcGx1Z2luXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5hZmZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQWlDUUEsQUFBQSxJQUFJLENBQUM7RUFDSCxPQUFPLEVBQUUsWUFBWTtFQUNyQixhQUFhLEVBQUUsQ0FBQztFQUNoQixXQUFXLEVEMElvQixNQUFNO0VDeklyQyxVQUFVLEVBQUUsTUFBTTtFQUNsQixjQUFjLEVBQUUsTUFBTTtFQUN0QixZQUFZLEVBQUUsWUFBWTtFQUMxQixNQUFNLEVBQUUsT0FBTztFQUNmLGdCQUFnQixFQUFFLElBQUk7RUFDdEIsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QixXQUFXLEVBQUUsTUFBTTtFakIwQ25CLE9BQU8sRWdCa0NtQixHQUFHLENBQ0gsSUFBSTtFaEJsQzlCLFNBQVMsRWdCVmUsSUFBSTtFaEJXNUIsV0FBVyxFZ0JDYSxPQUFXO0VoQkFuQyxhQUFhLEVnQjhDYSxHQUFHO0VsQjRHN0IsbUJBQW1CLEVtQnJNRSxJQUFJO0VuQnNNdEIsZ0JBQWdCLEVtQnRNRSxJQUFJO0VuQnVNckIsZUFBZSxFbUJ2TUUsSUFBSTtFbkJ3TWpCLFdBQVcsRW1CeE1FLElBQUksR0FrQzFCO0VBOUNELEFBaUJJLElBakJBLEFBaUJGLE1BQVMsRUFqQlgsQUFrQkksSUFsQkEsQUFrQkYsTUFBUyxFQWxCWCxBQWlCSSxJQWpCQSxBQWVGLE9BQVEsQUFFUixNQUFTLEVBakJYLEFB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 */", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(18)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"extractStyles\":false,\"styleLoaders\":[\"style-loader\",\"css-loader\",\"sass-loader\"],\"styles\":[\"buttons\",\"button-groups\",\"close\",\"list-group\",\"forms\",\"mixins\",\"type\",\"tooltip\",\"utilities\"],\"scripts\":[\"modal\",\"collapse\"],\"configFilePath\":\"/Users/danielsousa/Desktop/freecodecamp/Front_End/Advanced/Pomodoro_clock/.bootstraprc\",\"bootstrapPath\":\"/Users/danielsousa/Desktop/freecodecamp/Front_End/Advanced/Pomodoro_clock/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!../babel-loader/lib/index.js!../babel-loader/lib/index.js!./no-op.js", function() {
			var newContent = require("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"extractStyles\":false,\"styleLoaders\":[\"style-loader\",\"css-loader\",\"sass-loader\"],\"styles\":[\"buttons\",\"button-groups\",\"close\",\"list-group\",\"forms\",\"mixins\",\"type\",\"tooltip\",\"utilities\"],\"scripts\":[\"modal\",\"collapse\"],\"configFilePath\":\"/Users/danielsousa/Desktop/freecodecamp/Front_End/Advanced/Pomodoro_clock/.bootstraprc\",\"bootstrapPath\":\"/Users/danielsousa/Desktop/freecodecamp/Front_End/Advanced/Pomodoro_clock/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!../babel-loader/lib/index.js!../babel-loader/lib/index.js!./no-op.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(2);
__webpack_require__(3);
var Clock = __webpack_require__(1);

var view = {
	init: function init() {
		this.cacheDom();
		this.bindEvents();
	},

	cacheDom: function cacheDom() {
		this.$header = $('.header');
		this.$lower = $('.lower');
		this.$start = this.$header.find('.start');
		this.$pause = this.$header.find('.pause');
		this.$reset = this.$header.find('.reset');
		this.$clock = this.$lower.find('.clock');
		this.$sub = this.$lower.find('.sub');
		this.$add = this.$lower.find('.add');
		this.$subbreak = this.$lower.find('.subbreak');
		this.$addbreak = this.$lower.find('.addbreak');
		this.$timeset = this.$lower.find('.timeset');
		this.$breakset = this.$lower.find('.breakset');
	},

	bindEvents: function bindEvents() {
		this.$start.click(function () {
			clock.tickTock();
		});
		this.$pause.click(function () {
			clock.pause();
		});
		this.$reset.click(function () {
			clock.reset();
		});
		this.$add.click(function () {
			clock.addOneMinute(1);
		});
		this.$sub.click(function () {
			clock.addOneMinute(-1);
		});
		this.$addbreak.click(function () {
			clock.addBreakMinute(1);
		});
		this.$subbreak.click(function () {
			clock.addBreakMinute(-1);
		});
	},

	renderTime: function renderTime(time) {
		view.$clock.html('<h1>' + time + '</h1>');
	},
	renderTimeSet: function renderTimeSet(length) {
		view.$timeset.html('<h3>' + length + '</h3>');
	},
	renderBreakSet: function renderBreakSet(length) {
		view.$breakset.html('<h3>' + length + '</h3>');
	}
};

var clock = new Clock(view);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);