import { Grid, makeStyles, Card, Link, Button, IconButton,  CardContent, Typography ,Avatar} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import Details from './Details';
import Navbar2 from './Navbar2';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '115%',
        maxWidth: '300vw',
        margin:theme.spacing(3),
        marginLeft:"100px",
        [theme.breakpoints.down("xs")]: {
            display: "",
            margin:"10px",
             width:"95vw",
        },
       
    },
    bgImage: {
        backgroundImage: `url("https://uixlibrary.com/uploads/creation/screenthump/800/orion-ui-kit---charts-templates--infographics-in-figma-17-673801f6-7019-4cee-8f94-d9b0fd258cc0.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: `20vh`,
        minHeight: '100px'
    },
    cardinfo: {
        marginLeft:"20px",
        fontFamily:"Arial",
        
     },
    button: {
        marginLeft:"10px",
        textTransform: "capitalize",
    },
     btn: {
        marginTop:"15px" ,
     },
    nav: {
        marginTop: "250px",
        marginBottom: '25px'
    },
    title: {
        fontSize: 14,

    },
    aboutcard:{
        height:"20vh",
        width:"28vw",
        marginLeft:"15px",
        marginTop:"15px",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginTop:"15px",
            width:"39vw",
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      crd:{
          height:"55vh",
      },
      aboutcontent:{
          marginLeft:"15px"
      },
      link:{
          marginTop:"25px",
          textAlign:"center",
          
      }
}));

export default function Aboutpg() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
            <div className={classes.root}>
                <div className={classes.bgImage}>
                    <Grid container spacing={3}>
                        <Grid item xs={10} sm={8} md={4}>
                            <Details></Details>
                            <img style={{marginLeft:"45px",position:"absolute",top:"200px"}} src="figmalogo.jpg" height="70pxpx"/>
                        </Grid>
                    </Grid>
                    <Card className={classes.card}>
                       <div className={classes.cardinfo}>
                       <Details/>
                       
                        <h2>Figma</h2>
                        <Typography variant="body2" component="p">
                          A design platform for teams who build products together
                         </Typography>

                        <Typography  className={classes.title} color="textSecondary" gutterBottom>
                          Design{bull}San Francisco,CA{bull}101,282 followers
                         </Typography>

                        <Link>See of 358 employeeon linkedin <ArrowForwardIcon/> </Link>
                        <div className={classes.btn}>
                            <Button variant="contained" color="primary" startIcon={<VisibilityIcon />} className={classes.button}>Follow</Button>
                            <Button variant="outlined" startIcon={<OpenInNewIcon />} className={classes.button}>Visit Website</Button>
                            <IconButton color="primary" aria-label="">
                            <Avatar variant="square">
                            <MoreHorizIcon />
                            </Avatar>
                            </IconButton>
                        </div>
                        </div>
                    </Card>
                </div>
                <div className={classes.nav}>
                    <Navbar2></Navbar2>
                </div>
                <Card className={classes.crd}>
                    <div className={classes.aboutcontent}>
                        <h3>About</h3>
                        <Typography variant="body2" component="p">
                           Figma is the first online professional-grade online tool created specifically for interface design.
                            Born on the web,Figma hepls the entire product team create, test, and ship bettre deaigns,faster.
                          </Typography>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Card className={classes.aboutcard} variant="outlined">
                                <CardContent>
                                   
                                    <Typography className={classes.title} variant="" component="h2">
                                        Website Url
                                    </Typography>
                                    <Link>
                                        Figma.com
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className={classes.aboutcard}  variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Funding by Crunchbase
                                    </Typography>
                                    <Typography className={classes.title} variant="" component="h2">
                                        Series d
                                    </Typography>
                                    <Link>
                                        USS 50M
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <div  className={classes.link} >
                    <Link href="#">See all Details</Link>
                    </div>
                </Card>
            </div>
        </>
    );
}
