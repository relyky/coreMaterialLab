import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

//---------------------------------------------
export function InputButton(props) {
    const classes = useStyles()
    //const { onClick, color } = props
    return (
        <Fragment>
            {/*<Button variant="contained" className={classes.button} color={color} onClick={onClick}>*/}
            <Button variant="contained" className={classes.button} {...props}>
                {props.children}
            </Button>
        </Fragment>
    )
}

//---------------------------------------------
export function InputText(props) {
    const classes = useStyles()
    const { name, value, onChange, label } = props
    return (
        <TextField
            className={classes.textField}
            label={label}
            name={name}
            value={value || ''}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            margin="normal"
            variant="outlined"
        />
    )
}

//export default function InputText(props) {
//    const { name, value, onChange, label } = props
//    return (
//        <Fragment>
//            <label>{label}</label>
//            <input type='text'
//                name={name}
//                value={value || ''}
//                onChange={(e) => onChange(e.target.name, e.target.value)}
//            />
//        </Fragment>
//    )
//}