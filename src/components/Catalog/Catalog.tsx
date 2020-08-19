import React, { useEffect, useState } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import Item from "./Item";
import { Grid, createStyles, makeStyles, Typography, Fab } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { fetchProducts } from "../../store/product/actions";
import { AppState } from "../../store";
import ModalConfirmSale from "./ModalConfirmSale";
import { fetchSalesPeople } from "../../store/sales-people/actions";
import { fetchClients } from "../../store/client/actions";
import AlertError from "../ui/AlertError";
import { Alert } from "@material-ui/lab";
import { ActionTypes } from "../../store/cart/types";

const Catalog: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.products);
  const cart = useSelector((state: AppState) => state.cart);
  const [confirmed, setConfirmed] = useState<boolean>(false)

  useEffect(() => {
    dispatch({
      type: ActionTypes.CLEAR
    });
    dispatch(fetchProducts());
    dispatch(fetchSalesPeople());
    dispatch(fetchClients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [cart.created, dispatch]);

  const handleFinish = () => {
    console.log(cart.products);
    setConfirmed(true);
  }

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        marginTop: theme.spacing(3),
      },
      title: {
        paddingLeft: theme.spacing(3),
      },
      buttonCart: {
        position: 'absolute',
        top: 100,
        right: 60
      },
      alertSuccess: {
        margin: theme.spacing(3)
      }
    })
  );
  const classes = useStyles();
  
  const handleCloseModal = () => {
    setConfirmed(false);
  }
  const closeAlert = () => {
    dispatch({
      type: ActionTypes.CLOSE_ALERT_SUCCESS
    })
  }

  return (
    <>
      {cart.messageError &&
        <AlertError message={cart.messageError} />
      }
    
      <TopBar currentPath={location.pathname} />
      {cart.created && 
        <Alert 
          className={classes.alertSuccess} 
          onClose={closeAlert}
      > <span role="img" aria-label="smile"> Venda registrada com sucesso! 😃 </span></Alert>}
      
      <ModalConfirmSale open={confirmed} handleClose={handleCloseModal}/>
      
      <Grid spacing={3} className={classes.root} container>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Catálogo
          </Typography>

        </Grid>
        {products.data?.map(product => 
            <Grid key={product.id} item xs={6} md={4} >
               <Item data={product}/>
            </Grid>
        )}
      </Grid>
      <Fab 
        onClick={handleFinish}
        disabled={cart.products.length < 1} 
        variant="extended" 
        className={classes.buttonCart} 
        color="primary" 
        aria-label="add"
      >
        <AddShoppingCart />
        Finalizar
      </Fab>
    </>
  );
};

export default Catalog;
