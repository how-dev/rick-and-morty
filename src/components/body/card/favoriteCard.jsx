import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useDispatch } from "react-redux"
import { RemFav } from "../../../reducer/actions"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 10,
    width: "90%",
    justifyContent: "space-between",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

export default function MediaControlCard({ name, image }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const remItem = (remItem) => {
    // const condition = JSON.parse(localStorage.getItem("favoriteList")).filter(elt => elt.name !== name)
    // localStorage.clear()
    // localStorage.setItem("favoriteList", condition)
    dispatch(RemFav(remItem))
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites" onClick={() => remItem(name)}>
          <FavoriteIcon color="secondary"/>
        </IconButton>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
      />
    </Card>
  );
}
