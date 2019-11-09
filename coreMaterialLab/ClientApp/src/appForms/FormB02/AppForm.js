﻿import React, { Fragment, useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const APP_TITLE = 'FormB02 Grid'
const APP_DESCRIPTION = 'Grid Demo'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))

function GridInfo() {
    const classes = useStyles()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    }, []) // 等同 componentDidMount

    return (
        <Fragment>
            <Hidden smUp>
                <Paper component="h2" className={classes.paper}>
                    {`0px <= ${windowWidth},xs < 600px`}
                </Paper>
            </Hidden>

            <Hidden xsDown mdUp>
                <Paper component="h2" className={classes.paper}>
                    {`600px <= ${windowWidth},sm < 960px`}
                </Paper>
            </Hidden>

            <Hidden smDown lgUp>
                <Paper component="h2" className={classes.paper}>
                    {`960px <= ${windowWidth},md < 1280px`}
                </Paper>
            </Hidden>

            <Hidden mdDown xlUp>
                <Paper component="h2" className={classes.paper}>
                    {`1280px <= ${windowWidth},lg < 1920px`}
                </Paper>
            </Hidden>

            <Hidden lgDown>
                <Paper component="h2" className={classes.paper}>
                    {`1920px <= ${windowWidth},xl < larger `}
                </Paper>
            </Hidden>
        </Fragment>
    )
}

export default function AppForm() {
    const classes = useStyles()
    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <GridInfo />

            {/* Grid demo */}
            <Grid container spacing={1}>
                <Hidden lgDown>
                    <Grid item xl={1}>
                        <Paper component="h1" className={classes.paper} style={{ background: 'lightgrey' }}>
                            left
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper component="h1" className={classes.paper} style={{ background: 'red' }}>
                        THIS
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper component="h1" className={classes.paper} style={{ background: 'green' }}>
                        IS
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper component="h1" className={classes.paper} style={{ background: 'lightblue' }}>
                        A
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper component="h1" className={classes.paper} style={{ background: 'cyan' }}>
                        NICE
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper component="h1" className={classes.paper} style={{ background: 'pink' }}>
                        BOOK
                    </Paper>
                </Grid>
                <Hidden lgDown>
                    <Grid item xl={1}>
                        <Paper component="h1" className={classes.paper} style={{ background: 'lightgrey' }}>
                            right
                        </Paper>
                    </Grid>
                </Hidden>
            </Grid>
        </Fragment>
    )
}
