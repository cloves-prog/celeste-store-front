import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

interface Props {
  message: string
}

const AlertError: React.FC<Props> = (props: Props) => {
  const maker = makeStyles((theme) => ({
    error: {
      marginTop: theme.spacing(5)
    }
  }))
  const styles = maker();

  return (
    <Alert className={styles.error} severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.message}
    </Alert>
  )
}
export default AlertError;