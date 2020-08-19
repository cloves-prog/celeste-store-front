import React from 'react'
import { Paper, Typography, makeStyles } from "@material-ui/core";
interface Props {
  value?: number | null;
  title: string;
}
const ResumeWeekSales: React.FC<Props> = (props) => {
  const styles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary
    },
    blockCenter: {
      padding: theme.spacing(2),
      textAlign: "center"
    }
  }))

  const classes = styles();
  return (
    <Paper className={classes.paper}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          {props.title}
        </Typography>
        <div className={classes.blockCenter}>
          <Typography color="primary" variant="h6" gutterBottom>
            {
              props.value ?
            `R$ ${props.value}` :
            `R$ 0.00` 
            }
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default ResumeWeekSales;
