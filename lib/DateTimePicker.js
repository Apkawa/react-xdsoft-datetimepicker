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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJEYXRlVGltZVBpY2tlciIsImRlZmF1bHRPcHRpb25zIiwiZm9ybWF0VGltZSIsInByb3BzIiwiZGlzcGxheVRpbWVGb3JtYXQiLCJmb3JtYXREYXRlIiwiZGlzcGxheURhdGVGb3JtYXQiLCJkYXlPZldlZWtTdGFydCIsInN0YXRlIiwidmFsdWUiLCJfaW5pdFBsdWdpbiIsIm5ld1Byb3BzIiwic2V0VmFsdWUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsIiRpbnB1dCIsImRhdGV0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsInRpbWVwaWNrZXIiLCJkZWZhdWx0VmFsdWUiLCJsYW5nIiwiaW5wdXRWYWx1ZSIsInNldERhdGVGb3JtYXR0ZXIiLCJwYXJzZURhdGUiLCJkYXRlIiwiX2Zvcm1hdCIsImQiLCJpc1ZhbGlkIiwidG9EYXRlIiwiZm9ybWF0IiwiaW5wdXQiLCJoYW5kbGVycyIsImgiLCJidWlsZEhhbmRsZXIiLCJfb3B0aW9ucyIsImdldERpc3BsYXlGb3JtYXQiLCJvbkNoYW5nZURhdGVUaW1lIiwib25DaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9uQ2hhbmdlIiwiaGFuZGxlciIsInVuZGVmaW5lZCIsIl9zZWxmIiwiY3VycmVudFRpbWUiLCJkaXNwbGF5RGF0ZVRpbWVGb3JtYXQiLCJ2YWx1ZV9mb3JtYXQiLCJzZXRTdGF0ZSIsImdldFZhbHVlRm9ybWF0IiwicGxhY2Vob2xkZXIiLCJyZWYiLCJjIiwiaW5wdXRFbCIsIl8iLCJpc0Z1bmN0aW9uIiwiY2xvbmVFbGVtZW50IiwiZ2V0VmFsdWUiLCJyZW5kZXJJbnB1dCIsImxvY2FsZSIsInNldExvY2FsZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImJvb2wiLCJmdW5jIiwiZWxlbWVudCIsImsiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixZQUF4QjtBQUNBLElBQU1DLGtCQUFrQixPQUF4QjtBQUNBLElBQU1DLHNCQUF5QkYsZUFBekIsU0FBNENDLGVBQWxEOztBQUVBLElBQU1FLFdBQVcsQ0FDZixjQURlLEVBRWYsY0FGZSxFQUdmLGVBSGUsRUFJZixjQUplLEVBS2Ysa0JBTGUsRUFNZixRQU5lLEVBT2YsU0FQZSxFQVFmLGNBUmUsRUFTZixZQVRlLENBQWpCOztBQVlBLElBQU1DLGtCQUFrQixvQkFBVUMsU0FBVixDQUFvQixDQUMxQyxvQkFBVUMsTUFEZ0MsRUFFMUMsb0JBQVVDLFVBQVYsQ0FBcUJDLElBQXJCLENBRjBDLEVBRzFDLG9CQUFVRCxVQUFWLGtCQUgwQyxFQUkxQyxvQkFBVUUsTUFKZ0MsQ0FBcEIsQ0FBeEI7OztRQXFNNkI7OztJQTlMUkMsYzs7Ozs7Ozs7Ozs7Ozs7c01BaUNuQkMsYyxHQUFpQjtBQUNmQyxrQkFBWSxNQUFLQyxLQUFMLENBQVdDLGlCQURSO0FBRWZDLGtCQUFZLE1BQUtGLEtBQUwsQ0FBV0csaUJBRlI7QUFHZkMsc0JBQWdCO0FBSEQsSyxRQU1qQkMsSyxHQUFRO0FBQ05DLGFBQU8sTUFBS04sS0FBTCxDQUFXTTtBQURaLEs7Ozs7O3dDQVFhO0FBQ25CLFdBQUtDLFdBQUw7QUFDRDs7OzhDQUUwQkMsUSxFQUFVO0FBQ25DLFVBQUksS0FBS1IsS0FBTCxDQUFXTSxLQUFYLEtBQXFCRSxTQUFTRixLQUFsQyxFQUF5QztBQUN2QyxhQUFLRyxRQUFMLENBQWNELFNBQVNGLEtBQXZCO0FBQ0Q7QUFD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QUFVUixNO0FBQzdCa0QseUJBQXVCLG9CQUFVbEQsTTs7QUFFakM2QyxZQUFVLG9CQUFVdUI7R0FDakIsc0JBQVUsc0JBQUl2RSxRQUFKLEVBQWM7QUFBQSxTQUFLLENBQUN5RSxDQUFELEVBQUksb0JBQVVGLElBQWQsQ0FBTDtBQUFBLENBQWQsQ0FBVixDLFVBR0VHLFksR0FBZTtBQUNwQmhELGNBQVksSUFEUTtBQUVwQkMsY0FBWSxJQUZRO0FBR3BCSixXQUFTLElBSFc7QUFJcEJrQyxlQUFhLEVBSk87QUFLcEJsQixTQUFPLElBTGE7QUFNcEJYLGdCQUFjLElBTk07QUFPcEJaLFNBQU8sSUFQYTtBQVFwQkgscUJBQW1CLFlBUkM7QUFTcEJGLHFCQUFtQixPQVRDO0FBVXBCMEMseUJBQXVCLGtCQVZIO0FBV3BCQyxnQkFBY0o7QUFYTSxDO2tCQW5CSDNDLGMiLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLy8gZm9yIGludGVncmF0ZSBodHRwOi8veGRzb2Z0Lm5ldC9qcXBsdWdpbnMvZGF0ZXRpbWVwaWNrZXIvXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgZnJvbVBhaXJzIGZyb20gJ2xvZGFzaC5mcm9tcGFpcnMnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC5tYXAnXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCAnanF1ZXJ5LWRhdGV0aW1lcGlja2VyL2J1aWxkL2pxdWVyeS5kYXRldGltZXBpY2tlci5mdWxsJ1xuaW1wb3J0ICdqcXVlcnktZGF0ZXRpbWVwaWNrZXIvanF1ZXJ5LmRhdGV0aW1lcGlja2VyLmNzcydcblxuY29uc3QgSVNPX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tREQnXG5jb25zdCBJU09fVElNRV9GT1JNQVQgPSAnSEg6bW0nXG5jb25zdCBJU09fREFURVRJTUVfRk9STUFUID0gYCR7SVNPX0RBVEVfRk9STUFUfVQke0lTT19USU1FX0ZPUk1BVH1gXG5cbmNvbnN0IEhBTkRMRVJTID0gW1xuICAnb25TZWxlY3REYXRlJyxcbiAgJ29uU2VsZWN0VGltZScsXG4gICdvbkNoYW5nZU1vbnRoJyxcbiAgJ29uQ2hhbmdlWWVhcicsXG4gICdvbkNoYW5nZURhdGVUaW1lJyxcbiAgJ29uU2hvdycsXG4gICdvbkNsb3NlJyxcbiAgJ29uU2VsZWN0RGF0ZScsXG4gICdvbkdlbmVyYXRlJ1xuXVxuXG5jb25zdCBWQUxVRV9QUk9QX1RZUEUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIFByb3BUeXBlcy5udW1iZXJcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVUaW1lUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGVwaWNrZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWVwaWNrZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB2YWx1ZTogVkFMVUVfUFJPUF9UWVBFLFxuICAgIGRlZmF1bHRWYWx1ZTogVkFMVUVfUFJPUF9UWVBFLFxuICAgIHZhbHVlX2Zvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIGRpc3BsYXlEYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlUaW1lRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlEYXRlVGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAuLi5mcm9tUGFpcnMobWFwKEhBTkRMRVJTLCBrID0+IFtrLCBQcm9wVHlwZXMuZnVuY10pKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlcGlja2VyOiB0cnVlLFxuICAgIHRpbWVwaWNrZXI6IHRydWUsXG4gICAgb3B0aW9uczogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgaW5wdXQ6IG51bGwsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc3BsYXlEYXRlRm9ybWF0OiAnREQuTU0uWVlZWScsXG4gICAgZGlzcGxheVRpbWVGb3JtYXQ6ICdISDptbScsXG4gICAgZGlzcGxheURhdGVUaW1lRm9ybWF0OiAnREQuTU0uWVlZWSBISDptbScsXG4gICAgdmFsdWVfZm9ybWF0OiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGZvcm1hdFRpbWU6IHRoaXMucHJvcHMuZGlzcGxheVRpbWVGb3JtYXQsXG4gICAgZm9ybWF0RGF0ZTogdGhpcy5wcm9wcy5kaXNwbGF5RGF0ZUZvcm1hdCxcbiAgICBkYXlPZldlZWtTdGFydDogMVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0TG9jYWxlKGxvY2FsZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pbml0UGx1Z2luKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1Byb3BzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgIT09IG5leHRTdGF0ZS52YWx1ZSkge1xuICAgICAgLy8gY29uc3QgbmV4dFZhbHVlID0gbW9tZW50KG5leHRTdGF0ZS52YWx1ZSlcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh7dmFsdWU6IG5leHRTdGF0ZS52YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xuICAgIHRoaXMuJGlucHV0LmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpXG4gIH1cblxuICBfaW5pdFBsdWdpbiAoKSB7XG4gICAgY29uc3Qge29wdGlvbnMsIGRhdGVwaWNrZXIsIHRpbWVwaWNrZXIsIGRlZmF1bHRWYWx1ZSwgbGFuZ30gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkZWZhdWx0VmFsdWUgfHwgdmFsdWVcblxuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0RGF0ZUZvcm1hdHRlcih7XG4gICAgICBwYXJzZURhdGUoZGF0ZSwgX2Zvcm1hdCkge1xuICAgICAgICBjb25zdCBkID0gbW9tZW50KGRhdGUsIF9mb3JtYXQpXG4gICAgICAgIHJldHVybiBkLmlzVmFsaWQoKSA/IGQudG9EYXRlKCkgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgZm9ybWF0RGF0ZShkYXRlLCBfZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KF9mb3JtYXQpXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCAkaW5wdXQgPSAkKGZpbmRET01Ob2RlKHRoaXMuaW5wdXQpKVxuICAgIGNvbnN0IGhhbmRsZXJzID0gZnJvbVBhaXJzKG1hcChIQU5ETEVSUywgaCA9PiBbaCwgdGhpcy5idWlsZEhhbmRsZXIodGhpcy5wcm9wc1toXSldKSlcbiAgICBjb25zdCBfb3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5oYW5kbGVycyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9XG4gICAgJGlucHV0LmRhdGV0aW1lcGlja2VyKCdkZXN0cm95JylcbiAgICB0aGlzLiRpbnB1dCA9ICRpbnB1dC5kYXRldGltZXBpY2tlcih7XG4gICAgICAuLi5fb3B0aW9ucyxcbiAgICAgIGZvcm1hdDogdGhpcy5nZXREaXNwbGF5Rm9ybWF0KCksXG4gICAgICBkYXRlcGlja2VyLFxuICAgICAgdGltZXBpY2tlcixcbiAgICAgIG9uQ2hhbmdlRGF0ZVRpbWU6IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB2YWx1ZTogaW5wdXRWYWx1ZSAvLyAmJiBtb21lbnQoaW5wdXRWYWx1ZSkudG9EYXRlKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyICh2YWx1ZSkge1xuICAgIHZhbHVlID0gbW9tZW50KHZhbHVlLCB0cnVlKVxuICAgIGlmICghdmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICB2YWx1ZSA9IG51bGxcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShtb21lbnQodGhpcy5zdGF0ZS52YWx1ZSkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGRIYW5kbGVyIChoYW5kbGVyKSB7XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGNvbnN0IF9zZWxmID0gdGhpc1xuICAgIHJldHVybiBmdW5jdGlvbiAoY3VycmVudFRpbWUsICRpbnB1dCkge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgaGFuZGxlcihjdXJyZW50VGltZSwgX3NlbGYsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RGlzcGxheUZvcm1hdCAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0ZXBpY2tlciwgdGltZXBpY2tlcixcbiAgICAgIGRpc3BsYXlEYXRlRm9ybWF0LFxuICAgICAgZGlzcGxheURhdGVUaW1lRm9ybWF0LFxuICAgICAgZGlzcGxheVRpbWVGb3JtYXRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGRhdGVwaWNrZXIgJiYgdGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIGRpc3BsYXlEYXRlVGltZUZvcm1hdFxuICAgIH1cbiAgICBpZiAoZGF0ZXBpY2tlcikge1xuICAgICAgcmV0dXJuIGRpc3BsYXlEYXRlRm9ybWF0XG4gICAgfVxuICAgIGlmICh0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheVRpbWVGb3JtYXRcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZUZvcm1hdCAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0ZXBpY2tlciwgdGltZXBpY2tlcixcbiAgICAgIHZhbHVlX2Zvcm1hdFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodmFsdWVfZm9ybWF0KSB7XG4gICAgICByZXR1cm4gdmFsdWVfZm9ybWF0XG5cbiAgICB9XG4gICAgaWYgKGRhdGVwaWNrZXIgJiYgdGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIElTT19EQVRFVElNRV9GT1JNQVRcbiAgICB9XG4gICAgaWYgKGRhdGVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBJU09fREFURV9GT1JNQVRcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBJU09fVElNRV9GT1JNQVRcbiAgICB9XG5cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZSAmJiBtb21lbnQodmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSkudG9EYXRlKCl9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCB0aGlzLmdldFZhbHVlRm9ybWF0KCkpLmZvcm1hdCh0aGlzLmdldERpc3BsYXlGb3JtYXQoKSlcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmVuZGVySW5wdXQgKCkge1xuICAgIGNvbnN0IHtpbnB1dCwgcGxhY2Vob2xkZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVmID0gKGMpID0+IHsgdGhpcy5pbnB1dCA9IGMgfVxuXG4gICAgbGV0IGlucHV0RWxcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0RWwgPSBpbnB1dFxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXRFbCA9IGlucHV0KHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHRoaXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwgPSAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpbnB1dEVsLCB7cmVmLCBwbGFjZWhvbGRlciwgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKX0pXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRldGltZXBpY2tlclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=