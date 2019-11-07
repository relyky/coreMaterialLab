import React from 'react'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

/// PersistentDrawerLeft
export function NavMenu() {
    return (
        <React.Fragment >
            <Divider />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Home`} />
                </ListItem>
                <ListItem button component={Link} to="/counter">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Counter`} />
                </ListItem>
                <ListItem button component={Link} to="/fetch-data">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Fetch data`} />
                </ListItem>
                <ListItem button component={Link} to="/Form000">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Form000`} />
                </ListItem>
                <ListItem button component={Link} to="/FormA01">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`FormA01`} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => alert('about us')}>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`關於我們`} />
                </ListItem>
            </List>
        </React.Fragment>
    )
}
