import React, { Fragment } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import FavoriteIcon from '@material-ui/icons/Favorite'
import NavigationIcon from '@material-ui/icons/Navigation'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

export default function ButtonsSample() {
    const classes = useStyles()
    return (
        <Fragment>
            <Box m={1}>
                <h4>Contained Buttons（實心按鈕）</h4>
                <Button variant="contained" className={classes.button}>
                    Default
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Secondary
                </Button>
                <Button variant="contained" color="secondary" disabled className={classes.button}>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons" className={classes.button}>
                    Link
                </Button>
            </Box>

            <Box m={1}>
                <h4>Outlined Buttons（描邊按鈕）</h4>
                <Button variant="outlined" className={classes.button}>
                    Default
                </Button>
                <Button variant="outlined" color="primary" className={classes.button}>
                    Primary
                </Button>
                <Button variant="outlined" color="secondary" className={classes.button}>
                    Secondary
                </Button>
                <Button variant="outlined" color="secondary" disabled className={classes.button}>
                    Disabled
                </Button>
                <Button variant="outlined" href="#contained-buttons" className={classes.button}>
                    Link
                </Button>
            </Box>

            <Box m={1}>
                <h4>Floating Action Buttons（浮動按鈕）</h4>
                <Fab color="primary" aria-label="add" className={classes.fab}>
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit" className={classes.fab}>
                    <EditIcon />
                </Fab>
                <Fab variant="extended" aria-label="like" className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                </Fab>
                <Fab disabled aria-label="like" className={classes.fab}>
                    <FavoriteIcon />
                </Fab>
            </Box>
        </Fragment>
    )
}