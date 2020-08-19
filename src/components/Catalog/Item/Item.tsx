import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import swal from "sweetalert";
import { Product } from "../../../interfaces/Product";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../../store/cart/types";
import { AppState } from "../../../store";

interface Props {
  data: Product;
}

const Item: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState<number>(0);
  let [quantityTotal, setQuantityTotal] = useState<number>(0);

  const state = useSelector((state: AppState) => state);

  useEffect(() => {
    if (state.cart.created) {
      setQuantity(0);
    }

    setQuantityTotal(props.data.store_quantity + props.data.stock_quantity);
  }, [state.cart.created, props.data.stock_quantity, props.data.store_quantity]);

  const handleAdd = () => {
    if (quantity === quantityTotal) {
      swal("Aviso!", "Quantiidade em loja esgotada 😔", "warning");
      return;
    }
    setQuantity(++quantity);
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: props.data,
    });
  };

  const handleRemove = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(--quantity);
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: props.data,
    });
  };
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        maxWidth: 345,
        margin: "auto",
      },
      media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
      },
      price: {
        marginTop: theme.spacing(2),
      },
      actionButtons: {
        display: "flex",
        justifyContent: "center",
      },
    })
  );
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader component="h2" title={props.data.name} />
      <CardMedia
        className={classes.media}
        image={props.data.image}
        title={props.data.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
        <Typography
          className={classes.price}
          variant="h5"
          component="p"
          color="textSecondary"
        >
          <strong>
            {" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.data.sales_price as number)}
          </strong>
        </Typography>
      </CardContent>
      <Typography align="center" variant="h6" component="p" color="textSecondary">
        {state.user.isAuthenticated && quantity}
      </Typography>
      {state.user.isAuthenticated && 
      
      <CardActions className={classes.actionButtons}>
        <IconButton onClick={handleRemove} aria-label="Remover do carrinho">
          <RemoveIcon />
        </IconButton>
        <IconButton
          disabled={quantityTotal === 0}
          onClick={handleAdd}
          aria-label="adicionar no carrinho"
        >
          <AddIcon />
        </IconButton>
      </CardActions>}
    </Card>
  );
};

export default Item;
