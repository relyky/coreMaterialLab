import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import DatePicker, { registerLocale } from 'react-datepicker'
import { format, parse, isValid } from 'date-fns'

import zhTW from 'date-fns/locale/zh-TW'
import enUS from 'date-fns/locale/en-US'
//import es from 'date-fns/locale/es';

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zhTW', zhTW)
registerLocale('enUS', enUS)
//registerLocale('es', es)

function ymdToDate(ymd, mode) {
    //console.log('ymdToDate', ymd, mode)
    if (ymd === null || ymd === undefined || ymd.trim() === '')
        return null;

    // YYYYMMDD 8碼格式
    if (mode === "YMD8")
        return parse(ymd, 'yyyyMMdd', new Date());

    // default: YYYY/MM/DD 10碼格式
    return parse(ymd, 'yyyy/MM/dd', new Date());
}

function dateToYmd(date, mode) {
    //console.log('dateToYmd', date, mode)
    if (date === null || date === undefined)
        return ''

    if (!isValid(date))
        return ''

    // YYYYMMDD格式
    if (mode === "YMD8")
        return format(date, 'yyyyMMdd')

    // default: YYYY/MM/DD格式
    return format(date, 'yyyy/MM/dd')
}

/// 注意：以 react-datepicker@2.10 為基礎開發
export default function DatePickerLocale({ name, value, onChange, disabled, readOnly, locale, mode, minDate, maxDate }) {
    return (
        <DatePicker
            selected={ymdToDate(value, mode)}
            onChange={(date) => onChange(name, dateToYmd(date, mode))}
            locale={locale}
            placeholderText='YYYY/MM/DD'
            dateFormat='yyyy/MM/dd'
            dateFormatCalendar={locale === 'zhTW' ? 'yyyy LLLL' : 'LLLL yyyy'}
            todayButton={locale === 'zhTW' ? '今天' : 'Today'}
            disabled={disabled}
            readOnly={readOnly}
            isClearable={!(disabled || readOnly)}
            showYearDropdown={false}
            showMonthDropdown={false}
            dropdownMode='select'
            className='form-control'
            minDate={ymdToDate(minDate, mode) || new Date(1900, 1, 1)}
            maxDate={ymdToDate(maxDate, mode) || new Date(2100, 12, 31)}
        />
    )
}

DatePickerLocale.propTypes = {
    name: PropTypes.string, // state id-name
    value: PropTypes.string,  // YYYY/MM/DD, YYYYMMDD
    mode: PropTypes.string,  // Y4MD, YMD8
    minDate: PropTypes.string, // 日期範圍最小，預設 1900/1/1
    maxDate: PropTypes.string, // 日期範圍最大，預設 2100/12/31
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    locale: PropTypes.string, // zhTW,enUS 中英文版
}

DatePickerLocale.defaultProps = {
    value: '',
    mode: 'Y4MD',
    disabled: false,
    readOnly: false,
    locale: 'zhTW'
}