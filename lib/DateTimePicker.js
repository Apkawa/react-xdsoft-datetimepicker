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
          defaultValue = _props.defaultValue;
      var value = this.state.value;


      var inputValue = defaultValue || value;

      _jquery2.default.datetimepicker.setLocale('ru');
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
      this.setState({ value: (0, _moment2.default)(value) });
      this.props.onChange((0, _moment2.default)(value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlVGltZVBpY2tlci5qc3giXSwibmFtZXMiOlsiSVNPX0RBVEVfRk9STUFUIiwiSVNPX1RJTUVfRk9STUFUIiwiSVNPX0RBVEVUSU1FX0ZPUk1BVCIsIkhBTkRMRVJTIiwiVkFMVUVfUFJPUF9UWVBFIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJudW1iZXIiLCJEYXRlVGltZVBpY2tlciIsImRlZmF1bHRPcHRpb25zIiwiZm9ybWF0VGltZSIsInByb3BzIiwiZGlzcGxheVRpbWVGb3JtYXQiLCJmb3JtYXREYXRlIiwiZGlzcGxheURhdGVGb3JtYXQiLCJkYXlPZldlZWtTdGFydCIsInN0YXRlIiwidmFsdWUiLCJfaW5pdFBsdWdpbiIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJuZXh0VmFsdWUiLCJzZXRPcHRpb25zIiwidG9EYXRlIiwib3B0aW9ucyIsIiRpbnB1dCIsImRhdGV0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsInRpbWVwaWNrZXIiLCJkZWZhdWx0VmFsdWUiLCJpbnB1dFZhbHVlIiwic2V0TG9jYWxlIiwic2V0RGF0ZUZvcm1hdHRlciIsInBhcnNlRGF0ZSIsImRhdGUiLCJfZm9ybWF0IiwiZCIsImlzVmFsaWQiLCJmb3JtYXQiLCJpbnB1dCIsImhhbmRsZXJzIiwiaCIsImJ1aWxkSGFuZGxlciIsIl9vcHRpb25zIiwiZ2V0RGlzcGxheUZvcm1hdCIsIm9uQ2hhbmdlRGF0ZVRpbWUiLCJvbkNoYW5nZUhhbmRsZXIiLCJiaW5kIiwib25DaGFuZ2UiLCJoYW5kbGVyIiwidW5kZWZpbmVkIiwiX3NlbGYiLCJjdXJyZW50VGltZSIsImRpc3BsYXlEYXRlVGltZUZvcm1hdCIsInBsYWNlaG9sZGVyIiwicmVmIiwiYyIsImlucHV0RWwiLCJfIiwiaXNGdW5jdGlvbiIsImNsb25lRWxlbWVudCIsImdldFZhbHVlIiwicmVuZGVySW5wdXQiLCJwcm9wVHlwZXMi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QUFVd0MsTTtBQUNuQnJDLGNBQVksb0JBQVVzQyxJO0FBQ3RCckMsY0FBWSxvQkFBVXFDLEk7QUFDdEJYLGVBQWEsb0JBQVVwRCxNO0FBQ3ZCcUMsU0FBTyxvQkFBVXRDLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVWlFLElBQVgsRUFBaUIsb0JBQVVDLE9BQTNCLENBQXBCLEM7QUFDUHBELFNBQU9mLGU7QUFDUDZCLGdCQUFjN0IsZTs7QUFFZFkscUJBQW1CLG9CQUFVVixNO0FBQzdCUSxxQkFBbUIsb0JBQVVSLE07QUFDN0JtRCx5QkFBdUIsb0JBQVVuRCxNOztBQUVqQzhDLFlBQVUsb0JBQVVrQjtHQUNqQixzQkFBVSxzQkFBSW5FLFFBQUosRUFBYztBQUFBLFNBQUssQ0FBQ3FFLENBQUQsRUFBSSxvQkFBVUYsSUFBZCxDQUFMO0FBQUEsQ0FBZCxDQUFWLEMsVUFHRUcsWSxHQUFlO0FBQ3BCMUMsY0FBWSxJQURRO0FBRXBCQyxjQUFZLElBRlE7QUFHcEJKLFdBQVMsSUFIVztBQUlwQjhCLGVBQWEsRUFKTztBQUtwQmYsU0FBTyxJQUxhO0FBTXBCVixnQkFBYyxJQU5NO0FBT3BCZCxTQUFPLElBUGE7QUFRcEJILHFCQUFtQixZQVJDO0FBU3BCRixxQkFBbUIsT0FUQztBQVVwQjJDLHlCQUF1QjtBQVZILEM7a0JBbEJIL0MsYyIsImZpbGUiOiJEYXRlVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vLyBmb3IgaW50ZWdyYXRlIGh0dHA6Ly94ZHNvZnQubmV0L2pxcGx1Z2lucy9kYXRldGltZXBpY2tlci9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBmcm9tUGFpcnMgZnJvbSAnbG9kYXNoLmZyb21wYWlycydcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoLm1hcCdcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaW1wb3J0ICdqcXVlcnktZGF0ZXRpbWVwaWNrZXIvYnVpbGQvanF1ZXJ5LmRhdGV0aW1lcGlja2VyLmZ1bGwnXG5pbXBvcnQgJ2pxdWVyeS1kYXRldGltZXBpY2tlci9qcXVlcnkuZGF0ZXRpbWVwaWNrZXIuY3NzJ1xuXG5jb25zdCBJU09fREFURV9GT1JNQVQgPSAnWVlZWS1NTS1ERCdcbmNvbnN0IElTT19USU1FX0ZPUk1BVCA9ICdISDptbSdcbmNvbnN0IElTT19EQVRFVElNRV9GT1JNQVQgPSBgJHtJU09fREFURV9GT1JNQVR9VCR7SVNPX1RJTUVfRk9STUFUfWBcblxuY29uc3QgSEFORExFUlMgPSBbXG4gICdvblNlbGVjdERhdGUnLFxuICAnb25TZWxlY3RUaW1lJyxcbiAgJ29uQ2hhbmdlTW9udGgnLFxuICAnb25DaGFuZ2VZZWFyJyxcbiAgJ29uQ2hhbmdlRGF0ZVRpbWUnLFxuICAnb25TaG93JyxcbiAgJ29uQ2xvc2UnLFxuICAnb25TZWxlY3REYXRlJyxcbiAgJ29uR2VuZXJhdGUnLFxuXVxuXG5jb25zdCBWQUxVRV9QUk9QX1RZUEUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIFByb3BUeXBlcy5udW1iZXIsXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRlcGlja2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lcGlja2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdmFsdWU6IFZBTFVFX1BST1BfVFlQRSxcbiAgICBkZWZhdWx0VmFsdWU6IFZBTFVFX1BST1BfVFlQRSxcblxuICAgIGRpc3BsYXlEYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlUaW1lRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlEYXRlVGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAuLi5mcm9tUGFpcnMobWFwKEhBTkRMRVJTLCBrID0+IFtrLCBQcm9wVHlwZXMuZnVuY10pKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlcGlja2VyOiB0cnVlLFxuICAgIHRpbWVwaWNrZXI6IHRydWUsXG4gICAgb3B0aW9uczogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgaW5wdXQ6IG51bGwsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc3BsYXlEYXRlRm9ybWF0OiAnREQuTU0uWVlZWScsXG4gICAgZGlzcGxheVRpbWVGb3JtYXQ6ICdISDptbScsXG4gICAgZGlzcGxheURhdGVUaW1lRm9ybWF0OiAnREQuTU0uWVlZWSBISDptbScsXG4gIH1cblxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBmb3JtYXRUaW1lOiB0aGlzLnByb3BzLmRpc3BsYXlUaW1lRm9ybWF0LFxuICAgIGZvcm1hdERhdGU6IHRoaXMucHJvcHMuZGlzcGxheURhdGVGb3JtYXQsXG4gICAgZGF5T2ZXZWVrU3RhcnQ6IDEsXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pbml0UGx1Z2luKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1Byb3BzLnZhbHVlIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gbmV4dFN0YXRlLnZhbHVlKSB7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSBtb21lbnQobmV4dFN0YXRlLnZhbHVlKVxuICAgICAgdGhpcy5zZXRPcHRpb25zKHsgdmFsdWU6IG5leHRWYWx1ZS50b0RhdGUoKSB9KVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB0aGlzLiRpbnB1dC5kYXRldGltZXBpY2tlcihvcHRpb25zKVxuICB9XG5cbiAgX2luaXRQbHVnaW4gKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgZGF0ZXBpY2tlciwgdGltZXBpY2tlciwgZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGlucHV0VmFsdWUgPSBkZWZhdWx0VmFsdWUgfHwgdmFsdWVcblxuICAgICQuZGF0ZXRpbWVwaWNrZXIuc2V0TG9jYWxlKCdydScpXG4gICAgJC5kYXRldGltZXBpY2tlci5zZXREYXRlRm9ybWF0dGVyKHtcbiAgICAgIHBhcnNlRGF0ZShkYXRlLCBfZm9ybWF0KSB7XG4gICAgICAgIGNvbnN0IGQgPSBtb21lbnQoZGF0ZSwgX2Zvcm1hdClcbiAgICAgICAgcmV0dXJuIGQuaXNWYWxpZCgpID8gZC50b0RhdGUoKSA6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBmb3JtYXREYXRlKGRhdGUsIF9mb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoX2Zvcm1hdClcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCAkaW5wdXQgPSAkKGZpbmRET01Ob2RlKHRoaXMuaW5wdXQpKVxuICAgIGNvbnN0IGhhbmRsZXJzID0gZnJvbVBhaXJzKG1hcChIQU5ETEVSUywgaCA9PiBbaCwgdGhpcy5idWlsZEhhbmRsZXIodGhpcy5wcm9wc1toXSldKSlcbiAgICBjb25zdCBfb3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5oYW5kbGVycyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfVxuXG4gICAgdGhpcy4kaW5wdXQgPSAkaW5wdXQuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgLi4uX29wdGlvbnMsXG4gICAgICBmb3JtYXQ6IHRoaXMuZ2V0RGlzcGxheUZvcm1hdCgpLFxuICAgICAgZGF0ZXBpY2tlcixcbiAgICAgIHRpbWVwaWNrZXIsXG4gICAgICBvbkNoYW5nZURhdGVUaW1lOiB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgdmFsdWU6IGlucHV0VmFsdWUgJiYgbW9tZW50KGlucHV0VmFsdWUpLnRvRGF0ZSgpLFxuICAgIH0pXG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBtb21lbnQodmFsdWUpIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShtb21lbnQodmFsdWUpKVxuICB9XG5cbiAgYnVpbGRIYW5kbGVyIChoYW5kbGVyKSB7XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGNvbnN0IF9zZWxmID0gdGhpc1xuICAgIHJldHVybiBmdW5jdGlvbiAoY3VycmVudFRpbWUsICRpbnB1dCkge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgaGFuZGxlcihjdXJyZW50VGltZSwgX3NlbGYsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RGlzcGxheUZvcm1hdCAoKSB7XG4gICAgY29uc3QgeyBkYXRlcGlja2VyLCB0aW1lcGlja2VyLCBkaXNwbGF5RGF0ZUZvcm1hdCwgZGlzcGxheURhdGVUaW1lRm9ybWF0LCBkaXNwbGF5VGltZUZvcm1hdCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChkYXRlcGlja2VyICYmIHRpbWVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5RGF0ZVRpbWVGb3JtYXRcbiAgICB9XG4gICAgaWYgKGRhdGVwaWNrZXIpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5RGF0ZUZvcm1hdFxuICAgIH1cbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgcmV0dXJuIGRpc3BsYXlUaW1lRm9ybWF0XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCh0aGlzLmdldERpc3BsYXlGb3JtYXQoKSlcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmVuZGVySW5wdXQgKCkge1xuICAgIGNvbnN0IHsgaW5wdXQsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZWYgPSAoYykgPT4geyB0aGlzLmlucHV0ID0gYyB9XG5cbiAgICBsZXQgaW5wdXRFbFxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXRFbCA9IGlucHV0XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGlucHV0KSkge1xuICAgICAgICBpbnB1dEVsID0gaW5wdXQodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwgdGhpcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbCA9ICg8aW5wdXQgdHlwZT1cInRleHRcIi8+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGlucHV0RWwsIHsgcmVmLCBwbGFjZWhvbGRlciwgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKSB9KVxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXRpbWVwaWNrZXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXQoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19