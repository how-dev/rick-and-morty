import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"
import { ArrowBack, ArrowForward } from '@material-ui/icons/';
// import { useEffect } from "react"

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Next, Prev } from "../../../reducer/actions"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
    width: "100%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const Page = useSelector(state => state.favorites.page)
  const dispatch = useDispatch();

  const switchPage = (condition) => {
    axios.get(Page)
    .then(res => {
      if(condition === 1) {
        dispatch(Next(res.data.info.next))
      } 
      else if (res.data.info.prev) {
        dispatch(Prev(res.data.info.prev))
      }
    })
  }

  return (
    <div className={classes.root}>
        <Button variant="outlined" color="primary" onClick={() => {
          switchPage(0)
          }}>
            <ArrowBack color="primary" variant="contained" />
        </Button>
        <Button variant="outlined" color="primary" onClick={() => {
          switchPage(1)
          }}>
            <ArrowForward color="primary" variant="contained" />
        </Button>
    </div>
  );
}
