import React from 'react'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import SideBareStyle from './SideBarStyle'
import {BrowserRouter,Link,Route,Router} from 'react-router-dom';
import { Drawer,List,ListItem,ListItemAvatar,ListItemIcon,ListItemText } from '@material-ui/core';
import ideas from '../images/ideas.png'
import overview from '../images/overview.png'
import user from '../images/user.png'
import tick from '../images/tick.png'
import logo from '../images/logo.png'

const SideBare=()=>{
    const classes = SideBareStyle();     
    const theme = useTheme();
    return(
        <div className={classes.root}>
          <drawerPaper variant="persistent" classes={{ paper: classes.drawerPaper }} >
              <div className={classes.logo}><img src={logo}/></div>
          <List className={classes.list}>
              <Link to="/overview">
              <ListItem className={classes.item}>
                    <img src={overview}/>  
                  <ListItemText className={classes.itemtxt} primary="Overview"/>
               </ListItem>
               </Link>

               <Link to="/Tickets">
              <ListItem className={classes.item}>
                    <img src={tick}/>
                  <ListItemText className={classes.itemtxt} primary="Tickets"/>
              </ListItem>
               </Link>
               <Link to="/Ideas">
              <ListItem className={classes.item}>
                 <span><img src={ideas}/></span> 
                  <ListItemText className={classes.itemtxt} primary="Ideas"/>
              </ListItem>
               </Link>

               <Link to="/Users">
              <ListItem className={classes.item}>
                    <img src={user}/>
                  <ListItemText className={classes.itemtxt} primary="Users"/>
              </ListItem>
              </Link>
          </List>
          </drawerPaper>
        </div>
        );
}
export default SideBare;