import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import AlertError from "../ui/AlertError";
import { fetchSalesPeople } from "../../store/sales-people/actions";
import Table from "../ui/Table";
import { Column } from "material-table";
import { SalesPeople } from "../../interfaces/SalesPeople";

const SalesPeoplePage: React.FC = () => {
  const location = useLocation();
  const salesPeopleState = useSelector((state: AppState) => state.salesPeople)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesPeople())
  }, [dispatch])

  const columns: Column<SalesPeople>[] = [
    {title: "name", field: "name"}
  ];

  const handleRowAdd = (newData: SalesPeople): Promise<any> => {
    console.log("Novo: ", newData);
    return Promise.resolve();
  };

  const handleUpdateRow = (
    newData: SalesPeople,
    oldData?: SalesPeople
  ): Promise<any> => {
    if (oldData) {
      console.log("@todo: Adicionar action para Atualizar o produto");
    }

    return Promise.resolve();
  };

  const handleDeleteRow = (oldData: SalesPeople): Promise<any> => {
    console.log("oldData: ", oldData);
    return Promise.resolve();
  };

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {salesPeopleState.error && 
        <AlertError message="Ocorreu um erro ao tentar buscar os vendedores"/>}

      {salesPeopleState.data.length > 0 && 
      <Table 
        data={salesPeopleState.data}
        columns={columns}
        handleDeleteRow={handleDeleteRow}
        handleRowAdd={handleRowAdd}
        handleUpdateRow={handleUpdateRow}
        title="Gerenciamento de vendedores"
      />}
    </>

  )
};

export default SalesPeoplePage;
