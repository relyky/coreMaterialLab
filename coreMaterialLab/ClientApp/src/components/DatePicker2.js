import React, { Fragment, useState, useEffect } from 'react'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export default function DatePickerLocale({ name, value, onChange }) {
    //const [date1, setDate1] = useState(null)

    //useEffect(() => {
    //    //setDate1('somebody')
    //}, []) // 等同 componentDidMount

    function handleDayChange(date) {
        onChange(name, date)
    }

    return (
        <Fragment>
            <DayPickerInput
                value={value}
                onDayChange={handleDayChange}
                keepFocus={false}
                dayPickerProps={{
                    todayButton: '今天',
                }}
            />
        </Fragment>
    )
}
