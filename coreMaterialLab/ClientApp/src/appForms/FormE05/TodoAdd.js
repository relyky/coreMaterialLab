import React, { useState, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import t from 'typy'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    input: {
        margin: theme.spacing(1),
    },
}))

export default function TodoAdd() {
    const classes = useStyles()
    //const [appInfo, meta, setMeta] = useAppInfo()
    const [formData, { assignValue, assignProps, addItem2 }] = useFormData()
    const [value, setValue] = useState('')

    function handleKeyUp(e) {
        // on <Enter>
        if (e.keyCode === 13) {
            const newItem = { desc: value }
            addItem2('itemList', newItem)
            setValue('')
        }
    }

    return (
        <div className={classes.root}>
            <Input value={value}
                onKeyUp={handleKeyUp}
                onChange={(e) => setValue(e.target.value)}
                placeholder="input new todo"
                className={classes.input}
                inputProps={{
                    'aria-label': 'description',
                }}
            />
        </div>
    )
}