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
import { Resource } from "../../../interfaces/Resume";

interface Props {
  data?: Resource[];
  title: string;
}

const Chart: React.FC<Props> = (props: Props) => {
  const styles = makeStyles((theme) => ({
    container: {
      background: "white",
    },
    paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
  }));
  const classes = styles();

  return (
    <>
      {props.data && (
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="subtitle1" gutterBottom>
            {props.title}
          </Typography>
          <ResponsiveContainer className={classes.container} height={225}>
            <BarChart
              data={props.data}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) =>
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value as number)}/>
              <Legend />
              <Bar
                dataKey="total"
                barSize={30}
                fill={theme.palette.primary.main}
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      )}
    </>
  );
};

export default Chart;
