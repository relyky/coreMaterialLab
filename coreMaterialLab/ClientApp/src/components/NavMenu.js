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
                    <ListItemText primary={`計時器同步`} />
                </ListItem>
                <ListItem button component={Link} to="/FormA02">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`useEffect`} />
                </ListItem>
                <ListItem button component={Link} to="/FormB02">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`FormB02`} />
                </ListItem>
                <ListItem button component={Link} to="/FormC03">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`FormC03`} />
                </ListItem>
                <ListItem button component={Link} to="/FormC04">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Date Picker`} />
                </ListItem>
                <ListItem button component={Link} to="/FormD04">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`FormD04 Simple Form`} />
                </ListItem>
                <ListItem button component={Link} to="/FormE05">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Simple TodoList`} />
                </ListItem>
                <ListItem button component={Link} to="/FormF06">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`useMemo`} />
                </ListItem>
                <ListItem button component={Link} to="/FormG07">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`useCallback`} />
                </ListItem>
                <ListItem button component={Link} to="/FormH08">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`useRef`} />
                </ListItem>
                <ListItem button component={Link} to="/FormS09">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`useStore Test`} />
                </ListItem>
                <ListItem button component={Link} to="/FormJ10">
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`useAxios Lab`} />
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
