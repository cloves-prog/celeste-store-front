import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { AppState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import AlertError from "../ui/AlertError";
import {
  fetchClients,
  updateClient,
  createClient,
  deleteClient,
} from "../../store/client/actions";
import { Column } from "material-table";
import swal from 'sweetalert';
import { Client } from "../../interfaces/Client";
import Table from "../ui/Table";
import validator from '../../commons/validate';

const Clients: React.FC = () => {
  const location = useLocation();
  const clientsState = useSelector((state: AppState) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  const columns: Column<Client>[] = [
    {
      title: "Nome",
      field: "name",
      validate: (client) => validator(client.name, 3, "default"),
    },
    {
      title: "Endereço",
      field: "address",
      validate: (client) => validator(client.address, 5, "default"),
    },
    { 
      title: "Telefone", 
      field: "phone",

    },
  ];
  const handleDeleteRow = (oldData: Client): Promise<any> => {
    dispatch(deleteClient(oldData));
    return Promise.resolve();
  };

  const handleRowAdd = (newData: Client): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (newData.phone && !isNaN(newData.phone)) {
        dispatch(createClient(newData));
        return resolve();
      }

      swal("Aviso!", "Preencha o campo telefone somente com números!", "warning");
      return reject();
    });
  };

  const handleUpdateRow = (newData: Client, oldData: Client): Promise<any> => {
    console.log('TESTE:   ', newData);
    return new Promise((resolve, reject) => {
      if (newData.phone && !isNaN(newData.phone)) {
        dispatch(updateClient(newData));
        return resolve();
      }

      swal("Aviso!", "Preencha o campo telefone somente com números!", "warning");
      return reject();
    });
  };

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {clientsState.messageError && (
        <AlertError message={clientsState.messageError} />
      )}

      <Table
        data={clientsState.data}
        columns={columns}
        handleDeleteRow={handleDeleteRow}
        handleRowAdd={handleRowAdd}
        handleUpdateRow={handleUpdateRow}
        title="Gerenciamento de clientes"
      />
    </>
  );
};

export default Clients;
