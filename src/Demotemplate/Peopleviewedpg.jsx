import React from 'react';
import { makeStyles,Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Card,ListItemSecondaryAction,IconButton } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Buttons from './Buttons';


const useStyles = makeStyles((theme) => ({
  root: {
     width: '100%',
     backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  viewpgcard:{
      width:"100%",
      maxWidth: '36ch',
      margin:theme.spacing(3),
      marginLeft:"200px",
      [theme.breakpoints.down("xs")]: {
        display: "",
        margin:"auto"
    }
   
    },
    title:{
      margin:theme.spacing(3),
      fontSize: 17,
  },
}));

export default function Peopleviewpg() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.viewpgcard}>
    <List className={classes.root}>
    <Typography className={classes.title} variant="" component="h5">
      Pages people also viewed
    </Typography>
      <ListItem  button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="invision" src="invisionlogo.png" />
        </ListItemAvatar>
        <ListItemText
          primary="InVision"
          secondary={
            <React.Fragment>
              Internet 137K followers
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      
      <ListItem  button alignItems="flex-start">
        <ListItemAvatar> 
          <Avatar alt="Stetch" src="sketch-2-logo.png" />
         </ListItemAvatar> 
        <ListItemText
          primary="Sketch"
          secondary={
            <React.Fragment>
              Design 33k followers
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
         </ListItemSecondaryAction>
      </ListItem>
     
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="dribble" src="dribbble-icon-1-logo-png-transparent.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Dribbble"
          secondary={
            <React.Fragment>
            Design 162k followers
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="behance" src="behance-1-logo-png-transparent.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Behance"
          secondary={
            <React.Fragment>
               internet 6.7k followers
               
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="overlapstudio" src="overlap.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Overlap studio"
          secondary={
            <React.Fragment>
               information Technology & services
               
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="medium" src="medium.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Medium"
          secondary={
            <React.Fragment>
               Online Media 101k followers
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="adobe" src="adobe.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Adobe"
          secondary={
            <React.Fragment>
               Computer Software 268M followers
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="slack" src="slack.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Slack"
          secondary={
            <React.Fragment>
            computer software 582M followers
            </React.Fragment>
          }
        />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="eye">
                      <VisibilityOutlinedIcon color="primary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
    </List>
    </Card>
    <Buttons/>
    </>
    
  );
}