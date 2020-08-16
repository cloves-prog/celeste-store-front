import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import TopBar from "../TopBar";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Chart from "./Resume";
import { useDispatch, useSelector } from "react-redux";
import { fetchResume } from "../../store/resume/actions";
import { AppState } from "../../store";

const Home: React.FC = () => {
  const resumeState = useSelector((state: AppState) => state.resume)
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResume())
  }, [dispatch])

  const styles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: '100vh',
    },
    title: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3)
    }
  }));
  const classes = styles();
  const location = useLocation();

  return (
    <>
      <TopBar currentPath={location.pathname} />
      <div className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Chart title="Melhores Clientes" data={resumeState.data?.bestClients}/>
          </Grid>
          <Grid item xs={6}>
            <Chart title="Melhores Vendedores" data={resumeState.data?.bestSalesPeople}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
