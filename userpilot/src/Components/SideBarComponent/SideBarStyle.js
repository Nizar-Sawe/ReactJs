import { makeStyles } from '@material-ui/core/styles';
const SideBareStyle = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.primary.sidebar,
            position: 'relative',
            width: '255px',
            height: '1100px',
    },
    list:{
        position:' absolute',
        width: '255px',
        height: '608px',
        left: '0px',
        top: '0px',
    },
    item:{
        position: 'absolute',
        width: '255px',
        height: '56px',
        left: '0px',
        top: '128px',
    },
    itemtxt:{
        position: 'absolute',
        height: '20px',
        left: '72px',
        right: '24px',
        top: 'calc(50% - 20px/2)',
        color:theme.palette.primary.item,
        
    },
    itembtn:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '2.94%',
        bottom: '2.94%',
        background: '#9FA2B4',
        opacity: '0.4',
        Height : '15.6px',
        width: '16px'
    },
    logo:{
        position: 'absolute',
        width: '131px',
        height: '32px',
        left: '54px',
        top: '37px',
    }
    }));

export default SideBareStyle;