
import { makeStyles } from '@material-ui/styles';
import React from 'react';
const useStyles= makeStyles(()=>({
    detailsCard:{
        color:"#fff",
        padding:"10px 16px",
        marginLeft:"40px",
        marginTop:"40px",
        
      },
      image:{
        height:"30px"
      }
      
      
}));

export default function Details(){
const classes=useStyles();

return(
       <>
        <div className={classes.detailsCard}>
              
        </div>
       </>
   ); 
}