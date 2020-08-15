import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import AlertError from "../ui/AlertError";
import {
  fetchSalesPeople,
  createSalesPeople,
  updateSalesPeople,
  deleteSalesPeople,
} from "../../store/sales-people/actions";

import Table from "../ui/Table";
import { Column } from "material-table";
import { SalesPeople } from "../../interfaces/SalesPeople";

const SalesPeoplePage: React.FC = () => {
  const location = useLocation();
  const salesPeopleState = useSelector((state: AppState) => state.salesPeople);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesPeople());
  }, [dispatch]);

  const columns: Column<SalesPeople>[] = [
    { 
      title: "Nome", 
      field: "name", 
      validate: salesPeople => !salesPeople.name || salesPeople.name.length < 3 ? { 
        isValid: false, helperText: 'O nome precisa conter no mínimo 3 caracteres' } : true 
    }
  ];

  const handleRowAdd = (newData: SalesPeople): Promise<void> => {
    dispatch(createSalesPeople(newData));
    return Promise.resolve();
  };

  const handleUpdateRow = (newData: SalesPeople): Promise<void> => {
    dispatch(updateSalesPeople(newData));
    return Promise.resolve();
  };

  const handleDeleteRow = (oldData: SalesPeople): Promise<void> => {
    dispatch(deleteSalesPeople(oldData));
    return Promise.resolve();
  };

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {salesPeopleState.messageError && (
        <AlertError message={salesPeopleState.messageError} />
      )}

      <Table
        data={salesPeopleState.data}
        columns={columns}
        handleDeleteRow={handleDeleteRow}
        handleRowAdd={handleRowAdd}
        handleUpdateRow={handleUpdateRow}
        title="Gerenciamento de vendedores"
      />
    </>
  );
};

export default SalesPeoplePage;
