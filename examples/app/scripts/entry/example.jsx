'use strict'
import React from 'react'
import { render } from 'react-dom'

import DateTimePicker from 'react-xdsoft-datetimepicker'

class ExampleDatetimeStates extends React.Component {
  state = {
    value: null
  }

  onChange = (value) => {
    this.setState({value})
  }

  render () {
    const {value} = this.state
    return (
      <div>
        <DateTimePicker
          defaultValue="2015-05-25 05:05"
          onChange={this.onChange}
          value={value}
        />
        <pre>
          {value && value.toString()}
          </pre>

        <button onClick={() => this.setState({value: new Date()})}>Set now</button>

      </div>
    )

  }
}

function Example () {
  DateTimePicker.setLocale('ru')
  return (
    <div>

      <h1>Simple</h1>
      <DateTimePicker/>

      <h1>With initial value</h1>
      <DateTimePicker defaultValue="2017-12-25 23:55"/>
      <DateTimePicker defaultValue="2017-12-25 23:55" datepicker={false}/>
      <DateTimePicker defaultValue="2017-12-25 23:55" timepicker={false}/>

      <h1>Locale</h1>
      <DateTimePicker/>

      <h1>More interactions</h1>
      <ExampleDatetimeStates/>

      <h1>Format</h1>

      <DateTimePicker defaultValue="" datepicker={false} format="HH:mm"
                      options={{formatTime: 'HH:mm', formatDate: false}}/>
      <DateTimePicker defaultValue="2017-12-25 23:55" timepicker={false} format="DD.MM.YYYY HH:mm"/>
      <DateTimePicker defaultValue="2017-12-25 23:55" format="DD.MM.YYYY HH:mm"/>
      <h1>Inline</h1>
      <DateTimePicker defaultValue="2017-12-25 23:55" format="DD.MM.YYYY HH:mm"
                      options={{inline: true}}/>

      <h1>Allow dates and times</h1>

      <DateTimePicker
        defaultValue="2017-12-25 23:55"
        options={{
          formatDate: 'YYYY-MM-DD',
          allowDates: [
            '2017-12-01',
            '2017-12-05',
            '2017-12-25',
            '2017-12-26'
          ]
        }}
      />
      <DateTimePicker
        defaultValue="2017-12-25 23:55"
        options={{
          formatDateTime: 'YYYY-MM-DDTHH:mm',
          allowDateTimes: [
            '2017-12-11T10:15',
            '2017-12-15T15:00',
            '2017-12-15T16:00',
            '2017-12-15T17:30',
            '2017-12-25T15:10',
            '2017-12-25T16:00',
            '2017-12-26T20:00'
          ]
        }}
      />

    </div>
  )
}

$(() => {
  render(<Example/>, document.getElementById('container'))
})
