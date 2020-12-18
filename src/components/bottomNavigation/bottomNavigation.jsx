import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';

import { useDispatch, useSelector } from "react-redux"
import { ShowFav } from "../../reducer/actions"

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#eeeeee"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const favoriteLength = useSelector(state => state.favorites.favorite).flat().length
  const dispatch = useDispatch();

  const show = (condition) => {
    dispatch(ShowFav(condition))
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={() => show(false)} icon={<Home />} />
      <BottomNavigationAction onClick={() => show(true)} icon={
      <Badge color="secondary" badgeContent={favoriteLength}>
        <FavoriteIcon />
      </Badge>
      } />
    </BottomNavigation>
  );
}
