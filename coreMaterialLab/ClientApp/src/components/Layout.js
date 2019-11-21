import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { NavMenu } from './NavMenu'
import useAppInfo from '../Hooks/useAppInfo'
import UIBlocker from 'react-ui-blocker'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

/// PersistentDrawerLeft
export default function Layout(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [appInfo, meta] = useAppInfo()
    const [open, setOpen] = useState(false)

    function handleDrawerOpen() {
        setOpen(true)
    }

    function handleDrawerClose() {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <UIBlocker theme="foldingCube" isVisible={meta.f_blocking} message="Loading.." />
            <CssBaseline />
            <AppBar position="fixed"
                className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        onClick={handleDrawerOpen} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Logo
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="persistent" anchor="left"
                classes={{ paper: classes.drawerPaper }} open={open}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                {/*Menu*/}
                <NavMenu />

            </Drawer>

            <main className={clsx(classes.content, { [classes.contentShift]: open })}>
                {/*Hat*/}
                <div className={classes.drawerHeader} />

                {/*Body-Content*/}
                {props.children}

            </main>
        </div>
    )
}
