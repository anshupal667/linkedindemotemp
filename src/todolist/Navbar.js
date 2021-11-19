import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//import   "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} direction="row">
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <div class="list-group list-group-horizontal">
       
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOthing</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
        <a href="#" class="list-group-item list-group-item-primary">ISLAMIC CLOTHING</a>
    </div>
</Paper>
         </Grid>
        </Grid>
        
        
    </div>
  );
}