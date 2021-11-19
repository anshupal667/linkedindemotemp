import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tab:{
    padding:"5px 4px",
    margin:'0px 36px',
    textTransform:"capitalize",
    // display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("xs")]: {
      display: "",
      margin:"auto"
  },
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs className="tabs"
        value={value}
        onChange={handleChange}
        indicatorColor=""
        textColor="primary"
        centered
      >
        <Tab className={classes.tab} icon={<HomeOutlinedIcon/>} edge="end" label="Home"/>  
        <Tab className={classes.tab} icon={<PeopleAltOutlinedIcon/>} label="Mynetworks" />
        <Tab className={classes.tab} icon={<WorkOutlineOutlinedIcon/>} label="job offers" />
        <Tab className={classes.tab} icon={<PersonOutlineOutlinedIcon/>} label="My profile" />
        
      </Tabs>
    </Paper>
  );
}