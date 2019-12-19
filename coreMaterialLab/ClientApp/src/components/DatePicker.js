import React, { Fragment, useState, useEffect } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import zhTW from 'date-fns/locale/zh-TW'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zhTW', zhTW)

export default function DatePickerLocale({ name, value, onChange, disabled, readOnly }) {
    //const [date, setDate] = useState(null)

    //useEffect(() => {
    //    //setDate1('somebody')
    //}, []) // 等同 componentDidMount

    function handleChange(date) {
        onChange(name, date)
    }

    return (
        <Fragment>
            <DatePicker
                selected={value}
                onChange={handleChange}
                locale='zhTW'
                placeholderText='YYYY/MM/DD'
                dateFormatCalendar='yyyy LLLL'
                dateFormat='yyyy/MM/dd'
                todayButton='今天'
                disabled={disabled}
                readOnly={readOnly}
                isClearable={!(disabled || readOnly)}
            />
        </Fragment>
    )
}
