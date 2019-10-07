import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';


const primary = pink[100]; // #F44336
const accent = grey[900]; // #E040FB



const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: primary,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      color = {accent}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Fitness" icon={<SportsHandballIcon/>} />
      <BottomNavigationAction label="Food" icon={<RestaurantMenuIcon/>} />
      <BottomNavigationAction label="Fun" icon={<EmojiNatureIcon />} />
    </BottomNavigation>
  );
}
