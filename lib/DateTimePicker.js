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
        var nextValue = (0, _moment2.default)(nextState.value);
        this.setOptions({ value: nextValue.toDate() });
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
        value: inputValue && (0, _moment2.default)(inputValue).toDate()
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
    key: 'getValue',
    value: function getValue() {
      var value = this.state.value;

      if (value) {
        return (0, _moment2.default)(value).format(this.getDisplayFormat());
      }
      return undefined;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this3 = this;

      var _props3 = this.props,
          input = _props3.input,
          placeholder = _props3.placeholder;


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
  displayDateTimeFormat: 'DD.MM.YYYY HH:mm'
}, _temp2);
exports.default = DateTimePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJEYXRlVGltZVBpY2tlciIsImRlZmF1bHRPcHRpb25zIiwiZm9ybWF0VGltZSIsInByb3BzIiwiZGlzcGxheVRpbWVGb3JtYXQiLCJmb3JtYXREYXRlIiwiZGlzcGxheURhdGVGb3JtYXQiLCJkYXlPZldlZWtTdGFydCIsInN0YXRlIiwidmFsdWUiLCJfaW5pdFBsdWdpbiIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJuZXh0VmFsdWUiLCJzZXRPcHRpb25zIiwidG9EYXRlIiwib3B0aW9ucyIsIiRpbnB1dCIsImRhdGV0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsInRpbWVwaWNrZXIiLCJkZWZhdWx0VmFsdWUiLCJsYW5nIiwiaW5wdXRWYWx1ZSIsInNldERhdGVGb3JtYXR0ZXIiLCJwYXJzZURhdGUiLCJkYXRlIiwiX2Zvcm1hdCIsImQiLCJpc1ZhbGlkIiwiZm9ybWF0IiwiaW5wdXQiLCJoYW5kbGVycyIsImgiLCJidWlsZEhhbmRsZXIiLCJfb3B0aW9ucyIsImdldERpc3BsYXlGb3JtYXQiLCJvbkNoYW5nZURhdGVUaW1lIiwib25DaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9uQ2hhbmdlIiwiaGFuZGxlciIsInVuZGVmaW5lZCIsIl9zZWxmIiwiY3VycmVudFRpbWUiLCJkaXNwbGF5RGF0ZVRpbWVGb3JtYXQiLCJwbGFjZWhvbGRlciIsInJlZiIsImMiLCJpbnB1dEVsIiwiXyIsImlzRnVuY3Rpb24iLCJjbG9uZUVsZW1lbnQiLCJnZXRWYWx1ZSIsInJlbmRlcklucHV0IiwibG9jYWxlIiwic2V0TG9jYWxlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiYm9vbCIsImZ1bmMiLCJlbGVtZW50IiwiayIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFlBQXhCO0FBQ0EsSUFBTUMsa0JBQWtCLE9BQXhCO0FBQ0EsSUFBTUMsc0JBQXlCRixlQUF6QixTQUE0Q0MsZUFBbEQ7O0FBRUEsSUFBTUUsV0FBVyxDQUNmLGNBRGUsRUFFZixjQUZlLEVBR2YsZUFIZSxFQUlmLGNBSmUsRUFLZixrQkFMZSxFQU1mLFFBTmUsRUFPZixTQVBlLEVBUWYsY0FSZSxFQVNmLFlBVGUsQ0FBakI7O0FBWUEsSUFBTUMsa0JBQWtCLG9CQUFVQyxTQUFWLENBQW9CLENBQzFDLG9CQUFVQyxNQURnQyxFQUUxQyxvQkFBVUMsVUFBVixDQUFxQkMsSUFBckIsQ0FGMEMsRUFHMUMsb0JBQVVELFVBQVYsa0JBSDBDLEVBSTFDLG9CQUFVRSxNQUpnQyxDQUFwQixDQUF4Qjs7O1FBbUs2Qjs7O0lBNUpSQyxjOzs7Ozs7Ozs7Ozs7OztzTUErQm5CQyxjLEdBQWlCO0FBQ2ZDLGtCQUFZLE1BQUtDLEtBQUwsQ0FBV0MsaUJBRFI7QUFFZkMsa0JBQVksTUFBS0YsS0FBTCxDQUFXRyxpQkFGUjtBQUdmQyxzQkFBZ0I7QUFIRCxLLFFBTWpCQyxLLEdBQVE7QUFDTkMsYUFBTyxNQUFLTixLQUFMLENBQVdNO0FBRFosSzs7Ozs7d0NBUWE7QUFDbkIsV0FBS0MsV0FBTDtBQUNEOzs7OENBRTBCQyxRLEVBQVU7QUFDbkMsVUFBSSxLQUFLUixLQUFMLENBQVdNLEtBQVgsS0FBcUJFLFNBQVNGLEtBQWxDLEVBQXlDO0FBQ3ZDLGFBQUtHLFFBQUwsQ0FBYyxFQUFFSCxPQUFPRSxTQUFTRixLQUFsQixFQUFkO0FBQ0Q7QUFDRjs7O3dDQUVvQkksUyxF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QUE0QixFQUFFRixRQUFGLEVBQU9ELHdCQUFQLEVBQW9CdkMsT0FBTyxLQUFLOEMsUUFBTCxFQUEzQixFQUE1QixDQURGO0FBR0Q7Ozs2QkFFUztBQUNSO0FBQUEsbUJBQ2lCO0FBRGpCLGlCQUVLLEtBQUtDLFdBQUwsRUFGTDtBQUtEOzs7OEJBaElnQkMsTSxFQUFRO0FBQ3ZCLHVCQUFFckMsY0FBRixDQUFpQnNDLFNBQWpCLENBQTJCRCxNQUEzQjtBQUNEOzs7OzRCQTFDTUUsUztBQUNMekMsV0FBUyxvQkFBVTBDLE07QUFDbkJ2QyxjQUFZLG9CQUFVd0MsSTtBQUN0QnZDLGNBQVksb0JBQVV1QyxJO0FBQ3RCYixlQUFhLG9CQUFVcEQsTTtBQUN2QnFDLFNBQU8sb0JBQVV0QyxTQUFWLENBQW9CLENBQUMsb0JBQVVtRSxJQUFYLEVBQWlCLG9CQUFVQyxPQUEzQixDQUFwQixDO0FBQ1B0RCxTQUFPZixlO0FBQ1A2QixnQkFBYzdCLGU7O0FBRWRZLHFCQUFtQixvQkFBVVYsTTtBQUM3QlEscUJBQW1CLG9CQUFVUixNO0FBQzdCbUQseUJBQXVCLG9CQUFVbkQsTTs7QUFFakM4QyxZQUFVLG9CQUFVb0I7R0FDakIsc0JBQVUsc0JBQUlyRSxRQUFKLEVBQWM7QUFBQSxTQUFLLENBQUN1RSxDQUFELEVBQUksb0JBQVVGLElBQWQsQ0FBTDtBQUFBLENBQWQsQ0FBVixDLFVBR0VHLFksR0FBZTtBQUNwQjVDLGNBQVksSUFEUTtBQUVwQkMsY0FBWSxJQUZRO0FBR3BCSixXQUFTLElBSFc7QUFJcEI4QixlQUFhLEVBSk87QUFLcEJmLFNBQU8sSUFMYTtBQU1wQlYsZ0JBQWMsSUFOTTtBQU9wQmQsU0FBTyxJQVBhO0FBUXBCSCxxQkFBbUIsWUFSQztBQVNwQkYscUJBQW1CLE9BVEM7QUFVcEIyQyx5QkFBdUI7QUFWSCxDO2tCQWxCSC9DLGMiLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLy8gZm9yIGludGVncmF0ZSBodHRwOi8veGRzb2Z0Lm5ldC9qcXBsdWdpbnMvZGF0ZXRpbWVwaWNrZXIvXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgZnJvbVBhaXJzIGZyb20gJ2xvZGFzaC5mcm9tcGFpcnMnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC5tYXAnXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCAnanF1ZXJ5LWRhdGV0aW1lcGlja2VyL2J1aWxkL2pxdWVyeS5kYXRldGltZXBpY2tlci5mdWxsJ1xuaW1wb3J0ICdqcXVlcnktZGF0ZXRpbWVwaWNrZXIvanF1ZXJ5LmRhdGV0aW1lcGlja2VyLmNzcydcblxuY29uc3QgSVNPX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tREQnXG5jb25zdCBJU09fVElNRV9GT1JNQVQgPSAnSEg6bW0nXG5jb25zdCBJU09fREFURVRJTUVfRk9STUFUID0gYCR7SVNPX0RBVEVfRk9STUFUfVQke0lTT19USU1FX0ZPUk1BVH1gXG5cbmNvbnN0IEhBTkRMRVJTID0gW1xuICAnb25TZWxlY3REYXRlJyxcbiAgJ29uU2VsZWN0VGltZScsXG4gICdvbkNoYW5nZU1vbnRoJyxcbiAgJ29uQ2hhbmdlWWVhcicsXG4gICdvbkNoYW5nZURhdGVUaW1lJyxcbiAgJ29uU2hvdycsXG4gICdvbkNsb3NlJyxcbiAgJ29uU2VsZWN0RGF0ZScsXG4gICdvbkdlbmVyYXRlJyxcbl1cblxuY29uc3QgVkFMVUVfUFJPUF9UWVBFID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBQcm9wVHlwZXMuaW5zdGFuY2VPZihtb21lbnQpLFxuICBQcm9wVHlwZXMubnVtYmVyLFxuXSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0ZXBpY2tlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGltZXBpY2tlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHZhbHVlOiBWQUxVRV9QUk9QX1RZUEUsXG4gICAgZGVmYXVsdFZhbHVlOiBWQUxVRV9QUk9QX1RZUEUsXG5cbiAgICBkaXNwbGF5RGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5VGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5RGF0ZVRpbWVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLi4uZnJvbVBhaXJzKG1hcChIQU5ETEVSUywgayA9PiBbaywgUHJvcFR5cGVzLmZ1bmNdKSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0ZXBpY2tlcjogdHJ1ZSxcbiAgICB0aW1lcGlja2VyOiB0cnVlLFxuICAgIG9wdGlvbnM6IG51bGwsXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIGlucHV0OiBudWxsLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBkaXNwbGF5RGF0ZUZvcm1hdDogJ0RELk1NLllZWVknLFxuICAgIGRpc3BsYXlUaW1lRm9ybWF0OiAnSEg6bW0nLFxuICAgIGRpc3BsYXlEYXRlVGltZUZvcm1hdDogJ0RELk1NLllZWVkgSEg6bW0nLFxuICB9XG5cbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZm9ybWF0VGltZTogdGhpcy5wcm9wcy5kaXNwbGF5VGltZUZvcm1hdCxcbiAgICBmb3JtYXREYXRlOiB0aGlzLnByb3BzLmRpc3BsYXlEYXRlRm9ybWF0LFxuICAgIGRheU9mV2Vla1N0YXJ0OiAxLFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gIH1cblxuICBzdGF0aWMgc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0TG9jYWxlKGxvY2FsZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pbml0UGx1Z2luKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1Byb3BzLnZhbHVlIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gbmV4dFN0YXRlLnZhbHVlKSB7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSBtb21lbnQobmV4dFN0YXRlLnZhbHVlKVxuICAgICAgdGhpcy5zZXRPcHRpb25zKHsgdmFsdWU6IG5leHRWYWx1ZS50b0RhdGUoKSB9KVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB0aGlzLiRpbnB1dC5kYXRldGltZXBpY2tlcihvcHRpb25zKVxuICB9XG5cbiAgX2luaXRQbHVnaW4gKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgZGF0ZXBpY2tlciwgdGltZXBpY2tlciwgZGVmYXVsdFZhbHVlLCBsYW5nIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGlucHV0VmFsdWUgPSBkZWZhdWx0VmFsdWUgfHwgdmFsdWVcblxuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0RGF0ZUZvcm1hdHRlcih7XG4gICAgICBwYXJzZURhdGUoZGF0ZSwgX2Zvcm1hdCkge1xuICAgICAgICBjb25zdCBkID0gbW9tZW50KGRhdGUsIF9mb3JtYXQpXG4gICAgICAgIHJldHVybiBkLmlzVmFsaWQoKSA/IGQudG9EYXRlKCkgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgZm9ybWF0RGF0ZShkYXRlLCBfZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KF9mb3JtYXQpXG4gICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgJGlucHV0ID0gJChmaW5kRE9NTm9kZSh0aGlzLmlucHV0KSlcbiAgICBjb25zdCBoYW5kbGVycyA9IGZyb21QYWlycyhtYXAoSEFORExFUlMsIGggPT4gW2gsIHRoaXMuYnVpbGRIYW5kbGVyKHRoaXMucHJvcHNbaF0pXSkpXG4gICAgY29uc3QgX29wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4uaGFuZGxlcnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH1cbiAgICAkaW5wdXQuZGF0ZXRpbWVwaWNrZXIoJ2Rlc3Ryb3knKVxuICAgIHRoaXMuJGlucHV0ID0gJGlucHV0LmRhdGV0aW1lcGlja2VyKHtcbiAgICAgIC4uLl9vcHRpb25zLFxuICAgICAgZm9ybWF0OiB0aGlzLmdldERpc3BsYXlGb3JtYXQoKSxcbiAgICAgIGRhdGVwaWNrZXIsXG4gICAgICB0aW1lcGlja2VyLFxuICAgICAgb25DaGFuZ2VEYXRlVGltZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIHZhbHVlOiBpbnB1dFZhbHVlICYmIG1vbWVudChpbnB1dFZhbHVlKS50b0RhdGUoKSxcbiAgICB9KVxuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyICh2YWx1ZSkge1xuICAgIHZhbHVlID0gbW9tZW50KHZhbHVlLCB0cnVlKVxuICAgIGlmICghdmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICB2YWx1ZSA9IG51bGxcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkSGFuZGxlciAoaGFuZGxlcikge1xuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICBjb25zdCBfc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCAkaW5wdXQpIHtcbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIoY3VycmVudFRpbWUsIF9zZWxmLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldERpc3BsYXlGb3JtYXQgKCkge1xuICAgIGNvbnN0IHsgZGF0ZXBpY2tlciwgdGltZXBpY2tlciwgZGlzcGxheURhdGVGb3JtYXQsIGRpc3BsYXlEYXRlVGltZUZvcm1hdCwgZGlzcGxheVRpbWVGb3JtYXQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoZGF0ZXBpY2tlciAmJiB0aW1lcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVUaW1lRm9ybWF0XG4gICAgfVxuICAgIGlmIChkYXRlcGlja2VyKSB7XG4gICAgICByZXR1cm4gZGlzcGxheURhdGVGb3JtYXRcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5VGltZUZvcm1hdFxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQodGhpcy5nZXREaXNwbGF5Rm9ybWF0KCkpXG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlbmRlcklucHV0ICgpIHtcbiAgICBjb25zdCB7IGlucHV0LCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVmID0gKGMpID0+IHsgdGhpcy5pbnB1dCA9IGMgfVxuXG4gICAgbGV0IGlucHV0RWxcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0RWwgPSBpbnB1dFxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXRFbCA9IGlucHV0KHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHRoaXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwgPSAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpbnB1dEVsLCB7IHJlZiwgcGxhY2Vob2xkZXIsIHZhbHVlOiB0aGlzLmdldFZhbHVlKCkgfSlcbiAgICApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGV0aW1lcGlja2VyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==