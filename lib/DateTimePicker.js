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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _lodash = require('lodash.frompairs');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.map');

var _lodash4 = _interopRequireDefault(_lodash3);

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

var _ref2 = _jsx('input', {
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
      value: _this.props.value
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
        this.setState({ value: newProps.value });
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


      var inputValue = defaultValue || value;

      _jquery2.default.datetimepicker.setDateFormatter({
        parseDate: function parseDate(date, _format) {
          var d = (0, _moment2.default)(date, _format);
          return d.isValid() ? d.toDate() : false;
        },
        formatDate: function formatDate(date, _format) {
          return (0, _moment2.default)(date).format(_format);
        }
      });
      var $input = (0, _jquery2.default)((0, _reactDom.findDOMNode)(this.input));
      var handlers = (0, _lodash2.default)((0, _lodash4.default)(HANDLERS, function (h) {
        return [h, _this2.buildHandler(_this2.props[h])];
      }));
      var _options = _extends({}, this.defaultOptions, handlers, options);
      $input.datetimepicker('destroy');
      this.$input = $input.datetimepicker(_extends({}, _options, {
        format: this.getDisplayFormat(),
        datepicker: datepicker,
        timepicker: timepicker,
        onChangeDateTime: this.onChangeHandler.bind(this),
        value: inputValue // && moment(inputValue).toDate()
      }));
    }
  }, {
    key: 'onChangeHandler',
    value: function onChangeHandler(value) {
      value = (0, _moment2.default)(value, true);
      if (!value.isValid()) {
        value = null;
      }
      this.setState({ value: value });
      if (this.props.onChange) {
        this.props.onChange(value);
      }
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
    key: 'getValue',
    value: function getValue() {
      var value = this.state.value;

      if (value) {
        return (0, _moment2.default)(value, this.getValueFormat()).format(this.getDisplayFormat());
      }
      return undefined;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this3 = this;

      var _props4 = this.props,
          input = _props4.input,
          placeholder = _props4.placeholder;


      var ref = function ref(c) {
        _this3.input = c;
      };

      var inputEl = void 0;
      if (input) {
        inputEl = input;
        if (_.isFunction(input)) {
          inputEl = input(this.props, this.state, this);
        }
      } else {
        inputEl = _ref2;
      }
      return _react2.default.cloneElement(inputEl, { ref: ref, placeholder: placeholder, value: this.getValue() });
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: 'datetimepicker'
      }, void 0, this.renderInput());
    }
  }], [{
    key: 'setLocale',
    value: function setLocale(locale) {
      _jquery2.default.datetimepicker.setLocale(locale);
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
  value_format: undefined
}, _temp2);
exports.default = DateTimePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJEYXRlVGltZVBpY2tlciIsImRlZmF1bHRPcHRpb25zIiwiZm9ybWF0VGltZSIsInByb3BzIiwiZGlzcGxheVRpbWVGb3JtYXQiLCJmb3JtYXREYXRlIiwiZGlzcGxheURhdGVGb3JtYXQiLCJkYXlPZldlZWtTdGFydCIsInN0YXRlIiwidmFsdWUiLCJfaW5pdFBsdWdpbiIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsIiRpbnB1dCIsImRhdGV0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsInRpbWVwaWNrZXIiLCJkZWZhdWx0VmFsdWUiLCJsYW5nIiwiaW5wdXRWYWx1ZSIsInNldERhdGVGb3JtYXR0ZXIiLCJwYXJzZURhdGUiLCJkYXRlIiwiX2Zvcm1hdCIsImQiLCJpc1ZhbGlkIiwidG9EYXRlIiwiZm9ybWF0IiwiaW5wdXQiLCJoYW5kbGVycyIsImgiLCJidWlsZEhhbmRsZXIiLCJfb3B0aW9ucyIsImdldERpc3BsYXlGb3JtYXQiLCJvbkNoYW5nZURhdGVUaW1lIiwib25DaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9uQ2hhbmdlIiwiaGFuZGxlciIsInVuZGVmaW5lZCIsIl9zZWxmIiwiY3VycmVudFRpbWUiLCJkaXNwbGF5RGF0ZVRpbWVGb3JtYXQiLCJ2YWx1ZV9mb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInBsYWNlaG9sZGVyIiwicmVmIiwiYyIsImlucHV0RWwiLCJfIiwiaXNGdW5jdGlvbiIsImNsb25lRWxlbWVudCIsImdldFZhbHVlIiwicmVuZGVySW5wdXQiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJib29sIiwiZnVuYyIsImVsZW1lbnQiLCJrIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsWUFBeEI7QUFDQSxJQUFNQyxrQkFBa0IsT0FBeEI7QUFDQSxJQUFNQyxzQkFBeUJGLGVBQXpCLFNBQTRDQyxlQUFsRDs7QUFFQSxJQUFNRSxXQUFXLENBQ2YsY0FEZSxFQUVmLGNBRmUsRUFHZixlQUhlLEVBSWYsY0FKZSxFQUtmLGtCQUxlLEVBTWYsUUFOZSxFQU9mLFNBUGUsRUFRZixjQVJlLEVBU2YsWUFUZSxDQUFqQjs7QUFZQSxJQUFNQyxrQkFBa0Isb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDMUMsb0JBQVVDLE1BRGdDLEVBRTFDLG9CQUFVQyxVQUFWLENBQXFCQyxJQUFyQixDQUYwQyxFQUcxQyxvQkFBVUQsVUFBVixrQkFIMEMsRUFJMUMsb0JBQVVFLE1BSmdDLENBQXBCLENBQXhCOzs7UUFpTTZCOzs7SUExTFJDLGM7Ozs7Ozs7Ozs7Ozs7O3NNQWlDbkJDLGMsR0FBaUI7QUFDZkMsa0JBQVksTUFBS0MsS0FBTCxDQUFXQyxpQkFEUjtBQUVmQyxrQkFBWSxNQUFLRixLQUFMLENBQVdHLGlCQUZSO0FBR2ZDLHNCQUFnQjtBQUhELEssUUFNakJDLEssR0FBUTtBQUNOQyxhQUFPLE1BQUtOLEtBQUwsQ0FBV007QUFEWixLOzs7Ozt3Q0FRYTtBQUNuQixXQUFLQyxXQUFMO0FBQ0Q7Ozs4Q0FFMEJDLFEsRUFBVTtBQUNuQyxVQUFJLEtBQUtSLEtBQUwsQ0FBV00sS0FBWCxLQUFxQkUsU0FBU0YsS0FBbEMsRUFBeUM7QUFDdkMsYUFBS0csUUFBTCxDQUFjLEVBQUNILE9BQU9FLFNBQVNGLEtBQWpCLEVBQWQ7QUFDRDtBQUNGOzs7d0NBRW9CSSxTLEVBQVdDLFMsRUFBVztBQUN6QyxVQUFJLEtBQUtOLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQkssVUFBVUwsS0FBbkMsRUFBMEM7QUFDeEM7QUFDQSxhQUFLTSxVQUFMLENBQWdCLEVBQUNOLE9BQU9LLFVBQVVMLEtBQWxCLEVBQWhCO0FBQ0Q7QUFDRjs7OytCQUVXTyxPLEVBQVM7QUFDbkIsV0FBS0MsTUFBTCxDQUFZQyxjQUFaLENBQTJCRixPQUEzQjtBQUNEOzs7a0NBRWM7QUFBQTs7QUFBQSxtQkFDaUQsS0FBS2IsS0FEdEQ7QUFBQSxVQUNOYSxPQURNLFVBQ05BLE9BRE07QUFBQSxVQUNHRyxVQURILFVBQ0dBLFVBREg7QUFBQSxVQUNlQyxVQURmLFVBQ2VBLFVBRGY7QUFBQSxVQUMyQkMsWUFEM0IsVUFDMkJBLFlBRDNCO0FBQUEsVUFDeUNDLElBRHpDLFVBQ3lDQSxJQUR6QztBQUFBLFVBRU5iLEtBRk0sR0FFRyxLQUFLRCxLQUZSLENBRU5DLEtBRk07OztBQUliLFVBQU1jLGFBQWFGLGdCQUFnQlosS0FBbkM7O0FBRUEsdUJBQUVTLGNBQUYsQ0FBaUJNLGdCQUFqQixDQUFrQztBQUNoQ0MsaUJBRGdDLHFCQUN0QkMsSUFEc0IsRUFDaEJDLE9BRGdCLEVBQ1A7QUFDdkIsY0FBTUMsSUFBSSxzQkFBT0YsSUFBUCxFQUFhQyxPQUFiLENBQVY7QUFDQSxpQkFBT0MsRUFBRUMsT0FBRixLQUFjRCxFQUFFRSxNQUFGLEVBQWQsR0FBMkIsS0FBbEM7QUFDRCxTQUorQjtBQU1oQ3pCLGtCQU5nQyxzQkFNckJxQixJQU5xQixFQU1mQyxPQU5lLEVBTU47QUFDeEIsaUJBQU8sc0JBQU9ELElBQVAsRUFBYUssTUFBYixDQUFvQkosT0FBcEIsQ0FBUDtBQUNEO0FBUitCLE9BQWxDO0FBVUEsVUFBTVYsU0FBUyxzQkFBRSwyQkFBWSxLQUFLZSxLQUFqQixDQUFGLENBQWY7QUFDQSxVQUFNQyxXQUFXLHNCQUFVLHNCQUFJeEMsUUFBSixFQUFjO0FBQUEsZUFBSyxDQUFDeUMsQ0FBRCxFQUFJLE9BQUtDLFlBQUwsQ0FBa0IsT0FBS2hDLEtBQUwsQ0FBVytCLENBQVgsQ0FBbEIsQ0FBSixDQUFMO0FBQUEsT0FBZCxDQUFWLENBQWpCO0FBQ0EsVUFBTUUsd0JBQ0QsS0FBS25DLGNBREosRUFFRGdDLFFBRkMsRUFHRGpCLE9BSEMsQ0FBTjtBQUtBQyxhQUFPQyxjQUFQLENBQXNCLFNBQXRCO0FBQ0EsV0FBS0QsTUFBTCxHQUFjQSxPQUFPQyxjQUFQLGNBQ1RrQixRQURTO0FBRVpMLGdCQUFRLEtBQUtNLGdCQUFMLEVBRkk7QUFHWmxCLDhCQUhZO0FBSVpDLDhCQUpZO0FBS1prQiwwQkFBa0IsS0FBS0MsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FMTjtBQU1aL0IsZUFBT2MsVUFOSyxDQU1NO0FBTk4sU0FBZDtBQVFEOzs7b0NBRWdCZCxLLEVBQU87QUFDdEJBLGNBQVEsc0JBQU9BLEtBQVAsRUFBYyxJQUFkLENBQVI7QUFDQSxVQUFJLENBQUNBLE1BQU1vQixPQUFOLEVBQUwsRUFBc0I7QUFDcEJwQixnQkFBUSxJQUFSO0FBQ0Q7QUFDRCxXQUFLRyxRQUFMLENBQWMsRUFBQ0gsWUFBRCxFQUFkO0FBQ0EsVUFBSSxLQUFLTixLQUFMLENBQVdzQyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUt0QyxLQUFMLENBQVdzQyxRQUFYLENBQW9CaEMsS0FBcEI7QUFDRDtBQUNGOzs7aUNBRWFpQyxPLEVBQVM7QUFDckIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixlQUFPQyxTQUFQO0FBQ0Q7QUFDRCxVQUFNQyxRQUFRLElBQWQ7QUFDQSxhQUFPLFVBQVVDLFdBQVYsRUFBdUI1QixNQUF2QixFQUErQjtBQUNwQyxZQUFJeUIsT0FBSixFQUFhO0FBQ1hBLGtCQUFRRyxXQUFSLEVBQXFCRCxLQUFyQixFQUE0QixJQUE1QjtBQUNEO0FBQ0YsT0FKRDtBQUtEOzs7dUNBRW1CO0FBQUEsb0JBTWQsS0FBS3pDLEtBTlM7QUFBQSxVQUVoQmdCLFVBRmdCLFdBRWhCQSxVQUZnQjtBQUFBLFVBRUpDLFVBRkksV0FFSkEsVUFGSTtBQUFBLFVBR2hCZCxpQkFIZ0IsV0FHaEJBLGlCQUhnQjtBQUFBLFVBSWhCd0MscUJBSmdCLFdBSWhCQSxxQkFKZ0I7QUFBQSxVQUtoQjFDLGlCQUxnQixXQUtoQkEsaUJBTGdCOzs7QUFRbEIsVUFBSWUsY0FBY0MsVUFBbEIsRUFBOEI7QUFDNUIsZUFBTzBCLHFCQUFQO0FBQ0Q7QUFDRCxVQUFJM0IsVUFBSixFQUFnQjtBQUNkLGVBQU9iLGlCQUFQO0FBQ0Q7QUFDRCxVQUFJYyxVQUFKLEVBQWdCO0FBQ2QsZUFBT2hCLGlCQUFQO0FBQ0Q7QUFDRjs7O3FDQUVpQjtBQUFBLG9CQUlaLEtBQUtELEtBSk87QUFBQSxVQUVkZ0IsVUFGYyxXQUVkQSxVQUZjO0FBQUEsVUFFRkMsVUFGRSxXQUVGQSxVQUZFO0FBQUEsVUFHZDJCLFlBSGMsV0FHZEEsWUFIYzs7O0FBTWhCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEIsZUFBT0EsWUFBUDtBQUVEO0FBQ0QsVUFBSTVCLGNBQWNDLFVBQWxCLEVBQThCO0FBQzVCLGVBQU81QixtQkFBUDtBQUNEO0FBQ0QsVUFBSTJCLFVBQUosRUFBZ0I7QUFDZCxlQUFPN0IsZUFBUDtBQUNEO0FBQ0QsVUFBSThCLFVBQUosRUFBZ0I7QUFDZCxlQUFPN0IsZUFBUDtBQUNEO0FBRUY7OzsrQkFFVztBQUFBLFVBQ0hrQixLQURHLEdBQ00sS0FBS0QsS0FEWCxDQUNIQyxLQURHOztBQUVWLFVBQUlBLEtBQUosRUFBVztBQUNULGVBQU8sc0JBQU9BLEtBQVAsRUFBYyxLQUFLdUMsY0FBTCxFQUFkLEVBQXFDakIsTUFBckMsQ0FBNEMsS0FBS00sZ0JBQUwsRUFBNUMsQ0FBUDtBQUNEO0FBQ0QsYUFBT00sU0FBUDtBQUNEOzs7a0NBRWM7QUFBQTs7QUFBQSxvQkFDZ0IsS0FBS3hDLEtBRHJCO0FBQUEsVUFDTjZCLEtBRE0sV0FDTkEsS0FETTtBQUFBLFVBQ0NpQixXQURELFdBQ0NBLFdBREQ7OztBQUdiLFVBQU1DLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxDQUFELEVBQU87QUFBRSxlQUFLbkIsS0FBTCxHQUFhbUIsQ0FBYjtBQUFnQixPQUFyQzs7QUFFQSxVQUFJQyxnQkFBSjtBQUNBLFVBQUlwQixLQUFKLEVBQVc7QUFDVG9CLGtCQUFVcEIsS0FBVjtBQUNBLFlBQUlxQixFQUFFQyxVQUFGLENBQWF0QixLQUFiLENBQUosRUFBeUI7QUFDdkJvQixvQkFBVXBCLE1BQU0sS0FBSzdCLEtBQVgsRUFBa0IsS0FBS0ssS0FBdkIsRUFBOEIsSUFBOUIsQ0FBVjtBQUNEO0FBQ0YsT0FMRCxNQUtPO0FBQ0w0QztBQUNEO0FBQ0QsYUFDRSxnQkFBTUcsWUFBTixDQUFtQkgsT0FBbkIsRUFBNEIsRUFBQ0YsUUFBRCxFQUFNRCx3QkFBTixFQUFtQnhDLE9BQU8sS0FBSytDLFFBQUwsRUFBMUIsRUFBNUIsQ0FERjtBQUdEOzs7NkJBRVM7QUFDUjtBQUFBLG1CQUNpQjtBQURqQixpQkFFSyxLQUFLQyxXQUFMLEVBRkw7QUFLRDs7OzhCQTVKaUJDLE0sRUFBUTtBQUN4Qix1QkFBRXhDLGNBQUYsQ0FBaUJ5QyxTQUFqQixDQUEyQkQsTUFBM0I7QUFDRDs7Ozs0QkE1Q01FLFM7QUFDTDVDLFdBQVMsb0JBQVU2QyxNO0FBQ25CMUMsY0FBWSxvQkFBVTJDLEk7QUFDdEIxQyxjQUFZLG9CQUFVMEMsSTtBQUN0QmIsZUFBYSxvQkFBVXJELE07QUFDdkJvQyxTQUFPLG9CQUFVckMsU0FBVixDQUFvQixDQUFDLG9CQUFVb0UsSUFBWCxFQUFpQixvQkFBVUMsT0FBM0IsQ0FBcEIsQztBQUNQdkQsU0FBT2YsZTtBQUNQMkIsZ0JBQWMzQixlO0FBQ2RxRCxnQkFBYyxvQkFBVW5ELE07O0FBRXhCVSxxQkFBbUIsb0JBQVVWLE07QUFDN0JRLHFCQUFtQixvQkFBVVIsTTtBQUM3QmtELHlCQUF1QixvQkFBVWxELE07O0FBRWpDNkMsWUFBVSxvQkFBVXNCO0dBQ2pCLHNCQUFVLHNCQUFJdEUsUUFBSixFQUFjO0FBQUEsU0FBSyxDQUFDd0UsQ0FBRCxFQUFJLG9CQUFVRixJQUFkLENBQUw7QUFBQSxDQUFkLENBQVYsQyxVQUdFRyxZLEdBQWU7QUFDcEIvQyxjQUFZLElBRFE7QUFFcEJDLGNBQVksSUFGUTtBQUdwQkosV0FBUyxJQUhXO0FBSXBCaUMsZUFBYSxFQUpPO0FBS3BCakIsU0FBTyxJQUxhO0FBTXBCWCxnQkFBYyxJQU5NO0FBT3BCWixTQUFPLElBUGE7QUFRcEJILHFCQUFtQixZQVJDO0FBU3BCRixxQkFBbUIsT0FUQztBQVVwQjBDLHlCQUF1QixrQkFWSDtBQVdwQkMsZ0JBQWNKO0FBWE0sQztrQkFuQkgzQyxjIiwiZmlsZSI6IkRhdGVUaW1lUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8vIGZvciBpbnRlZ3JhdGUgaHR0cDovL3hkc29mdC5uZXQvanFwbHVnaW5zL2RhdGV0aW1lcGlja2VyL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IGZyb21QYWlycyBmcm9tICdsb2Rhc2guZnJvbXBhaXJzJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gubWFwJ1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pbXBvcnQgJ2pxdWVyeS1kYXRldGltZXBpY2tlci9idWlsZC9qcXVlcnkuZGF0ZXRpbWVwaWNrZXIuZnVsbCdcbmltcG9ydCAnanF1ZXJ5LWRhdGV0aW1lcGlja2VyL2pxdWVyeS5kYXRldGltZXBpY2tlci5jc3MnXG5cbmNvbnN0IElTT19EQVRFX0ZPUk1BVCA9ICdZWVlZLU1NLUREJ1xuY29uc3QgSVNPX1RJTUVfRk9STUFUID0gJ0hIOm1tJ1xuY29uc3QgSVNPX0RBVEVUSU1FX0ZPUk1BVCA9IGAke0lTT19EQVRFX0ZPUk1BVH1UJHtJU09fVElNRV9GT1JNQVR9YFxuXG5jb25zdCBIQU5ETEVSUyA9IFtcbiAgJ29uU2VsZWN0RGF0ZScsXG4gICdvblNlbGVjdFRpbWUnLFxuICAnb25DaGFuZ2VNb250aCcsXG4gICdvbkNoYW5nZVllYXInLFxuICAnb25DaGFuZ2VEYXRlVGltZScsXG4gICdvblNob3cnLFxuICAnb25DbG9zZScsXG4gICdvblNlbGVjdERhdGUnLFxuICAnb25HZW5lcmF0ZSdcbl1cblxuY29uc3QgVkFMVUVfUFJPUF9UWVBFID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBQcm9wVHlwZXMuaW5zdGFuY2VPZihtb21lbnQpLFxuICBQcm9wVHlwZXMubnVtYmVyXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRlcGlja2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lcGlja2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdmFsdWU6IFZBTFVFX1BST1BfVFlQRSxcbiAgICBkZWZhdWx0VmFsdWU6IFZBTFVFX1BST1BfVFlQRSxcbiAgICB2YWx1ZV9mb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBkaXNwbGF5RGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5VGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLi4uZnJvbVBhaXJzKG1hcChIQU5ETEVSUywgayA9PiBbaywgUHJvcFR5cGVzLmZ1bmNdKSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0ZXBpY2tlcjogdHJ1ZSxcbiAgICB0aW1lcGlja2VyOiB0cnVlLFxuICAgIG9wdGlvbnM6IG51bGwsXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIGlucHV0OiBudWxsLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBkaXNwbGF5RGF0ZUZvcm1hdDogJ0RELk1NLllZWVknLFxuICAgIGRpc3BsYXlUaW1lRm9ybWF0OiAnSEg6bW0nLFxuICAgIGRpc3BsYXlEYXRlVGltZUZvcm1hdDogJ0RELk1NLllZWVkgSEg6bW0nLFxuICAgIHZhbHVlX2Zvcm1hdDogdW5kZWZpbmVkXG4gIH1cblxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBmb3JtYXRUaW1lOiB0aGlzLnByb3BzLmRpc3BsYXlUaW1lRm9ybWF0LFxuICAgIGZvcm1hdERhdGU6IHRoaXMucHJvcHMuZGlzcGxheURhdGVGb3JtYXQsXG4gICAgZGF5T2ZXZWVrU3RhcnQ6IDFcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gIH1cblxuICBzdGF0aWMgc2V0TG9jYWxlIChsb2NhbGUpIHtcbiAgICAkLmRhdGV0aW1lcGlja2VyLnNldExvY2FsZShsb2NhbGUpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faW5pdFBsdWdpbigpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXdQcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IG5ld1Byb3BzLnZhbHVlfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSBuZXh0U3RhdGUudmFsdWUpIHtcbiAgICAgIC8vIGNvbnN0IG5leHRWYWx1ZSA9IG1vbWVudChuZXh0U3RhdGUudmFsdWUpXG4gICAgICB0aGlzLnNldE9wdGlvbnMoe3ZhbHVlOiBuZXh0U3RhdGUudmFsdWV9KVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB0aGlzLiRpbnB1dC5kYXRldGltZXBpY2tlcihvcHRpb25zKVxuICB9XG5cbiAgX2luaXRQbHVnaW4gKCkge1xuICAgIGNvbnN0IHtvcHRpb25zLCBkYXRlcGlja2VyLCB0aW1lcGlja2VyLCBkZWZhdWx0VmFsdWUsIGxhbmd9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZGVmYXVsdFZhbHVlIHx8IHZhbHVlXG5cbiAgICAkLmRhdGV0aW1lcGlja2VyLnNldERhdGVGb3JtYXR0ZXIoe1xuICAgICAgcGFyc2VEYXRlKGRhdGUsIF9mb3JtYXQpIHtcbiAgICAgICAgY29uc3QgZCA9IG1vbWVudChkYXRlLCBfZm9ybWF0KVxuICAgICAgICByZXR1cm4gZC5pc1ZhbGlkKCkgPyBkLnRvRGF0ZSgpIDogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGZvcm1hdERhdGUoZGF0ZSwgX2Zvcm1hdCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChfZm9ybWF0KVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgJGlucHV0ID0gJChmaW5kRE9NTm9kZSh0aGlzLmlucHV0KSlcbiAgICBjb25zdCBoYW5kbGVycyA9IGZyb21QYWlycyhtYXAoSEFORExFUlMsIGggPT4gW2gsIHRoaXMuYnVpbGRIYW5kbGVyKHRoaXMucHJvcHNbaF0pXSkpXG4gICAgY29uc3QgX29wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4uaGFuZGxlcnMsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfVxuICAgICRpbnB1dC5kYXRldGltZXBpY2tlcignZGVzdHJveScpXG4gICAgdGhpcy4kaW5wdXQgPSAkaW5wdXQuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgLi4uX29wdGlvbnMsXG4gICAgICBmb3JtYXQ6IHRoaXMuZ2V0RGlzcGxheUZvcm1hdCgpLFxuICAgICAgZGF0ZXBpY2tlcixcbiAgICAgIHRpbWVwaWNrZXIsXG4gICAgICBvbkNoYW5nZURhdGVUaW1lOiB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgdmFsdWU6IGlucHV0VmFsdWUgLy8gJiYgbW9tZW50KGlucHV0VmFsdWUpLnRvRGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hhbmdlSGFuZGxlciAodmFsdWUpIHtcbiAgICB2YWx1ZSA9IG1vbWVudCh2YWx1ZSwgdHJ1ZSlcbiAgICBpZiAoIXZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgdmFsdWUgPSBudWxsXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlfSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBidWlsZEhhbmRsZXIgKGhhbmRsZXIpIHtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgY29uc3QgX3NlbGYgPSB0aGlzXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJyZW50VGltZSwgJGlucHV0KSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVyKGN1cnJlbnRUaW1lLCBfc2VsZiwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXREaXNwbGF5Rm9ybWF0ICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRlcGlja2VyLCB0aW1lcGlja2VyLFxuICAgICAgZGlzcGxheURhdGVGb3JtYXQsXG4gICAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQsXG4gICAgICBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVUaW1lRm9ybWF0XG4gICAgfVxuICAgIGlmIChkYXRlcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVGb3JtYXRcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0ICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRlcGlja2VyLCB0aW1lcGlja2VyLFxuICAgICAgdmFsdWVfZm9ybWF0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh2YWx1ZV9mb3JtYXQpIHtcbiAgICAgIHJldHVybiB2YWx1ZV9mb3JtYXRcblxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gSVNPX0RBVEVUSU1FX0ZPUk1BVFxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19EQVRFX0ZPUk1BVFxuICAgIH1cbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19USU1FX0ZPUk1BVFxuICAgIH1cblxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCB0aGlzLmdldFZhbHVlRm9ybWF0KCkpLmZvcm1hdCh0aGlzLmdldERpc3BsYXlGb3JtYXQoKSlcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmVuZGVySW5wdXQgKCkge1xuICAgIGNvbnN0IHtpbnB1dCwgcGxhY2Vob2xkZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVmID0gKGMpID0+IHsgdGhpcy5pbnB1dCA9IGMgfVxuXG4gICAgbGV0IGlucHV0RWxcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0RWwgPSBpbnB1dFxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXRFbCA9IGlucHV0KHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHRoaXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwgPSAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpbnB1dEVsLCB7cmVmLCBwbGFjZWhvbGRlciwgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKX0pXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRldGltZXBpY2tlclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=