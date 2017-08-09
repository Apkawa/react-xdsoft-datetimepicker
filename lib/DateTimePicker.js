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
      value: _this.props.value,
      isInvalid: false
    }, _this.onChangeInput = function (e) {
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
        _this.props.onChange((0, _moment2.default)(_this.state.value));
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


      var inputValue = defaultValue || value;

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
    value: function setValue(value) {
      this.setState({ value: value && (0, _moment2.default)(value, this.getValueFormat()).toDate() });
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
      return _react2.default.cloneElement(inputEl, { ref: ref, placeholder: placeholder, value: this.getValue(), onChange: this.onChangeInput });
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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJEYXRlVGltZVBpY2tlciIsImRlZmF1bHRPcHRpb25zIiwiZm9ybWF0VGltZSIsInByb3BzIiwiZGlzcGxheVRpbWVGb3JtYXQiLCJmb3JtYXREYXRlIiwiZGlzcGxheURhdGVGb3JtYXQiLCJkYXlPZldlZWtTdGFydCIsInN0YXRlIiwidmFsdWUiLCJpc0ludmFsaWQiLCJvbkNoYW5nZUlucHV0IiwiZSIsIm9uQ2hhbmdlSGFuZGxlciIsInRhcmdldCIsIm1vbWVudFZhbHVlIiwiaXNWYWxpZCIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsIl9pbml0UGx1Z2luIiwibmV3UHJvcHMiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsIiRpbnB1dCIsImRhdGV0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsInRpbWVwaWNrZXIiLCJkZWZhdWx0VmFsdWUiLCJsYW5nIiwiaW5wdXRWYWx1ZSIsImlucHV0IiwiaGFuZGxlcnMiLCJoIiwiYnVpbGRIYW5kbGVyIiwiX29wdGlvbnMiLCJmb3JtYXQiLCJnZXREaXNwbGF5Rm9ybWF0Iiwib25DaGFuZ2VEYXRlVGltZSIsImhhbmRsZXIiLCJ1bmRlZmluZWQiLCJfc2VsZiIsImN1cnJlbnRUaW1lIiwiZGlzcGxheURhdGVUaW1lRm9ybWF0IiwidmFsdWVfZm9ybWF0IiwiZ2V0VmFsdWVGb3JtYXQiLCJ0b0RhdGUiLCJwbGFjZWhvbGRlciIsInJlZiIsImMiLCJpbnB1dEVsIiwiXyIsImlzRnVuY3Rpb24iLCJjbG9uZUVsZW1lbnQiLCJnZXRWYWx1ZSIsInJlbmRlcklucHV0IiwibG9jYWxlIiwic2V0TG9jYWxlIiwic2V0Rm9ybWF0dGVyIiwiZm9ybWF0dGVyIiwic2V0RGF0ZUZvcm1hdHRlciIsInBhcnNlRGF0ZSIsImRhdGUiLCJfZm9ybWF0IiwiZCIsInByb3BUeXBlcyIsIm9iamVjdCIsImJvb2wiLCJmdW5jIiwiZWxlbWVudCIsImsiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixZQUF4QjtBQUNBLElBQU1DLGtCQUFrQixPQUF4QjtBQUNBLElBQU1DLHNCQUF5QkYsZUFBekIsU0FBNENDLGVBQWxEOztBQUVBLElBQU1FLFdBQVcsQ0FDZixjQURlLEVBRWYsY0FGZSxFQUdmLGVBSGUsRUFJZixjQUplLEVBS2Ysa0JBTGUsRUFNZixRQU5lLEVBT2YsU0FQZSxFQVFmLGNBUmUsRUFTZixZQVRlLENBQWpCOztBQVlBLElBQU1DLGtCQUFrQixvQkFBVUMsU0FBVixDQUFvQixDQUMxQyxvQkFBVUMsTUFEZ0MsRUFFMUMsb0JBQVVDLFVBQVYsQ0FBcUJDLElBQXJCLENBRjBDLEVBRzFDLG9CQUFVRCxVQUFWLGtCQUgwQyxFQUkxQyxvQkFBVUUsTUFKZ0MsQ0FBcEIsQ0FBeEI7OztRQTBONkI7OztJQW5OUkMsYzs7Ozs7Ozs7Ozs7Ozs7c01Ba0NuQkMsYyxHQUFpQjtBQUNmQyxrQkFBWSxNQUFLQyxLQUFMLENBQVdDLGlCQURSO0FBRWZDLGtCQUFZLE1BQUtGLEtBQUwsQ0FBV0csaUJBRlI7QUFHZkMsc0JBQWdCO0FBSEQsSyxRQU1qQkMsSyxHQUFRO0FBQ05DLGFBQU8sTUFBS04sS0FBTCxDQUFXTSxLQURaO0FBRU5DLGlCQUFXO0FBRkwsSyxRQXFFUkMsYSxHQUFnQixVQUFDQyxDQUFELEVBQU87QUFDckIsWUFBS0MsZUFBTCxDQUFxQkQsRUFB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LCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLy8gZm9yIGludGVncmF0ZSBodHRwOi8veGRzb2Z0Lm5ldC9qcXBsdWdpbnMvZGF0ZXRpbWVwaWNrZXIvXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgZnJvbVBhaXJzIGZyb20gJ2xvZGFzaC5mcm9tcGFpcnMnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC5tYXAnXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCAnanF1ZXJ5LWRhdGV0aW1lcGlja2VyL2J1aWxkL2pxdWVyeS5kYXRldGltZXBpY2tlci5mdWxsJ1xuaW1wb3J0ICdqcXVlcnktZGF0ZXRpbWVwaWNrZXIvanF1ZXJ5LmRhdGV0aW1lcGlja2VyLmNzcydcblxuY29uc3QgSVNPX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tREQnXG5jb25zdCBJU09fVElNRV9GT1JNQVQgPSAnSEg6bW0nXG5jb25zdCBJU09fREFURVRJTUVfRk9STUFUID0gYCR7SVNPX0RBVEVfRk9STUFUfVQke0lTT19USU1FX0ZPUk1BVH1gXG5cbmNvbnN0IEhBTkRMRVJTID0gW1xuICAnb25TZWxlY3REYXRlJyxcbiAgJ29uU2VsZWN0VGltZScsXG4gICdvbkNoYW5nZU1vbnRoJyxcbiAgJ29uQ2hhbmdlWWVhcicsXG4gICdvbkNoYW5nZURhdGVUaW1lJyxcbiAgJ29uU2hvdycsXG4gICdvbkNsb3NlJyxcbiAgJ29uU2VsZWN0RGF0ZScsXG4gICdvbkdlbmVyYXRlJ1xuXVxuXG5jb25zdCBWQUxVRV9QUk9QX1RZUEUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIFByb3BUeXBlcy5udW1iZXJcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVUaW1lUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGVwaWNrZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWVwaWNrZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB2YWx1ZTogVkFMVUVfUFJPUF9UWVBFLFxuICAgIGRlZmF1bHRWYWx1ZTogVkFMVUVfUFJPUF9UWVBFLFxuICAgIHZhbHVlX2Zvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIGRpc3BsYXlEYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlUaW1lRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlEYXRlVGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAuLi5mcm9tUGFpcnMobWFwKEhBTkRMRVJTLCBrID0+IFtrLCBQcm9wVHlwZXMuZnVuY10pKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlcGlja2VyOiB0cnVlLFxuICAgIHRpbWVwaWNrZXI6IHRydWUsXG4gICAgb3B0aW9uczogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgaW5wdXQ6IG51bGwsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc3BsYXlEYXRlRm9ybWF0OiAnREQuTU0uWVlZWScsXG4gICAgZGlzcGxheVRpbWVGb3JtYXQ6ICdISDptbScsXG4gICAgZGlzcGxheURhdGVUaW1lRm9ybWF0OiAnREQuTU0uWVlZWSBISDptbScsXG4gICAgdmFsdWVfZm9ybWF0OiB1bmRlZmluZWQsXG4gICAgb25DaGFuZ2U6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZm9ybWF0VGltZTogdGhpcy5wcm9wcy5kaXNwbGF5VGltZUZvcm1hdCxcbiAgICBmb3JtYXREYXRlOiB0aGlzLnByb3BzLmRpc3BsYXlEYXRlRm9ybWF0LFxuICAgIGRheU9mV2Vla1N0YXJ0OiAxXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICBpc0ludmFsaWQ6IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgc2V0TG9jYWxlIChsb2NhbGUpIHtcbiAgICAkLmRhdGV0aW1lcGlja2VyLnNldExvY2FsZShsb2NhbGUpXG4gICAgRGF0ZVRpbWVQaWNrZXIuc2V0Rm9ybWF0dGVyKClcbiAgfVxuXG4gIHN0YXRpYyBzZXRGb3JtYXR0ZXIgKGZvcm1hdHRlcikge1xuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0RGF0ZUZvcm1hdHRlcih7XG4gICAgICBwYXJzZURhdGUgKGRhdGUsIF9mb3JtYXQpIHtcbiAgICAgICAgY29uc3QgZCA9IG1vbWVudChkYXRlLCBfZm9ybWF0KVxuICAgICAgICByZXR1cm4gZC5pc1ZhbGlkKCkgPyBkLnRvRGF0ZSgpIDogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGZvcm1hdERhdGUgKGRhdGUsIF9mb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoX2Zvcm1hdClcbiAgICAgIH0sXG4gICAgICAuLi5mb3JtYXR0ZXJcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX2luaXRQbHVnaW4oKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV3UHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3UHJvcHMudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gbmV4dFN0YXRlLnZhbHVlKSB7XG4gICAgICAvLyBjb25zdCBuZXh0VmFsdWUgPSBtb21lbnQobmV4dFN0YXRlLnZhbHVlKVxuICAgICAgdGhpcy5zZXRPcHRpb25zKHt2YWx1ZTogbmV4dFN0YXRlLnZhbHVlfSlcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25zIChvcHRpb25zKSB7XG4gICAgdGhpcy4kaW5wdXQuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucylcbiAgfVxuXG4gIF9pbml0UGx1Z2luICgpIHtcbiAgICBjb25zdCB7b3B0aW9ucywgZGF0ZXBpY2tlciwgdGltZXBpY2tlciwgZGVmYXVsdFZhbHVlLCBsYW5nfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7dmFsdWV9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSB8fCB2YWx1ZVxuXG4gICAgY29uc3QgJGlucHV0ID0gJChmaW5kRE9NTm9kZSh0aGlzLmlucHV0KSlcbiAgICBjb25zdCBoYW5kbGVycyA9IGZyb21QYWlycyhtYXAoSEFORExFUlMsIGggPT4gW2gsIHRoaXMuYnVpbGRIYW5kbGVyKHRoaXMucHJvcHNbaF0pXSkpXG4gICAgY29uc3QgX29wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4uaGFuZGxlcnMsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfVxuICAgICRpbnB1dC5kYXRldGltZXBpY2tlcignZGVzdHJveScpXG4gICAgdGhpcy4kaW5wdXQgPSAkaW5wdXQuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgLi4uX29wdGlvbnMsXG4gICAgICBmb3JtYXQ6IHRoaXMuZ2V0RGlzcGxheUZvcm1hdCgpLFxuICAgICAgZGF0ZXBpY2tlcixcbiAgICAgIHRpbWVwaWNrZXIsXG4gICAgICBvbkNoYW5nZURhdGVUaW1lOiB0aGlzLm9uQ2hhbmdlSGFuZGxlcixcbiAgICAgIHZhbHVlOiBpbnB1dFZhbHVlIC8vICYmIG1vbWVudChpbnB1dFZhbHVlKS50b0RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoYW5nZUlucHV0ID0gKGUpID0+IHtcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIG9uQ2hhbmdlSGFuZGxlciA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBpc0ludmFsaWQgPSBmYWxzZVxuICAgIGxldCBtb21lbnRWYWx1ZSA9IG51bGw7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtb21lbnRWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgdHJ1ZSlcbiAgICAgICAgaWYgKCFtb21lbnRWYWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICBtb21lbnRWYWx1ZSA9IG51bGxcbiAgICAgICAgICBpc0ludmFsaWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbW9tZW50VmFsdWUgPSBudWxsXG4gICAgICAgIGlzSW52YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKG1vbWVudFZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoe2lzSW52YWxpZH0pXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobW9tZW50KHRoaXMuc3RhdGUudmFsdWUpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkSGFuZGxlciAoaGFuZGxlcikge1xuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICBjb25zdCBfc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCAkaW5wdXQpIHtcbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIoY3VycmVudFRpbWUsIF9zZWxmLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldERpc3BsYXlGb3JtYXQgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGVwaWNrZXIsIHRpbWVwaWNrZXIsXG4gICAgICBkaXNwbGF5RGF0ZUZvcm1hdCxcbiAgICAgIGRpc3BsYXlEYXRlVGltZUZvcm1hdCxcbiAgICAgIGRpc3BsYXlUaW1lRm9ybWF0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChkYXRlcGlja2VyICYmIHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5RGF0ZVRpbWVGb3JtYXRcbiAgICB9XG4gICAgaWYgKGRhdGVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5RGF0ZUZvcm1hdFxuICAgIH1cbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIGRpc3BsYXlUaW1lRm9ybWF0XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVGb3JtYXQgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGVwaWNrZXIsIHRpbWVwaWNrZXIsXG4gICAgICB2YWx1ZV9mb3JtYXRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHZhbHVlX2Zvcm1hdCkge1xuICAgICAgcmV0dXJuIHZhbHVlX2Zvcm1hdFxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gSVNPX0RBVEVUSU1FX0ZPUk1BVFxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19EQVRFX0ZPUk1BVFxuICAgIH1cbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19USU1FX0ZPUk1BVFxuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZSAmJiBtb21lbnQodmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSkudG9EYXRlKCl9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCB0aGlzLmdldFZhbHVlRm9ybWF0KCkpLmZvcm1hdCh0aGlzLmdldERpc3BsYXlGb3JtYXQoKSlcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmVuZGVySW5wdXQgKCkge1xuICAgIGNvbnN0IHtpbnB1dCwgcGxhY2Vob2xkZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVmID0gKGMpID0+IHsgdGhpcy5pbnB1dCA9IGMgfVxuXG4gICAgbGV0IGlucHV0RWxcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0RWwgPSBpbnB1dFxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXRFbCA9IGlucHV0KHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHRoaXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwgPSAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpbnB1dEVsLFxuICAgICAgICB7cmVmLCBwbGFjZWhvbGRlciwgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VJbnB1dH0pXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNJbnZhbGlkfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXRldGltZXBpY2tlciAke2lzSW52YWxpZCA/ICdpbnZhbGlkJyA6ICd2YWxpZCd9YH0+XG4gICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==