import React ,{useState,useEffect} from 'react'
import {useTheme } from '@material-ui/core/styles';
import ticketStyle from './TicketStyle'
import MaterialTable from 'material-table'
import TablePagination from '@material-ui/core/TablePagination';



const Ticket=(props)=>{
  
  const [data, setData] = useState([])
    const classes = ticketStyle();     
    const theme = useTheme();
    const columns = [
      
      { title: "User", field: "name.first", render: rowData => <img src={'picture.thumbnail'} style={{ width: 40, borderRadius: '50%' }} />  },
      { title: "Contact Information ", field: "email" },
      { title: "Registration Date", field: "registered.date" },
      { title: "Contry/Post Code", field: "location.country" },
  
                  ]
            useEffect(() => {
                fetch("https://randomuser.me/api?results=8")
                .then(resp => resp.json())
                .then(resp => { setData(resp.results)})
                }, [])

        return(
        <div className={classes.root}>
          <MaterialTable
            title="Users Data"
            data={data}
            columns={columns}
            
            />
             <TablePagination
                component="div"
                data={data}/>
             </div>
            );
    };
    export default Ticket;