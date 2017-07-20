'use strict'

// for integrate http://xdsoft.net/jqplugins/datetimepicker/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'

import fromPairs from 'lodash.frompairs'
import map from 'lodash.map'

import moment from 'moment'

import $ from 'jquery'

import 'jquery-datetimepicker/build/jquery.datetimepicker.full'
import 'jquery-datetimepicker/jquery.datetimepicker.css'

const ISO_DATE_FORMAT = 'YYYY-MM-DD'
const ISO_TIME_FORMAT = 'HH:mm'
const ISO_DATETIME_FORMAT = `${ISO_DATE_FORMAT}T${ISO_TIME_FORMAT}`

const HANDLERS = [
  'onSelectDate',
  'onSelectTime',
  'onChangeMonth',
  'onChangeYear',
  'onChangeDateTime',
  'onShow',
  'onClose',
  'onSelectDate',
  'onGenerate'
]

const VALUE_PROP_TYPE = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.instanceOf(Date),
  PropTypes.instanceOf(moment),
  PropTypes.number
])

export default class DateTimePicker extends Component {
  static propTypes = {
    options: PropTypes.object,
    datepicker: PropTypes.bool,
    timepicker: PropTypes.bool,
    placeholder: PropTypes.string,
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    value: VALUE_PROP_TYPE,
    defaultValue: VALUE_PROP_TYPE,
    value_format: PropTypes.string,

    displayDateFormat: PropTypes.string,
    displayTimeFormat: PropTypes.string,
    displayDateTimeFormat: PropTypes.string,

    onChange: PropTypes.func,
    ...fromPairs(map(HANDLERS, k => [k, PropTypes.func]))
  }

  static defaultProps = {
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
  }

  defaultOptions = {
    formatTime: this.props.displayTimeFormat,
    formatDate: this.props.displayDateFormat,
    dayOfWeekStart: 1
  }

  state = {
    value: this.props.value
  }

  static setLocale (locale) {
    $.datetimepicker.setLocale(locale)
    DateTimePicker.setFormatter()
  }

  static setFormatter (formatter) {
    $.datetimepicker.setDateFormatter({
      parseDate (date, _format) {
        const d = moment(date, _format)
        return d.isValid() ? d.toDate() : false
      },

      formatDate (date, _format) {
        return moment(date).format(_format)
      },
      ...formatter
    })
  }

  componentDidMount () {
    this._initPlugin()
  }

  componentWillReceiveProps (newProps) {
    if (this.props.value !== newProps.value) {
      this.setValue(newProps.value)
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.state.value !== nextState.value) {
      // const nextValue = moment(nextState.value)
      this.setOptions({value: nextState.value})
    }
  }

  setOptions (options) {
    this.$input.datetimepicker(options)
  }

  _initPlugin () {
    const {options, datepicker, timepicker, defaultValue, lang} = this.props
    const {value} = this.state

    const inputValue = defaultValue || value

    DateTimePicker.setFormatter
    const $input = $(findDOMNode(this.input))
    const handlers = fromPairs(map(HANDLERS, h => [h, this.buildHandler(this.props[h])]))
    const _options = {
      ...this.defaultOptions,
      ...handlers,
      ...options
    }
    $input.datetimepicker('destroy')
    this.$input = $input.datetimepicker({
      ..._options,
      format: this.getDisplayFormat(),
      datepicker,
      timepicker,
      onChangeDateTime: this.onChangeHandler.bind(this),
      value: inputValue // && moment(inputValue).toDate()
    })
  }

  onChangeHandler (value) {
    value = moment(value, true)
    if (!value.isValid()) {
      value = null
    }
    this.setValue(value)
    if (this.props.onChange) {
      this.props.onChange(moment(this.state.value))
    }
  }

  buildHandler (handler) {
    if (!handler) {
      return undefined
    }
    const _self = this
    return function (currentTime, $input) {
      if (handler) {
        handler(currentTime, _self, this)
      }
    }
  }

  getDisplayFormat () {
    const {
      datepicker, timepicker,
      displayDateFormat,
      displayDateTimeFormat,
      displayTimeFormat
    } = this.props

    if (datepicker && timepicker) {
      return displayDateTimeFormat
    }
    if (datepicker) {
      return displayDateFormat
    }
    if (timepicker) {
      return displayTimeFormat
    }
  }

  getValueFormat () {
    const {
      datepicker, timepicker,
      value_format
    } = this.props

    if (value_format) {
      return value_format

    }
    if (datepicker && timepicker) {
      return ISO_DATETIME_FORMAT
    }
    if (datepicker) {
      return ISO_DATE_FORMAT
    }
    if (timepicker) {
      return ISO_TIME_FORMAT
    }

  }

  setValue (value) {
    this.setState({value: value && moment(value, this.getValueFormat()).toDate()})
  }

  getValue () {
    const {value} = this.state
    if (value) {
      return moment(value, this.getValueFormat()).format(this.getDisplayFormat())
    }
    return undefined
  }

  renderInput () {
    const {input, placeholder} = this.props

    const ref = (c) => { this.input = c }

    let inputEl
    if (input) {
      inputEl = input
      if (_.isFunction(input)) {
        inputEl = input(this.props, this.state, this)
      }
    } else {
      inputEl = (<input type="text"/>)
    }
    return (
      React.cloneElement(inputEl, {ref, placeholder, value: this.getValue()})
    )
  }

  render () {
    return (
      <div className="datetimepicker">
        {this.renderInput()}
      </div>
    )
  }
}
