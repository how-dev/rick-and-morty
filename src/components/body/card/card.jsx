import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useDispatch, useSelector } from "react-redux";
import { RemFav } from "../../../reducer/actions"
import { FavThunk } from "../../../reducer/thunk"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10,
    width: "90%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  isFavorite: {
    background: "red;"
  },
  isNotFavorite: {
    background: "gray",
  }
}));

export default function RecipeReviewCard({ name, type, image, location, firstLetter }) {
  const classes = useStyles();
  const favoriteList = useSelector(state => state.favorites.favorite).flat(Infinity)

  const condition = JSON.parse(localStorage.getItem("favoriteList")).filter(elt => elt.name === name)

  const [isFavorite, setState] = useState(condition.length > 0 ? true : false)

  const dispatch = useDispatch();

  const addFav = (person) => {
    dispatch(FavThunk(person, favoriteList))
  }

  const delFav = (person) => {
    const removed = JSON.parse(localStorage.getItem("favoriteList")).filter(elt => elt.name !== name)
    localStorage.setItem("favoriteList", JSON.stringify(removed))
    console.log(localStorage.getItem("favoriteList"))
    dispatch(RemFav(person))
  }
  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstLetter}
          </Avatar>
        }
        title={name}
        subheader={type}
      />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Location: {location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => {
            setState(!isFavorite)
            if (!isFavorite) {
                addFav({ name, image })
            } else {
                delFav(name)
            }
            }}>
          <FavoriteIcon color={isFavorite ? "secondary" : "disabled"}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
