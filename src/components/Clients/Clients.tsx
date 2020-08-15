import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { AppState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import AlertError from "../ui/AlertError";
import { fetchClients } from "../../store/client/actions";
import { Column } from "material-table";
import { Client } from "../../interfaces/Client";
import Table from "../ui/Table";

const Clients: React.FC = () => {
  const location = useLocation();
  const clientsState = useSelector((state: AppState) => state.clients);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);
  
  const columns: Column<Client>[] = [
    {title: "Nome", field: 'name'},
    {title: "Endereço", field: 'address'},
    {title: "Telefone", field: 'phone'},
  ]
  const handleDeleteRow = (oldData: Client):Promise<any> => {
    console.log('@todo: implementar')
    return Promise.resolve();
  }

  const handleRowAdd = (newData: Client):Promise<any> => {
    console.log('@todo: implementar')
    return Promise.resolve();
  }

  const handleUpdateRow = (newData: Client, oldData: Client):Promise<any> => {
    console.log('@todo: implementar')
    return Promise.resolve();
  }

  return (
    <>
      <TopBar currentPath={location.pathname} />
      { clientsState.error && 
        <AlertError message="Ocorreu um erro ao tentar buscar os clientes"/>
      }

      <Table 
        data={clientsState.data} 
        columns={columns}
        handleDeleteRow={handleDeleteRow}
        handleRowAdd={handleRowAdd}
        handleUpdateRow={handleUpdateRow}
        title="Gerenciamento de clientes"
      />
    </>
  )
};

export default Clients;
