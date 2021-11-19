import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
    marginTop:"0px",
    [theme.breakpoints.down("xs")]: {
      display: "",
      marginTop:"33px",
      
  },
  },
  tab:{
    padding:"5px 4px",
    textTransform:"capitalize",
    margin:'0px -33px',
    [theme.breakpoints.down("xs")]: {
      display: "",
      margin:"0px -9px",
      
  },
  }
}));

export default function Navbar2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.tab} label="overview" />
        <Tab className={classes.tab} label="About" />
        <Tab className={classes.tab} label="products" />
        <Tab className={classes.tab} label="posts" />
        <Tab className={classes.tab} label="jobs" />
        <Tab className={classes.tab} label="People" />
        <Tab className={classes.tab} label="videos" />
      </Tabs>
    </Paper>
  );
}