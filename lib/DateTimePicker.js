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

      DateTimePicker.setFormatter;
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
      this.setValue(value);
      if (this.props.onChange) {
        this.props.onChange((0, _moment2.default)(this.state.value));
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
  value_format: undefined
}, _temp2);
exports.default = DateTimePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJEYXRlVGltZVBpY2tlciIsImRlZmF1bHRPcHRpb25zIiwiZm9ybWF0VGltZSIsInByb3BzIiwiZGlzcGxheVRpbWVGb3JtYXQiLCJmb3JtYXREYXRlIiwiZGlzcGxheURhdGVGb3JtYXQiLCJkYXlPZldlZWtTdGFydCIsInN0YXRlIiwidmFsdWUiLCJfaW5pdFBsdWdpbiIsIm5ld1Byb3BzIiwic2V0VmFsdWUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsIiRpbnB1dCIsImRhdGV0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsInRpbWVwaWNrZXIiLCJkZWZhdWx0VmFsdWUiLCJsYW5nIiwiaW5wdXRWYWx1ZSIsInNldEZvcm1hdHRlciIsImlucHV0IiwiaGFuZGxlcnMiLCJoIiwiYnVpbGRIYW5kbGVyIiwiX29wdGlvbnMiLCJmb3JtYXQiLCJnZXREaXNwbGF5Rm9ybWF0Iiwib25DaGFuZ2VEYXRlVGltZSIsIm9uQ2hhbmdlSGFuZGxlciIsImJpbmQiLCJpc1ZhbGlkIiwib25DaGFuZ2UiLCJoYW5kbGVyIiwidW5kZWZpbmVkIiwiX3NlbGYiLCJjdXJyZW50VGltZSIsImRpc3BsYXlEYXRlVGltZUZvcm1hdCIsInZhbHVlX2Zvcm1hdCIsInNldFN0YXRlIiwiZ2V0VmFsdWVGb3JtYXQiLCJ0b0RhdGUiLCJwbGFjZWhvbGRlciIsInJlZiIsImMiLCJpbnB1dEVsIiwiXyIsImlzRnVuY3Rpb24iLCJjbG9uZUVsZW1lbnQiLCJnZXRWYWx1ZSIsInJlbmRlcklucHV0IiwibG9jYWxlIiwic2V0TG9jYWxlIiwiZm9ybWF0dGVyIiwic2V0RGF0ZUZvcm1hdHRlciIsInBhcnNlRGF0ZSIsImRhdGUiLCJfZm9ybWF0IiwiZCIsInByb3BUeXBlcyIsIm9iamVjdCIsImJvb2wiLCJmdW5jIiwiZWxlbWVudCIsImsiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixZQUF4QjtBQUNBLElBQU1DLGtCQUFrQixPQUF4QjtBQUNBLElBQU1DLHNCQUF5QkYsZUFBekIsU0FBNENDLGVBQWxEOztBQUVBLElBQU1FLFdBQVcsQ0FDZixjQURlLEVBRWYsY0FGZSxFQUdmLGVBSGUsRUFJZixjQUplLEVBS2Ysa0JBTGUsRUFNZixRQU5lLEVBT2YsU0FQZSxFQVFmLGNBUmUsRUFTZixZQVRlLENBQWpCOztBQVlBLElBQU1DLGtCQUFrQixvQkFBVUMsU0FBVixDQUFvQixDQUMxQyxvQkFBVUMsTUFEZ0MsRUFFMUMsb0JBQVVDLFVBQVYsQ0FBcUJDLElBQXJCLENBRjBDLEVBRzFDLG9CQUFVRCxVQUFWLGtCQUgwQyxFQUkxQyxvQkFBVUUsTUFKZ0MsQ0FBcEIsQ0FBeEI7OztRQTJNNkI7OztJQXBNUkMsYzs7Ozs7Ozs7Ozs7Ozs7c01BaUNuQkMsYyxHQUFpQjtBQUNmQyxrQkFBWSxNQUFLQyxLQUFMLENBQVdDLGlCQURSO0FBRWZDLGtCQUFZLE1BQUtGLEtBQUwsQ0FBV0csaUJBRlI7QUFHZkMsc0JBQWdCO0FBSEQsSyxRQU1qQkMsSyxHQUFRO0FBQ05DLGFBQU8sTUFBS04sS0FBTCxDQUFXTTtBQURaLEs7Ozs7O3dDQXVCYTtBQUNuQixXQUFLQyxXQUFMO0FBQ0Q7Ozs4Q0FFMEJDLFEsRUFBVTtBQUNuQyxVQUFJLEtBQUtSLEtBQUwsQ0FBV00sS0FBWCxLQUFxQkUsU0FBU0YsS0FBbEMsRUFBeUM7QUFDdkMsYUFBS0csUUFB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QU9mLGU7QUFDUDJCLGdCQUFjM0IsZTtBQUNkZ0QsZ0JBQWMsb0JBQVU5QyxNOztBQUV4QlUscUJBQW1CLG9CQUFVVixNO0FBQzdCUSxxQkFBbUIsb0JBQVVSLE07QUFDN0I2Qyx5QkFBdUIsb0JBQVU3QyxNOztBQUVqQ3dDLFlBQVUsb0JBQVU4QjtHQUNqQixzQkFBVSxzQkFBSXpFLFFBQUosRUFBYztBQUFBLFNBQUssQ0FBQzJFLENBQUQsRUFBSSxvQkFBVUYsSUFBZCxDQUFMO0FBQUEsQ0FBZCxDQUFWLEMsVUFHRUcsWSxHQUFlO0FBQ3BCbEQsY0FBWSxJQURRO0FBRXBCQyxjQUFZLElBRlE7QUFHcEJKLFdBQVMsSUFIVztBQUlwQjhCLGVBQWEsRUFKTztBQUtwQnJCLFNBQU8sSUFMYTtBQU1wQkosZ0JBQWMsSUFOTTtBQU9wQlosU0FBTyxJQVBhO0FBUXBCSCxxQkFBbUIsWUFSQztBQVNwQkYscUJBQW1CLE9BVEM7QUFVcEJxQyx5QkFBdUIsa0JBVkg7QUFXcEJDLGdCQUFjSjtBQVhNLEM7a0JBbkJIdEMsYyIsImZpbGUiOiJEYXRlVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vLyBmb3IgaW50ZWdyYXRlIGh0dHA6Ly94ZHNvZnQubmV0L2pxcGx1Z2lucy9kYXRldGltZXBpY2tlci9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBmcm9tUGFpcnMgZnJvbSAnbG9kYXNoLmZyb21wYWlycydcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoLm1hcCdcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaW1wb3J0ICdqcXVlcnktZGF0ZXRpbWVwaWNrZXIvYnVpbGQvanF1ZXJ5LmRhdGV0aW1lcGlja2VyLmZ1bGwnXG5pbXBvcnQgJ2pxdWVyeS1kYXRldGltZXBpY2tlci9qcXVlcnkuZGF0ZXRpbWVwaWNrZXIuY3NzJ1xuXG5jb25zdCBJU09fREFURV9GT1JNQVQgPSAnWVlZWS1NTS1ERCdcbmNvbnN0IElTT19USU1FX0ZPUk1BVCA9ICdISDptbSdcbmNvbnN0IElTT19EQVRFVElNRV9GT1JNQVQgPSBgJHtJU09fREFURV9GT1JNQVR9VCR7SVNPX1RJTUVfRk9STUFUfWBcblxuY29uc3QgSEFORExFUlMgPSBbXG4gICdvblNlbGVjdERhdGUnLFxuICAnb25TZWxlY3RUaW1lJyxcbiAgJ29uQ2hhbmdlTW9udGgnLFxuICAnb25DaGFuZ2VZZWFyJyxcbiAgJ29uQ2hhbmdlRGF0ZVRpbWUnLFxuICAnb25TaG93JyxcbiAgJ29uQ2xvc2UnLFxuICAnb25TZWxlY3REYXRlJyxcbiAgJ29uR2VuZXJhdGUnXG5dXG5cbmNvbnN0IFZBTFVFX1BST1BfVFlQRSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuc3RyaW5nLFxuICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgUHJvcFR5cGVzLmluc3RhbmNlT2YobW9tZW50KSxcbiAgUHJvcFR5cGVzLm51bWJlclxuXSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0ZXBpY2tlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGltZXBpY2tlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHZhbHVlOiBWQUxVRV9QUk9QX1RZUEUsXG4gICAgZGVmYXVsdFZhbHVlOiBWQUxVRV9QUk9QX1RZUEUsXG4gICAgdmFsdWVfZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgZGlzcGxheURhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheVRpbWVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheURhdGVUaW1lRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC4uLmZyb21QYWlycyhtYXAoSEFORExFUlMsIGsgPT4gW2ssIFByb3BUeXBlcy5mdW5jXSkpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGVwaWNrZXI6IHRydWUsXG4gICAgdGltZXBpY2tlcjogdHJ1ZSxcbiAgICBvcHRpb25zOiBudWxsLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dDogbnVsbCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgZGlzcGxheURhdGVGb3JtYXQ6ICdERC5NTS5ZWVlZJyxcbiAgICBkaXNwbGF5VGltZUZvcm1hdDogJ0hIOm1tJyxcbiAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQ6ICdERC5NTS5ZWVlZIEhIOm1tJyxcbiAgICB2YWx1ZV9mb3JtYXQ6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZm9ybWF0VGltZTogdGhpcy5wcm9wcy5kaXNwbGF5VGltZUZvcm1hdCxcbiAgICBmb3JtYXREYXRlOiB0aGlzLnByb3BzLmRpc3BsYXlEYXRlRm9ybWF0LFxuICAgIGRheU9mV2Vla1N0YXJ0OiAxXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuICB9XG5cbiAgc3RhdGljIHNldExvY2FsZSAobG9jYWxlKSB7XG4gICAgJC5kYXRldGltZXBpY2tlci5zZXRMb2NhbGUobG9jYWxlKVxuICAgIERhdGVUaW1lUGlja2VyLnNldEZvcm1hdHRlcigpXG4gIH1cblxuICBzdGF0aWMgc2V0Rm9ybWF0dGVyIChmb3JtYXR0ZXIpIHtcbiAgICAkLmRhdGV0aW1lcGlja2VyLnNldERhdGVGb3JtYXR0ZXIoe1xuICAgICAgcGFyc2VEYXRlIChkYXRlLCBfZm9ybWF0KSB7XG4gICAgICAgIGNvbnN0IGQgPSBtb21lbnQoZGF0ZSwgX2Zvcm1hdClcbiAgICAgICAgcmV0dXJuIGQuaXNWYWxpZCgpID8gZC50b0RhdGUoKSA6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBmb3JtYXREYXRlIChkYXRlLCBfZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KF9mb3JtYXQpXG4gICAgICB9LFxuICAgICAgLi4uZm9ybWF0dGVyXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pbml0UGx1Z2luKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1Byb3BzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgIT09IG5leHRTdGF0ZS52YWx1ZSkge1xuICAgICAgLy8gY29uc3QgbmV4dFZhbHVlID0gbW9tZW50KG5leHRTdGF0ZS52YWx1ZSlcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh7dmFsdWU6IG5leHRTdGF0ZS52YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xuICAgIHRoaXMuJGlucHV0LmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpXG4gIH1cblxuICBfaW5pdFBsdWdpbiAoKSB7XG4gICAgY29uc3Qge29wdGlvbnMsIGRhdGVwaWNrZXIsIHRpbWVwaWNrZXIsIGRlZmF1bHRWYWx1ZSwgbGFuZ30gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkZWZhdWx0VmFsdWUgfHwgdmFsdWVcblxuICAgIERhdGVUaW1lUGlja2VyLnNldEZvcm1hdHRlclxuICAgIGNvbnN0ICRpbnB1dCA9ICQoZmluZERPTU5vZGUodGhpcy5pbnB1dCkpXG4gICAgY29uc3QgaGFuZGxlcnMgPSBmcm9tUGFpcnMobWFwKEhBTkRMRVJTLCBoID0+IFtoLCB0aGlzLmJ1aWxkSGFuZGxlcih0aGlzLnByb3BzW2hdKV0pKVxuICAgIGNvbnN0IF9vcHRpb25zID0ge1xuICAgICAgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLmhhbmRsZXJzLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH1cbiAgICAkaW5wdXQuZGF0ZXRpbWVwaWNrZXIoJ2Rlc3Ryb3knKVxuICAgIHRoaXMuJGlucHV0ID0gJGlucHV0LmRhdGV0aW1lcGlja2VyKHtcbiAgICAgIC4uLl9vcHRpb25zLFxuICAgICAgZm9ybWF0OiB0aGlzLmdldERpc3BsYXlGb3JtYXQoKSxcbiAgICAgIGRhdGVwaWNrZXIsXG4gICAgICB0aW1lcGlja2VyLFxuICAgICAgb25DaGFuZ2VEYXRlVGltZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIHZhbHVlOiBpbnB1dFZhbHVlIC8vICYmIG1vbWVudChpbnB1dFZhbHVlKS50b0RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIgKHZhbHVlKSB7XG4gICAgdmFsdWUgPSBtb21lbnQodmFsdWUsIHRydWUpXG4gICAgaWYgKCF2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgIHZhbHVlID0gbnVsbFxuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG1vbWVudCh0aGlzLnN0YXRlLnZhbHVlKSlcbiAgICB9XG4gIH1cblxuICBidWlsZEhhbmRsZXIgKGhhbmRsZXIpIHtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgY29uc3QgX3NlbGYgPSB0aGlzXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJyZW50VGltZSwgJGlucHV0KSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVyKGN1cnJlbnRUaW1lLCBfc2VsZiwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXREaXNwbGF5Rm9ybWF0ICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRlcGlja2VyLCB0aW1lcGlja2VyLFxuICAgICAgZGlzcGxheURhdGVGb3JtYXQsXG4gICAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQsXG4gICAgICBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVUaW1lRm9ybWF0XG4gICAgfVxuICAgIGlmIChkYXRlcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVGb3JtYXRcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0ICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRlcGlja2VyLCB0aW1lcGlja2VyLFxuICAgICAgdmFsdWVfZm9ybWF0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh2YWx1ZV9mb3JtYXQpIHtcbiAgICAgIHJldHVybiB2YWx1ZV9mb3JtYXRcblxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gSVNPX0RBVEVUSU1FX0ZPUk1BVFxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19EQVRFX0ZPUk1BVFxuICAgIH1cbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19USU1FX0ZPUk1BVFxuICAgIH1cblxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlICYmIG1vbWVudCh2YWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKS50b0RhdGUoKX0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBtb21lbnQodmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSkuZm9ybWF0KHRoaXMuZ2V0RGlzcGxheUZvcm1hdCgpKVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZW5kZXJJbnB1dCAoKSB7XG4gICAgY29uc3Qge2lucHV0LCBwbGFjZWhvbGRlcn0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZWYgPSAoYykgPT4geyB0aGlzLmlucHV0ID0gYyB9XG5cbiAgICBsZXQgaW5wdXRFbFxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXRFbCA9IGlucHV0XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGlucHV0KSkge1xuICAgICAgICBpbnB1dEVsID0gaW5wdXQodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwgdGhpcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbCA9ICg8aW5wdXQgdHlwZT1cInRleHRcIi8+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGlucHV0RWwsIHtyZWYsIHBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5nZXRWYWx1ZSgpfSlcbiAgICApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGV0aW1lcGlja2VyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==