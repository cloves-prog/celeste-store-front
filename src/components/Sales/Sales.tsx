import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import AlertError from "../ui/AlertError";
import { fetchSales, deleteSale } from "../../store/sales/actions";
import { Sale } from "../../interfaces/Sale";
import Table from "../ui/Table";
import { Column } from "material-table";

const Sales: React.FC = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const salesState = useSelector((state: AppState) => state.sales);
  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  const handleDelete = (sale: Sale): Promise<any> => {
    dispatch(deleteSale(sale));
    return Promise.resolve();
  };

  const columns: Column<Sale>[] = [
    {
      title: "Produtos vendidos",
      field: "products",
    },
    {
      title: "Nome do vendedor",
      field: "sales_people_name",
    },
    {
      title: "Nome do cliente",
      field: "client_name",
    },
  ];

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {salesState.messageError && (
        <AlertError message={salesState.messageError} />
      )}

      <Table
        columns={columns}
        handleDeleteRow={handleDelete}
        data={salesState.data}
        title="Vendas realizadas"
      ></Table>
    </>
  );
};

export default Sales;
