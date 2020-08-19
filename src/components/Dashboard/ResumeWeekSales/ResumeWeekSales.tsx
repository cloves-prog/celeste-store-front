import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
interface Props {
  value?: number;
  title: string;
}
const ResumeWeekSales: React.FC<Props> = (props) => {
  const styles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    blockCenter: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  }));

  const classes = styles();
  const formatCurrency = (current: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(current);
  return (
    <Paper className={classes.paper}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          {props.title}
        </Typography>
        <div className={classes.blockCenter}>
          <Typography color="primary" variant="h6" gutterBottom>
            {formatCurrency(props.value || 0)}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default ResumeWeekSales;
