import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker"

import zhTW from 'date-fns/locale/zh-TW'
import enUS from 'date-fns/locale/en-US'
//import es from 'date-fns/locale/es';

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zhTW', zhTW)
registerLocale('enUS', enUS)
//registerLocale('es', es)

export default function DatePickerLocale({ name, value, onChange, disabled, readOnly, locale }) {
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
                locale={locale}
                placeholderText='YYYY/MM/DD'
                dateFormatCalendar={locale === 'zhTW' ? 'yyyy LLLL' : 'LLLL yyyy'}
                dateFormat='yyyy/MM/dd'
                todayButton={locale === 'zhTW' ? '今天' : 'Today'}
                disabled={disabled}
                readOnly={readOnly}
                isClearable={!(disabled || readOnly)}
            />
        </Fragment>
    )
}

DatePickerLocale.defaultProps = {
    value: '',
    mode: 'Y4MD',
    disabled: false,
    readOnly: false,
    locale: 'zhTW'
}

DatePickerLocale.propTypes = {
    name: PropTypes.string, // state id-name
    value: PropTypes.string,  // YYYY/MM/DD, YYYYMMDD
    //mode: PropTypes.string,  // Y4MD, YMD8
    //minDate: PropTypes.string,
    //maxDate: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    locale: PropTypes.string, // zhTW,enUS 中英文版
}