import React from "react";
import { fade, makeStyles,Avatar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppsIcon from '@material-ui/icons/Apps';
import { InputBase,Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        display: "none",
        [theme.breakpoints.up("md")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
            display: "block",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
        width: "58vw"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "90vw",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    loginText: {
        textDecoration: "none",
        color: "#fff",
    },
    btn:{
        background:"yellow",width:"15vw",textTransform:"capitalize",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            margin:"auto",
            width:"35vw",
            background:"yellow",
        }
    }
}));

export default function Header() {
    const classes = useStyles();
    
     return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <LinkedInIcon fontSize="large" />

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            fullWidth
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>


                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <TextsmsIcon />
                            </Badge>
                        </IconButton>


                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                    <IconButton
                        aria-label="show more"
                        aria-haspopup="true"
                        color="inherit"
                    >
                    <Avatar varient="square">
                        <AppsIcon />
                    </Avatar>
                    </IconButton>

                    <div>
                        <Button className={classes.btn} variant="contained" >
                            Upgrade to premium
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
           
        </div>
    );
}
