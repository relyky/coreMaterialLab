﻿import React from 'react';
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

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    className={classes.textField}
                    label="Standard"
                    margin="normal"
                />
            </div>
            <div>
                <TextField
                    className={classes.textField}
                    label="Standard"
                    margin="normal"
                />
            </div>
            <div>
                <TextField
                    className={classes.textField}
                    label="Standard"
                    margin="normal"
                />
            </div>
            <div>
                <TextField
                    className={classes.textField}
                    label="Standard"
                    margin="normal"
                />
            </div>
            <div>
                <TextField
                    className={classes.textField}
                    label="Filled"
                    margin="normal"
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    className={classes.textField}
                    label="Outlined"
                    margin="normal"
                    variant="outlined"
                />
            </div>
        </form>
    );
}