import React, { useEffect, useState } from 'react'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import userStyle from './UserStyle'
import SideBar from '../SideBarComponent/SideBare'
import Header1 from '../HeaderComponent/Header'
import Ticket from '../TicketsComponent/Ticket';

import axios from "axios";


const User=()=>{
    const classes = userStyle();     
    const theme = useTheme();
    
        return(
         <div className={classes.root}>
         </div>
    )
};
export default User;