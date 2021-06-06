import React from 'react'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import HeaderStyle from './HeaderStyle'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import himg from '../images/himg.png'

const Header1=()=>{
    const classes = HeaderStyle();     
    const theme = useTheme();
    return(
        <div>
            <AppBar className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Users</Typography>
                <Typography className={classes.name}> Jones Ferdinand </Typography>
                <Typography >
                  <Avatar className={classes.avatar} src={himg}/>
                </Typography>
            </Toolbar>
            </AppBar>
         
        </div>
    )
};
export default Header1;