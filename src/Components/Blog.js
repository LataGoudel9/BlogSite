import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar.js'
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Logo from './LLL.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Page1 from './PageFit1.js';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';




//colors
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
//import HUE from '@material-ui/core/colors/HUE';


const primary = pink[100]; // #F44336
const accent = grey[900]; // #E040FB




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const usestyles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  topbar:{
    background: primary,
  },
  heroContent: {
    backgroundColor: primary,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  cardContent: {
    flexGrow: 1,
  },
  menuButton: {
   marginRight: theme.spacing(2),
 },
 title: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const cards = [1,2,3];

class Blog extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     name: "Sign in"
 };
 }
 
  render(){
    const {classes} = this.props;


  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="relative" style={{backgroundColor: accent}}>
        <Toolbar>
          <FavoriteIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Livin Like Lata
          </Typography>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit"component={Link} to="/login">
  {this.state.name}
</Button>

        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <img src={Logo} />
          <Container maxWidth="sm">

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <NavBar/>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
            {cards.map(post => (
              <Grid item key={post.title} xs={12} md={19}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Sick of Staring at the Scale?
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Your Wont Believe thes easy tricks that WONT help you lose ANY weight
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          We all know the struggles of waking up every morning just to see that we havent cut down on the numbers. Let me tell you know just how easy it is to really just not.
                        </Typography>

                        <NavLink to="/page1">Continue Reading...</NavLink>

                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>

        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
}
export default withStyles(usestyles)(Blog);
