import { makeStyles } from '@material-ui/core/styles';
const HeaderStyle = makeStyles((theme) => ({
    root:{
        position: 'absolute',
        height: '44px',
        width: '1122px',
        left: '285px',
        right: '33px',
        top: '30px',
        flexGrow: 1,
        boxShadow:'0px 0px 0px 0px',
        background:theme.palette.main

    },
    title:{
        position: 'static',
        height: '34px',
        left: '0px',
        right: '351px',
        top: 'calc(50% - 34px/2 + 1px)',
       
    },
    name:{
        position: 'absolute',
        width: '149px',
        height: '18px',
        right: '58px',
        top: 'calc(50% - 18px/2)',
        fontfamily: 'Mulish',
        fontstyle: 'normal',
        fontweight: 600,
        fontsize: '14px',
        lineheight: '20px',
        textalign: 'right',
        letterspacing: '0.2px'
    },
    avatar:{
        position: 'absolute',
        width: '44px',
        height: '44px',
        right: '0px',
        top: 'calc(50% - 44px/2)',
        border: '1.5px solid #DFE0EB',
    }
    }));

export default HeaderStyle;