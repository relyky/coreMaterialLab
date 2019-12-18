import React, { Fragment, useState, useEffect } from 'react'
import DatePicker2 from '../../components/DatePicker2'
import DatePicker from '../../components/DatePicker'
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import moment from 'moment'

//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

const APP_TITLE = 'FormC04 Date Picker'
const APP_DESCRIPTION = 'Date Picker'

export default function AppForm() {
    const [date1, setDate1] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [readOnly, setReadOnly] = useState(false)

    useEffect(() => {
        //setDate1('somebody')
    }, []) // 等同 componentDidMount

    function handleChange(name, date) {
        console.log('handleChange', date)
        setDate1(date)
    }

    console.log('date1', { date1 })
    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <hr />
            <h5>date1</h5>
            <h4>{JSON.stringify(date1)}</h4>
            <h4>{moment(date1).format('YYYY/MM/DD')}</h4>
            <h4>{JSON.stringify(new Date(moment(date1).format('YYYY/MM/DD')))}</h4>

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

            <hr />
            <h4>react-datepicker</h4>

            <DatePicker
                name='date1'
                value={date1}
                onChange={handleChange}
                disabled={disabled}
                readOnly={readOnly}
            />

            {/*
            <hr />
            <h4>react-day-picker</h4>
            <DatePicker2
                name='date1'
                value={date1}
                onChange={handleChange}
            />*/}
        </Fragment>
    )
}
