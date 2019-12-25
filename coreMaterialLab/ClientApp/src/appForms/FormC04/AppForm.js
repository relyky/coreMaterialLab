import React, { Fragment, useState } from 'react'
import DatePicker from '../../components/DatePicker'
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

//import { format, parse } from 'date-fns'
//import moment from 'moment'

//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

const APP_TITLE = 'FormC04 Date Picker'
const APP_DESCRIPTION = 'Date Picker'

export default function AppForm() {
    const [date1, setDate1] = useState('')
    const [date2, setDate2] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [readOnly, setReadOnly] = useState(false)
    const [locale, setLocale] = useState('zhTW')

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <hr />

            <FormGroup row>
                <FormControlLabel label="disabled"
                    control={<Checkbox checked={disabled} value="disabled" color="primary"
                        onChange={() => setDisabled(!disabled)} />}
                />
                <FormControlLabel label="readOnly"
                    control={<Checkbox checked={readOnly} value="readOnly" color="primary"
                        onChange={() => setReadOnly(!readOnly)} />}
                />
            </FormGroup>

            <FormControl>
                <InputLabel>locale</InputLabel>
                <Select value={locale} onChange={(e) => setLocale(e.target.value)}>
                    <MenuItem value='zhTW'>zhTW</MenuItem>
                    <MenuItem value='enUS'>enUS</MenuItem>
                </Select>
            </FormControl>

            <hr />
            <h4>react-datepicker</h4>

            <label>10碼日期&nbsp;&nbsp;</label>
            <DatePicker
                name='date1'
                value={date1}
                onChange={(name, value) => setDate1(value)}
            />

            <p>{date1}</p>

            <label>8碼日期&nbsp;&nbsp;</label>
            <DatePicker
                name='date2'
                value={date2}
                onChange={(name, value) => setDate2(value)}
                disabled={disabled}
                readOnly={readOnly}
                locale={locale}
                mode='YMD8'
                minDate="20191210"
                maxDate="20191228"
            />

            <p>{date2}</p>

        </Fragment>
    )
}
