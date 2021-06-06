
  import { makeStyles } from '@material-ui/core/styles';
  const ticketStyle = makeStyles((theme) => ({
      root:{
          backgroundColor: theme.palette.primary.ticket,
            position: 'absolute',
            height: '942px',
            left: '285px',
            right: '33px',
            top: '128px',

      },
      
      }));
  
  export default ticketStyle;