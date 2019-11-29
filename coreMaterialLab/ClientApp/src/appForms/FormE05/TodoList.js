import React, { useState, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import t from 'typy'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function SimpleList() {
    const [appInfo, meta, setMeta] = useAppInfo()
    const [formData, { assignValue, assignProps, toggleItem2 }] = useFormData()
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {t(formData.itemList).isArray && formData.itemList.map((item, index) =>
                    <ListItem key={index}>
                        <ListItemIcon>
                            <Checkbox checked={item.isChk || false} onChange={e => toggleItem2('itemList', index)} />
                        </ListItemIcon>
                        <ListItemText primary={item.desc} />
                    </ListItem>
                )}
            </List>
        </div>
    )
}