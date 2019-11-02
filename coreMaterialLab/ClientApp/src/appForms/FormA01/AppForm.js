import React, { Fragment, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const APP_TITLE = 'FormA01'
const APP_DESCRIPTION = 'React-Hooks test, useState, useEffect'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function AppForm() {
    const classes = useStyles();
    const [count, setCount] = useState(87)
    const [traceList, setTraceList] = useState([])

    useEffect(() => {
        setCount(13)
    }, [])

    function handleClick() {
        // trace
        traceList.push(count)
        setTraceList(traceList)

        // count
        setCount(count + 1)
    }

    return (
        <Fragment>
            {console.log('count', count)}
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <Button variant="contained" color="primary" onClick={handleClick}>
                {count}
            </Button>
            <hr />
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Tracing
                </Typography>
                {traceList.map((c, i) =>
                    <Typography key={i} component="p">
                        {c}
                    </Typography>
                )}
            </Paper>
        </Fragment>
    )
}
