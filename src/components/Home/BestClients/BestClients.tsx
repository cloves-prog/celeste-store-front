import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import theme from "../../../styles/theme";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import { BestClient } from "../../../interfaces/Resume";

interface Props {
  data: BestClient[] | null
}

const BestClients: React.FC<Props> = (props: Props) => {
  const styles = makeStyles((theme) => ({
    container: {
      background: "white",
    },
    paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary
    },
  }));
  const classes = styles();

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="subtitle1" gutterBottom>
          Melhores clientes R$
        </Typography>
        <ResponsiveContainer
          className={classes.container}
          height={225}
        >
          <BarChart
            data={props.data || []}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="total"
              barSize={30}
              fill={theme.palette.primary.main}
            />

          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
};

export default BestClients;
