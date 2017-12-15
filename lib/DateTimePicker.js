'use strict';

// for integrate http://xdsoft.net/jqplugins/datetimepicker/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

exports.buildAllowDateTimeMap = buildAllowDateTimeMap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _lodash = require('lodash.frompairs');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.map');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.get');

var _lodash6 = _interopRequireDefault(_lodash5);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-datetimepicker/build/jquery.datetimepicker.full');

require('jquery-datetimepicker/jquery.datetimepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ISO_DATE_FORMAT = 'YYYY-MM-DD';
var ISO_TIME_FORMAT = 'HH:mm';
var ISO_DATETIME_FORMAT = ISO_DATE_FORMAT + 'T' + ISO_TIME_FORMAT;

var HANDLERS = ['onSelectDate', 'onSelectTime', 'onChangeMonth', 'onChangeYear', 'onChangeDateTime', 'onShow', 'onClose', 'onSelectDate', 'onGenerate'];

var VALUE_PROP_TYPE = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date), _propTypes2.default.instanceOf(_moment2.default), _propTypes2.default.number]);

function buildAllowDateTimeMap(datetimes, format) {
  var datetimes_map = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = datetimes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var dt = _step.value;

      var m_dt = (0, _moment2.default)(dt, format);
      var isoDate = m_dt.toISOString().split(/T/)[0];
      if (!datetimes_map[isoDate]) {
        datetimes_map[isoDate] = [];
      }
      datetimes_map[isoDate].push(m_dt);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return datetimes_map;
}

var _ref3 = _jsx('input', {
  type: 'text'
});

var DateTimePicker = (_temp2 = _class = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.defaultOptions = {
      formatTime: _this.props.displayTimeFormat,
      formatDate: _this.props.displayDateFormat,
      dayOfWeekStart: 1
    }, _this.state = {
      value: _this.props.value,
      isInvalid: false
    }, _this.onChangeInput = function (e) {
      _this.setState({ inputValue: e.target.value });
      _this.onChangeHandler(e.target.value);
    }, _this.onChangeHandler = function (value) {
      var isInvalid = false;
      var momentValue = null;
      if (value) {
        try {
          momentValue = (0, _moment2.default)(value, true);
          if (!momentValue.isValid()) {
            momentValue = null;
            isInvalid = true;
          }
        } catch (e) {
          momentValue = null;
          isInvalid = true;
        }
      }

      _this.setValue(momentValue);
      _this.setState({ isInvalid: isInvalid });

      if (_this.props.onChange) {
        _this.props.onChange(momentValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._initPlugin();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.value !== newProps.value) {
        this.setValue(newProps.value);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.value !== nextState.value) {
        // const nextValue = moment(nextState.value)
        this.setOptions({ value: nextState.value });
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.$input.datetimepicker(options);
    }
  }, {
    key: '_initPlugin',
    value: function _initPlugin() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          datepicker = _props.datepicker,
          timepicker = _props.timepicker,
          defaultValue = _props.defaultValue,
          lang = _props.lang;
      var value = this.state.value;

      this.state.inputValue = this.getValue() || '';

      var inputValue = defaultValue || value;

      var $input = (0, _jquery2.default)((0, _reactDom.findDOMNode)(this.input));
      var handlers = (0, _lodash2.default)((0, _lodash4.default)(HANDLERS, function (h) {
        return [h, _this2.buildHandler(_this2.props[h])];
      }));

      var self = this;
      var lastAllowTimes = void 0;
      var pickerOptions = _extends({}, this.defaultOptions, handlers, options, {
        onGenerate: function onGenerate(ct, $i) {
          if (handlers.onGenerate) {
            handlers.onGenerate(ct, $i);
          }
          if (self._allowDateTimeMap) {
            var dt = (0, _moment2.default)(ct).format(ISO_DATE_FORMAT);
            var times = self._allowDateTimeMap[dt];
            if (times) {
              var allowTimes = times.map(function (t) {
                return t.format(pickerOptions.formatTime);
              });
              var cmpTimes = allowTimes.sort().join(',');
              if (lastAllowTimes !== cmpTimes) {
                lastAllowTimes = cmpTimes;
                _this2.setOptions({
                  allowTimes: allowTimes
                });
              }
            }
          }
        }
      });
      var allowDateTimes = (0, _lodash6.default)(pickerOptions, 'allowDateTimes');
      if (allowDateTimes) {
        this._allowDateTimeMap = buildAllowDateTimeMap(allowDateTimes, ISO_DATETIME_FORMAT);
        pickerOptions.allowDates = allowDateTimes.map(function (dt) {
          return (0, _moment2.default)(dt, ISO_DATETIME_FORMAT).format(pickerOptions.formatDate);
        });
      }

      $input.datetimepicker('destroy');
      this.$input = $input.datetimepicker(_extends({}, pickerOptions, {
        format: this.getDisplayFormat(),
        datepicker: datepicker,
        timepicker: timepicker,
        onChangeDateTime: this.onChangeHandler,
        value: inputValue // && moment(inputValue).toDate()
      }));
    }
  }, {
    key: 'buildHandler',
    value: function buildHandler(handler) {
      if (!handler) {
        return undefined;
      }
      var _self = this;
      return function (currentTime, $input) {
        if (handler) {
          handler(currentTime, _self, this);
        }
      };
    }
  }, {
    key: 'getDisplayFormat',
    value: function getDisplayFormat() {
      var _props2 = this.props,
          datepicker = _props2.datepicker,
          timepicker = _props2.timepicker,
          displayDateFormat = _props2.displayDateFormat,
          displayDateTimeFormat = _props2.displayDateTimeFormat,
          displayTimeFormat = _props2.displayTimeFormat;


      if (datepicker && timepicker) {
        return displayDateTimeFormat;
      }
      if (datepicker) {
        return displayDateFormat;
      }
      if (timepicker) {
        return displayTimeFormat;
      }
    }
  }, {
    key: 'getValueFormat',
    value: function getValueFormat() {
      var _props3 = this.props,
          datepicker = _props3.datepicker,
          timepicker = _props3.timepicker,
          value_format = _props3.value_format;


      if (value_format) {
        return value_format;
      }
      if (datepicker && timepicker) {
        return ISO_DATETIME_FORMAT;
      }
      if (datepicker) {
        return ISO_DATE_FORMAT;
      }
      if (timepicker) {
        return ISO_TIME_FORMAT;
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(momentValue) {
      var _this3 = this;

      var value = momentValue && (0, _moment2.default)(momentValue, this.getValueFormat()).toDate();
      this.setState(function (_ref2) {
        var inputValue = _ref2.inputValue;
        return {
          inputValue: momentValue ? _this3.getValue(momentValue) : inputValue,
          value: value
        };
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.value;

      if (value) {
        return (0, _moment2.default)(value, this.getValueFormat()).format(this.getDisplayFormat());
      }
      return undefined;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this4 = this;

      var _props4 = this.props,
          input = _props4.input,
          placeholder = _props4.placeholder;


      var ref = function ref(c) {
        _this4.input = c;
      };

      var inputEl = void 0;
      if (input) {
        inputEl = input;
        if (_.isFunction(input)) {
          inputEl = input(this.props, this.state, this);
        }
      } else {
        inputEl = _ref3;
      }
      return _react2.default.cloneElement(inputEl, { ref: ref, placeholder: placeholder, value: this.state.inputValue, onChange: this.onChangeInput });
    }
  }, {
    key: 'render',
    value: function render() {
      var isInvalid = this.state.isInvalid;

      return _jsx('div', {
        className: 'datetimepicker ' + (isInvalid ? 'invalid' : 'valid')
      }, void 0, this.renderInput());
    }
  }], [{
    key: 'setLocale',
    value: function setLocale(locale) {
      _jquery2.default.datetimepicker.setLocale(locale);
      DateTimePicker.setFormatter();
    }
  }, {
    key: 'setFormatter',
    value: function setFormatter(formatter) {
      _jquery2.default.datetimepicker.setDateFormatter(_extends({
        parseDate: function parseDate(date, _format) {
          var d = (0, _moment2.default)(date, _format);
          return d.isValid() ? d.toDate() : false;
        },
        formatDate: function formatDate(date, _format) {
          return (0, _moment2.default)(date).format(_format);
        }
      }, formatter));
    }
  }]);

  return DateTimePicker;
}(_react.Component), _class.propTypes = _extends({
  options: _propTypes2.default.object,
  datepicker: _propTypes2.default.bool,
  timepicker: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  input: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  value: VALUE_PROP_TYPE,
  defaultValue: VALUE_PROP_TYPE,
  value_format: _propTypes2.default.string,

  displayDateFormat: _propTypes2.default.string,
  displayTimeFormat: _propTypes2.default.string,
  displayDateTimeFormat: _propTypes2.default.string,

  onChange: _propTypes2.default.func
}, (0, _lodash2.default)((0, _lodash4.default)(HANDLERS, function (k) {
  return [k, _propTypes2.default.func];
}))), _class.defaultProps = {
  datepicker: true,
  timepicker: true,
  options: null,
  placeholder: '',
  input: null,
  defaultValue: null,
  value: null,
  displayDateFormat: 'DD.MM.YYYY',
  displayTimeFormat: 'HH:mm',
  displayDateTimeFormat: 'DD.MM.YYYY HH:mm',
  value_format: undefined,
  onChange: undefined
}, _temp2);
exports.default = DateTimePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiYnVpbGRBbGxvd0RhdGVUaW1lTWFwIiwiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJkYXRldGltZXMiLCJmb3JtYXQiLCJkYXRldGltZXNfbWFwIiwiZHQiLCJtX2R0IiwiaXNvRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJwdXNoIiwiRGF0ZVRpbWVQaWNrZXIiLCJkZWZhdWx0T3B0aW9ucyIsImZvcm1hdFRpbWUiLCJwcm9wcyIsImRpc3BsYXlUaW1lRm9ybWF0IiwiZm9ybWF0RGF0ZSIsImRpc3BsYXlEYXRlRm9ybWF0IiwiZGF5T2ZXZWVrU3RhcnQiLCJzdGF0ZSIsInZhbHVlIiwiaXNJbnZhbGlkIiwib25DaGFuZ2VJbnB1dCIsImUiLCJzZXRTdGF0ZSIsImlucHV0VmFsdWUiLCJ0YXJnZXQiLCJvbkNoYW5nZUhhbmRsZXIiLCJtb21lbnRWYWx1ZSIsImlzVmFsaWQiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiX2luaXRQbHVnaW4iLCJuZXdQcm9wcyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInNldE9wdGlvbnMiLCJvcHRpb25zIiwiJGlucHV0IiwiZGF0ZXRpbWVwaWNrZXIiLCJkYXRlcGlja2VyIiwidGltZXBpY2tlciIsImRlZmF1bHRWYWx1ZSIsImxhbmciLCJnZXRWYWx1ZSIsImlucHV0IiwiaGFuZGxlcnMiLCJoIiwiYnVpbGRIYW5kbGVyIiwic2VsZiIsImxhc3RBbGxvd1RpbWVzIiwicGlja2VyT3B0aW9ucyIsIm9uR2VuZXJhdGUiLCJjdCIsIiRpIiwiX2FsbG93RGF0ZVRpbWVNYXAiLCJ0aW1lcyIsImFsbG93VGltZXMiLCJtYXAiLCJ0IiwiY21wVGltZXMiLCJzb3J0Iiwiam9pbiIsImFsbG93RGF0ZVRpbWVzIiwiYWxsb3dEYXRlcyIsImdldERpc3BsYXlGb3JtYXQiLCJvbkNoYW5nZURhdGVUaW1lIiwiaGFuZGxlciIsInVuZGVmaW5lZCIsIl9zZWxmIiwiY3VycmVudFRpbWUiLCJkaXNwbGF5RGF0ZVRpbWVGb3JtYXQiLCJ2YWx1ZV9mb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInRvRGF0ZSIsInBsYWNlaG9sZGVyIiwicmVmIiwiYyIsImlucHV0RWwiLCJfIiwiaXNGdW5jdGlvbiIsImNsb25lRWxlbWVudCIsInJlbmRlcklucHV0IiwibG9jYWxlIiwic2V0TG9jYWxlIiwic2V0Rm9ybWF0dGVyIiwiZm9ybWF0dGVyIiwic2V0RGF0ZUZvcm1hdHRlciIsInBhcnNlRGF0ZSIsImRhdGUiLCJfZm9ybWF0IiwiZCIsInByb3BUeXBlcyIsIm9iamVjdCIsImJvb2wiLCJmdW5jIiwiZWxlbWVudCIsImsiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7UUF3Q2dCQSxxQixHQUFBQSxxQjs7QUF0Q2hCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxrQkFBa0IsWUFBeEI7QUFDQSxJQUFNQyxrQkFBa0IsT0FBeEI7QUFDQSxJQUFNQyxzQkFBeUJGLGVBQXpCLFNBQTRDQyxlQUFsRDs7QUFFQSxJQUFNRSxXQUFXLENBQ2YsY0FEZSxFQUVmLGNBRmUsRUFHZixlQUhlLEVBSWYsY0FKZSxFQUtmLGtCQUxlLEVBTWYsUUFOZSxFQU9mLFNBUGUsRUFRZixjQVJlLEVBU2YsWUFUZSxDQUFqQjs7QUFZQSxJQUFNQyxrQkFBa0Isb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDMUMsb0JBQVVDLE1BRGdDLEVBRTFDLG9CQUFVQyxVQUFWLENBQXFCQyxJQUFyQixDQUYwQyxFQUcxQyxvQkFBVUQsVUFBVixrQkFIMEMsRUFJ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UkM7QUFTcEJGLHFCQUFtQixPQVRDO0FBVXBCd0QseUJBQXVCLGtCQVZIO0FBV3BCQyxnQkFBY0osU0FYTTtBQVlwQnJDLFlBQVVxQztBQVpVLEM7a0JBbkJIekQsYyIsImZpbGUiOiJEYXRlVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vLyBmb3IgaW50ZWdyYXRlIGh0dHA6Ly94ZHNvZnQubmV0L2pxcGx1Z2lucy9kYXRldGltZXBpY2tlci9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBmcm9tUGFpcnMgZnJvbSAnbG9kYXNoLmZyb21wYWlycydcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoLm1hcCdcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC5nZXQnXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCAnanF1ZXJ5LWRhdGV0aW1lcGlja2VyL2J1aWxkL2pxdWVyeS5kYXRldGltZXBpY2tlci5mdWxsJ1xuaW1wb3J0ICdqcXVlcnktZGF0ZXRpbWVwaWNrZXIvanF1ZXJ5LmRhdGV0aW1lcGlja2VyLmNzcydcblxuY29uc3QgSVNPX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tREQnXG5jb25zdCBJU09fVElNRV9GT1JNQVQgPSAnSEg6bW0nXG5jb25zdCBJU09fREFURVRJTUVfRk9STUFUID0gYCR7SVNPX0RBVEVfRk9STUFUfVQke0lTT19USU1FX0ZPUk1BVH1gXG5cbmNvbnN0IEhBTkRMRVJTID0gW1xuICAnb25TZWxlY3REYXRlJyxcbiAgJ29uU2VsZWN0VGltZScsXG4gICdvbkNoYW5nZU1vbnRoJyxcbiAgJ29uQ2hhbmdlWWVhcicsXG4gICdvbkNoYW5nZURhdGVUaW1lJyxcbiAgJ29uU2hvdycsXG4gICdvbkNsb3NlJyxcbiAgJ29uU2VsZWN0RGF0ZScsXG4gICdvbkdlbmVyYXRlJ1xuXVxuXG5jb25zdCBWQUxVRV9QUk9QX1RZUEUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIFByb3BUeXBlcy5udW1iZXJcbl0pXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEFsbG93RGF0ZVRpbWVNYXAgKGRhdGV0aW1lcywgZm9ybWF0KSB7XG4gIGNvbnN0IGRhdGV0aW1lc19tYXAgPSB7fVxuICBmb3IgKGxldCBkdCBvZiBkYXRldGltZXMpIHtcbiAgICBjb25zdCBtX2R0ID0gbW9tZW50KGR0LCBmb3JtYXQpXG4gICAgY29uc3QgaXNvRGF0ZSA9IG1fZHQudG9JU09TdHJpbmcoKS5zcGxpdCgvVC8pWzBdXG4gICAgaWYgKCFkYXRldGltZXNfbWFwW2lzb0RhdGVdKSB7XG4gICAgICBkYXRldGltZXNfbWFwW2lzb0RhdGVdID0gW11cbiAgICB9XG4gICAgZGF0ZXRpbWVzX21hcFtpc29EYXRlXS5wdXNoKG1fZHQpXG4gIH1cbiAgcmV0dXJuIGRhdGV0aW1lc19tYXBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0ZXBpY2tlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGltZXBpY2tlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHZhbHVlOiBWQUxVRV9QUk9QX1RZUEUsXG4gICAgZGVmYXVsdFZhbHVlOiBWQUxVRV9QUk9QX1RZUEUsXG4gICAgdmFsdWVfZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgZGlzcGxheURhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheVRpbWVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheURhdGVUaW1lRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC4uLmZyb21QYWlycyhtYXAoSEFORExFUlMsIGsgPT4gW2ssIFByb3BUeXBlcy5mdW5jXSkpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGVwaWNrZXI6IHRydWUsXG4gICAgdGltZXBpY2tlcjogdHJ1ZSxcbiAgICBvcHRpb25zOiBudWxsLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dDogbnVsbCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgZGlzcGxheURhdGVGb3JtYXQ6ICdERC5NTS5ZWVlZJyxcbiAgICBkaXNwbGF5VGltZUZvcm1hdDogJ0hIOm1tJyxcbiAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQ6ICdERC5NTS5ZWVlZIEhIOm1tJyxcbiAgICB2YWx1ZV9mb3JtYXQ6IHVuZGVmaW5lZCxcbiAgICBvbkNoYW5nZTogdW5kZWZpbmVkXG4gIH1cblxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBmb3JtYXRUaW1lOiB0aGlzLnByb3BzLmRpc3BsYXlUaW1lRm9ybWF0LFxuICAgIGZvcm1hdERhdGU6IHRoaXMucHJvcHMuZGlzcGxheURhdGVGb3JtYXQsXG4gICAgZGF5T2ZXZWVrU3RhcnQ6IDFcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgIGlzSW52YWxpZDogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0TG9jYWxlKGxvY2FsZSlcbiAgICBEYXRlVGltZVBpY2tlci5zZXRGb3JtYXR0ZXIoKVxuICB9XG5cbiAgc3RhdGljIHNldEZvcm1hdHRlciAoZm9ybWF0dGVyKSB7XG4gICAgJC5kYXRldGltZXBpY2tlci5zZXREYXRlRm9ybWF0dGVyKHtcbiAgICAgIHBhcnNlRGF0ZSAoZGF0ZSwgX2Zvcm1hdCkge1xuICAgICAgICBjb25zdCBkID0gbW9tZW50KGRhdGUsIF9mb3JtYXQpXG4gICAgICAgIHJldHVybiBkLmlzVmFsaWQoKSA/IGQudG9EYXRlKCkgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgZm9ybWF0RGF0ZSAoZGF0ZSwgX2Zvcm1hdCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChfZm9ybWF0KVxuICAgICAgfSxcbiAgICAgIC4uLmZvcm1hdHRlclxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faW5pdFBsdWdpbigpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXdQcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdQcm9wcy52YWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSBuZXh0U3RhdGUudmFsdWUpIHtcbiAgICAgIC8vIGNvbnN0IG5leHRWYWx1ZSA9IG1vbWVudChuZXh0U3RhdGUudmFsdWUpXG4gICAgICB0aGlzLnNldE9wdGlvbnMoe3ZhbHVlOiBuZXh0U3RhdGUudmFsdWV9KVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB0aGlzLiRpbnB1dC5kYXRldGltZXBpY2tlcihvcHRpb25zKVxuICB9XG5cbiAgX2luaXRQbHVnaW4gKCkge1xuICAgIGNvbnN0IHtvcHRpb25zLCBkYXRlcGlja2VyLCB0aW1lcGlja2VyLCBkZWZhdWx0VmFsdWUsIGxhbmd9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpIHx8ICcnXG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZGVmYXVsdFZhbHVlIHx8IHZhbHVlXG5cbiAgICBjb25zdCAkaW5wdXQgPSAkKGZpbmRET01Ob2RlKHRoaXMuaW5wdXQpKVxuICAgIGNvbnN0IGhhbmRsZXJzID0gZnJvbVBhaXJzKG1hcChIQU5ETEVSUywgaCA9PiBbaCwgdGhpcy5idWlsZEhhbmRsZXIodGhpcy5wcm9wc1toXSldKSlcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgbGV0IGxhc3RBbGxvd1RpbWVzXG4gICAgY29uc3QgcGlja2VyT3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5oYW5kbGVycyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBvbkdlbmVyYXRlOiAoY3QsICRpKSA9PiB7XG4gICAgICAgIGlmIChoYW5kbGVycy5vbkdlbmVyYXRlKSB7XG4gICAgICAgICAgaGFuZGxlcnMub25HZW5lcmF0ZShjdCwgJGkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuX2FsbG93RGF0ZVRpbWVNYXApIHtcbiAgICAgICAgICBjb25zdCBkdCA9IG1vbWVudChjdCkuZm9ybWF0KElTT19EQVRFX0ZPUk1BVClcbiAgICAgICAgICBjb25zdCB0aW1lcyA9IHNlbGYuX2FsbG93RGF0ZVRpbWVNYXBbZHRdXG4gICAgICAgICAgaWYgKHRpbWVzKSB7XG4gICAgICAgICAgICBsZXQgYWxsb3dUaW1lcyA9IHRpbWVzLm1hcCh0ID0+IHQuZm9ybWF0KHBpY2tlck9wdGlvbnMuZm9ybWF0VGltZSkpXG4gICAgICAgICAgICBjb25zdCBjbXBUaW1lcyA9IGFsbG93VGltZXMuc29ydCgpLmpvaW4oJywnKTtcbiAgICAgICAgICAgIGlmIChsYXN0QWxsb3dUaW1lcyAhPT0gY21wVGltZXMpIHtcbiAgICAgICAgICAgICAgbGFzdEFsbG93VGltZXMgPSBjbXBUaW1lc1xuICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgIGFsbG93VGltZXNcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWxsb3dEYXRlVGltZXMgPSBfZ2V0KHBpY2tlck9wdGlvbnMsICdhbGxvd0RhdGVUaW1lcycpXG4gICAgaWYgKGFsbG93RGF0ZVRpbWVzKSB7XG4gICAgICB0aGlzLl9hbGxvd0RhdGVUaW1lTWFwID0gYnVpbGRBbGxvd0RhdGVUaW1lTWFwKGFsbG93RGF0ZVRpbWVzLCBJU09fREFURVRJTUVfRk9STUFUKVxuICAgICAgcGlja2VyT3B0aW9ucy5hbGxvd0RhdGVzID0gYWxsb3dEYXRlVGltZXMubWFwKFxuICAgICAgICBkdCA9PiBtb21lbnQoZHQsIElTT19EQVRFVElNRV9GT1JNQVQpLmZvcm1hdChwaWNrZXJPcHRpb25zLmZvcm1hdERhdGUpXG4gICAgICApXG4gICAgfVxuXG4gICAgJGlucHV0LmRhdGV0aW1lcGlja2VyKCdkZXN0cm95JylcbiAgICB0aGlzLiRpbnB1dCA9ICRpbnB1dC5kYXRldGltZXBpY2tlcih7XG4gICAgICAuLi5waWNrZXJPcHRpb25zLFxuICAgICAgZm9ybWF0OiB0aGlzLmdldERpc3BsYXlGb3JtYXQoKSxcbiAgICAgIGRhdGVwaWNrZXIsXG4gICAgICB0aW1lcGlja2VyLFxuICAgICAgb25DaGFuZ2VEYXRlVGltZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIsXG4gICAgICB2YWx1ZTogaW5wdXRWYWx1ZSAvLyAmJiBtb21lbnQoaW5wdXRWYWx1ZSkudG9EYXRlKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGFuZ2VJbnB1dCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWV9KVxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IGlzSW52YWxpZCA9IGZhbHNlXG4gICAgbGV0IG1vbWVudFZhbHVlID0gbnVsbFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbW9tZW50VmFsdWUgPSBtb21lbnQodmFsdWUsIHRydWUpXG4gICAgICAgIGlmICghbW9tZW50VmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgbW9tZW50VmFsdWUgPSBudWxsXG4gICAgICAgICAgaXNJbnZhbGlkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG1vbWVudFZhbHVlID0gbnVsbFxuICAgICAgICBpc0ludmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZShtb21lbnRWYWx1ZSlcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ludmFsaWR9KVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobW9tZW50VmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBidWlsZEhhbmRsZXIgKGhhbmRsZXIpIHtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgY29uc3QgX3NlbGYgPSB0aGlzXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJyZW50VGltZSwgJGlucHV0KSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVyKGN1cnJlbnRUaW1lLCBfc2VsZiwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXREaXNwbGF5Rm9ybWF0ICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRlcGlja2VyLCB0aW1lcGlja2VyLFxuICAgICAgZGlzcGxheURhdGVGb3JtYXQsXG4gICAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQsXG4gICAgICBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVUaW1lRm9ybWF0XG4gICAgfVxuICAgIGlmIChkYXRlcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVGb3JtYXRcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0ICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRlcGlja2VyLCB0aW1lcGlja2VyLFxuICAgICAgdmFsdWVfZm9ybWF0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh2YWx1ZV9mb3JtYXQpIHtcbiAgICAgIHJldHVybiB2YWx1ZV9mb3JtYXRcbiAgICB9XG4gICAgaWYgKGRhdGVwaWNrZXIgJiYgdGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19EQVRFVElNRV9GT1JNQVRcbiAgICB9XG4gICAgaWYgKGRhdGVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBJU09fREFURV9GT1JNQVRcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBJU09fVElNRV9GT1JNQVRcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSAobW9tZW50VmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudFZhbHVlICYmIG1vbWVudChtb21lbnRWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKS50b0RhdGUoKVxuICAgIHRoaXMuc2V0U3RhdGUoKHtpbnB1dFZhbHVlfSkgPT4gKFxuICAgICAge1xuICAgICAgICBpbnB1dFZhbHVlOiBtb21lbnRWYWx1ZSA/IHRoaXMuZ2V0VmFsdWUobW9tZW50VmFsdWUpIDogaW5wdXRWYWx1ZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH1cbiAgICApKVxuICB9XG5cbiAgZ2V0VmFsdWUgKHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKS5mb3JtYXQodGhpcy5nZXREaXNwbGF5Rm9ybWF0KCkpXG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlbmRlcklucHV0ICgpIHtcbiAgICBjb25zdCB7aW5wdXQsIHBsYWNlaG9sZGVyfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlZiA9IChjKSA9PiB7IHRoaXMuaW5wdXQgPSBjIH1cblxuICAgIGxldCBpbnB1dEVsXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dEVsID0gaW5wdXRcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oaW5wdXQpKSB7XG4gICAgICAgIGlucHV0RWwgPSBpbnB1dCh0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB0aGlzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dEVsID0gKDxpbnB1dCB0eXBlPVwidGV4dFwiLz4pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXRFbCxcbiAgICAgICAge3JlZiwgcGxhY2Vob2xkZXIsIHZhbHVlOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlSW5wdXR9KVxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzSW52YWxpZH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGF0ZXRpbWVwaWNrZXIgJHtpc0ludmFsaWQgPyAnaW52YWxpZCcgOiAndmFsaWQnfWB9PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=