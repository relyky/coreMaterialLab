import React, { useState, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import t from 'typy'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function SimpleList() {
    const [appInfo, meta, setMeta] = useAppInfo()
    const [formData, { assignValue, assignProps }] = useFormData()
    const classes = useStyles()

    // 等同建構式(constructor)
    useState(() => {
        assignProps({
            itemList: [
                { desc: '早上七點吃早餐' },
                { desc: '中午十二點吃午餐' },
                { desc: '下午三點喝奶茶' },
                { desc: '晚上六點吃晚餐' },
                { desc: '晚上十點吃宵夜' },
            ]
        })
    })

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {t(formData.itemList).isArray && formData.itemList.map((item, index) =>
                    <ListItem key={index}>
                        <ListItemText primary={item.desc} />
                    </ListItem>
                )}
            </List>
        </div>
    )
}