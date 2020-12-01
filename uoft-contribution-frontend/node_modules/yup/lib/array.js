"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inherits = _interopRequireDefault(require("./util/inherits"));

var _isAbsent = _interopRequireDefault(require("./util/isAbsent"));

var _isSchema = _interopRequireDefault(require("./util/isSchema"));

var _makePath = _interopRequireDefault(require("./util/makePath"));

var _printValue = _interopRequireDefault(require("./util/printValue"));

var _mixed = _interopRequireDefault(require("./mixed"));

var _locale = require("./locale");

var _runValidations = _interopRequireWildcard(require("./util/runValidations"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["", "[", "]"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["", "[", "]"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = ArraySchema;
exports.default = _default;

function ArraySchema(type) {
  var _this = this;

  if (!(this instanceof ArraySchema)) return new ArraySchema(type);

  _mixed.default.call(this, {
    type: 'array'
  }); // `undefined` specifically means uninitialized, as opposed to
  // "no subtype"


  this._subType = undefined;
  this.innerType = undefined;
  this.withMutation(function () {
    _this.transform(function (values) {
      if (typeof values === 'string') try {
        values = JSON.parse(values);
      } catch (err) {
        values = null;
      }
      return this.isType(values) ? values : null;
    });

    if (type) _this.of(type);
  });
}

(0, _inherits.default)(ArraySchema, _mixed.default, {
  _typeCheck: function _typeCheck(v) {
    return Array.isArray(v);
  },
  _cast: function _cast(_value, _opts) {
    var _this2 = this;

    var value = _mixed.default.prototype._cast.call(this, _value, _opts); //should ignore nulls here


    if (!this._typeCheck(value) || !this.innerType) return value;
    var isChanged = false;
    var castArray = value.map(function (v, idx) {
      var castElement = _this2.innerType.cast(v, (0, _extends2.default)({}, _opts, {
        path: (0, _makePath.default)(_templateObject(), _opts.path, idx)
      }));

      if (castElement !== v) {
        isChanged = true;
      }

      return castElement;
    });
    return isChanged ? castArray : value;
  },
  _validate: function _validate(_value, options) {
    var _this3 = this;

    if (options === void 0) {
      options = {};
    }

    var errors = [];
    var sync = options.sync;
    var path = options.path;
    var innerType = this.innerType;

    var endEarly = this._option('abortEarly', options);

    var recursive = this._option('recursive', options);

    var originalValue = options.originalValue != null ? options.originalValue : _value;
    return _mixed.default.prototype._validate.call(this, _value, options).catch((0, _runValidations.propagateErrors)(endEarly, errors)).then(function (value) {
      if (!recursive || !innerType || !_this3._typeCheck(value)) {
        if (errors.length) throw errors[0];
        return value;
      }

      originalValue = originalValue || value; // #950 Ensure that sparse array empty slots are validated

      var validations = new Array(value.length);

      for (var idx = 0; idx < value.length; idx++) {
        var item = value[idx];

        var _path = (0, _makePath.default)(_templateObject2(), options.path, idx); // object._validate note for isStrict explanation


        var innerOptions = (0, _extends2.default)({}, options, {
          path: _path,
          strict: true,
          parent: value,
          index: idx,
          originalValue: originalValue[idx]
        });
        validations[idx] = innerType.validate ? innerType.validate(item, innerOptions) : true;
      }

      return (0, _runValidations.default)({
        sync: sync,
        path: path,
        value: value,
        errors: errors,
        endEarly: endEarly,
        validations: validations
      });
    });
  },
  _isPresent: function _isPresent(value) {
    return _mixed.default.prototype._isPresent.call(this, value) && value.length > 0;
  },
  of: function of(schema) {
    var next = this.clone();
    if (schema !== false && !(0, _isSchema.default)(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema, or `false` to negate a current sub-schema. ' + 'not: ' + (0, _printValue.default)(schema));
    next._subType = schema;
    next.innerType = schema;
    return next;
  },
  min: function min(_min, message) {
    message = message || _locale.array.min;
    return this.test({
      message: message,
      name: 'min',
      exclusive: true,
      params: {
        min: _min
      },
      test: function test(value) {
        return (0, _isAbsent.default)(value) || value.length >= this.resolve(_min);
      }
    });
  },
  max: function max(_max, message) {
    message = message || _locale.array.max;
    return this.test({
      message: message,
      name: 'max',
      exclusive: true,
      params: {
        max: _max
      },
      test: function test(value) {
        return (0, _isAbsent.default)(value) || value.length <= this.resolve(_max);
      }
    });
  },
  ensure: function ensure() {
    var _this4 = this;

    return this.default(function () {
      return [];
    }).transform(function (val, original) {
      // We don't want to return `null` for nullable schema
      if (_this4._typeCheck(val)) return val;
      return original == null ? [] : [].concat(original);
    });
  },
  compact: function compact(rejector) {
    var reject = !rejector ? function (v) {
      return !!v;
    } : function (v, i, a) {
      return !rejector(v, i, a);
    };
    return this.transform(function (values) {
      return values != null ? values.filter(reject) : values;
    });
  },
  describe: function describe() {
    var base = _mixed.default.prototype.describe.call(this);

    if (this.innerType) base.innerType = this.innerType.describe();
    return base;
  }
});
module.exports = exports.default;