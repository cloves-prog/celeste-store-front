import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import TopBar from "../TopBar";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Chart from "./Resume";
import { useDispatch, useSelector } from "react-redux";
import { fetchResume } from "../../store/resume/actions";
import { AppState } from "../../store";
import ResumeWeekSales from "./ResumeWeekSales";

const Dashboard: React.FC = () => {
  const resumeState = useSelector((state: AppState) => state.resume);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResume());
  }, [dispatch]);

  const styles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    title: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      fontSize: 24
    },
  }));
  const classes = styles();
  const location = useLocation();

  return (
    <>
      <TopBar currentPath={location.pathname} />
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h1" gutterBottom>
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <ResumeWeekSales
              title="Faturamento bruto nos ultimos 7 dias"
              value={resumeState.data?.grossProfit.total}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <ResumeWeekSales
              title="Faturamento líquido nos ultimos 7 dias"
              value={resumeState.data?.netProfit.total}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {resumeState.data.bestClients.length > 0 && <Chart
              title="Melhores Clientes"
              data={resumeState.data?.bestClients}
            />}
          </Grid>
          <Grid item xs={6}>
            {resumeState.data.bestSalesPeople.length > 0 && <Chart
              title="Melhores Vendedores"
              data={resumeState.data.bestSalesPeople}
            />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
