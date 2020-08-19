import React, { useState } from "react";
import {
  Modal,
  Fade,
  createStyles,
  makeStyles,
  Backdrop,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { ActionTypes } from "../../../store/cart/types";
import { persistSale } from "../../../store/cart/actions";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ModalConfirmSale: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state);
  const [salesPeopleError, setSalesPeopleError] = useState<boolean>(false);
  const [clientError, setClientError] = useState<boolean>(false);

  const useStyles = makeStyles((theme) =>
    createStyles({
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        width: 400,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      formControl: {
        margin: theme.spacing(1),
        width: "100%",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      button: {
        display: "block",
        margin: "24px auto",
      },
      list: {
        width: "100%",
        maxHeight: 500,
        backgroundColor: theme.palette.background.paper,
        overflow: "auto",
      },
      itemSum: {
        textAlign: "end",
      },
    })
  );
  const classes = useStyles();

  const confirmSale = () => {
    if (!state.cart.salesPeopleId) {
      setSalesPeopleError(true);
      return;
    }

    if (!state.cart.clientId) {
      setClientError(true);
      return;
    }

    dispatch(persistSale(state.cart));
    props.handleClose();
  };

  const handleChangeSalesPeople = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch({
      type: ActionTypes.SET_SALES_PEOPLE_ID,
      payload: event.target.value,
    });
  };

  const handleChangeClient = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch({
      type: ActionTypes.SET_CLIENT_ID,
      payload: event.target.value,
    });
  };
  const formatCurrency = (current: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(current);
  let totalGeneral = 0;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div>
          <List className={classes.list}>
            {state.cart.products.map((product) => {
              const productState = state.products.data.find((item) => item.id === product.id)
              const total = product.quantity * productState!.sales_price
              totalGeneral += total;
              return (
                <ListItem key={product.id}>
                  <ListItemText
                    primary={productState?.name}
                    secondary={`Quantidade: ${product.quantity}`}
                  />
                  <ListItemText
                    className={classes.itemSum}
                    secondary={`Total: ${formatCurrency(total)}`}
                  />
                </ListItem>
              );
            })}

            <ListItem>
              <ListItemText primary="" secondary="" />
              <ListItemText
                className={classes.itemSum}
                primary="Total"
                secondary={formatCurrency(totalGeneral)}
              />
            </ListItem>
          </List>
          <form className={classes.paper} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel id="sales-people-id-label">Vendedor</InputLabel>
              <Select
                onChange={handleChangeSalesPeople}
                value={state.cart.salesPeopleId || ""}
                error={salesPeopleError}
                labelId="sales-people-id-label"
                id="sales-people-id"
              >
                {state.salesPeople.data.map((salePeople) => (
                  <MenuItem key={salePeople.id} value={salePeople.id}>
                    {salePeople.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="client-id-label">Cliente</InputLabel>
              <Select
                onChange={handleChangeClient}
                value={state.cart.clientId || ""}
                error={clientError}
                labelId="client-id-label"
                id="client-id"
              >
                {state.clients.data.map((client) => (
                  <MenuItem key={client.id} value={client.id}>
                    {client.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              onClick={confirmSale}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Confirmar venda
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalConfirmSale;
