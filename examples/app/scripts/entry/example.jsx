'use strict'
import React from 'react'
import { render } from 'react-dom'

import DateTimePicker from 'react-xdsoft-datetimepicker'

class ExampleDatetimeStates extends React.Component {
  state = {
    value: null,
  }

  onChange = (value) => {
    this.setState({ value: value })
  }

  render () {
    const { value } = this.state
    return (
      <div>
        <DateTimePicker defaultValue="2015-05-25 05:05"
                        onChange={this.onChange}
                        value={value}
        />
        <pre>
          {value && value.toString()}
          </pre>

        <button onClick={() => this.setState({ value: new Date() })}>Set now</button>

      </div>
    )

  }
}

function Example () {
  return (
    <div>

      <h1>Simple</h1>
      <DateTimePicker/>

      <h1>With initial value</h1>
      <DateTimePicker defaultValue="2017-12-25 23:55"/>
      <DateTimePicker defaultValue="2017-12-25 23:55" datepicker={false}/>
      <DateTimePicker defaultValue="2017-12-25 23:55" timepicker={false}/>

      <h1>More interactions</h1>
      <ExampleDatetimeStates/>

    </div>
  )
}

$(() => {
  render(<Example/>, document.getElementById('container'))
})
