import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import ResponsiveDrawer from './ResponsiveDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupSizesColors() {
  const classes = useStyles();
  const theme=useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);
  return (
    <>
    {isMatch ? (<ResponsiveDrawer/>) :
    (<>
    <div className={classes.root}>
      <ButtonGroup size="large" aria-label="small outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
       
      </ButtonGroup>
      
    </div>
    </>)}
    {/* <div className={classes.root}>
      <ButtonGroup size="large" aria-label="small outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
       
      </ButtonGroup>
      
    </div> */}
    </>
  );
}