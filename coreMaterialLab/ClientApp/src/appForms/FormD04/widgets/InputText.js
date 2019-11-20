import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
}));

export default function InputText(props) {
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