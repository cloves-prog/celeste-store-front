import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton, makeStyles, createStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import swal from 'sweetalert';
import { Product } from '../../../interfaces/Product';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../store/cart/types';
import { AppState } from '../../../store';

interface Props {
  data: Product
}

const Item: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState<number>(0)

  const cart = useSelector((state: AppState) => state.cart)

  useEffect(() => {
    if (cart.created) {
      setQuantity(0)  
    }
  }, [cart.created])

  const handleAdd = () => {
    if (quantity === props.data.store_quantity) {
      swal("Aviso!", "Quantiidade em loja esgotada 😔", "warning");
      return;
    }
    setQuantity(++quantity);
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: props.data
    })
  }

  const handleRemove = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(--quantity);
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: props.data
    })
  }
  const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    price: {
      marginTop: theme.spacing(2)
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'center'
    },
  }),
);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.data.name}
      />
      <CardMedia
        className={classes.media}
        image={props.data.image}
        title={props.data.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
        <Typography className={classes.price} variant="h5" color="textSecondary" >
          <strong>R$ {props.data.sales_price}</strong>  
        </Typography>
      </CardContent>
      <Typography align="center"  variant="h6" color="textSecondary" >
        {quantity}
      </Typography>
      <CardActions className={classes.actionButtons}>
        <IconButton onClick={handleRemove}  aria-label="Remover do carrinho">
          <RemoveIcon />
        </IconButton>
        <IconButton disabled={props.data.store_quantity === 0} onClick={handleAdd} aria-label="adicionar no carrinho">
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};


export default Item;