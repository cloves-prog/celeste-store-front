import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import { fetchProducts } from "../../store/product/actions";
import { AppState } from "../../store";
import { Product } from "../../interfaces/Product";
import { makeStyles } from "@material-ui/core";

const Products: React.FC = (props) => {
  const maker = makeStyles((theme) => ({
    error: {
      marginTop: theme.spacing(5),
    },
    tableContainer: {
      padding: theme.spacing(2),
    },
  }));
  const styles = maker();

  const location = useLocation();
  const dispatch = useDispatch();
  const productsState = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const columns: Column<Product>[] = [
    { title: "Nome", field: "name" },
    { title: "Descrição", field: "description" },
    { title: "Marca", field: "brand" },
    { title: "Fornecedor", field: "provider" },
    { title: "Classificação", field: "classification" },
    { title: "Preço de custo", field: "cost_price", type: "numeric" },
    { title: "Preço de venda", field: "sales_price", type: "numeric" },
    {
      title: "Quantidade em estoque",
      field: "stock_quantity",
      type: "numeric",
    },
    { title: "Quantidade em loja", field: "store_quantity", type: "numeric" },
  ];

  const handleRowAdd = (newData: Product): Promise<void> => {
    console.log("Novo: ", newData);
    return Promise.resolve();
  };

  const handleUpdateRow = (
    newData: Product,
    oldData?: Product
  ): Promise<void> => {
    if (oldData) {
      console.log("@todo: Adicionar action para Atualizar o produto");
    }

    return Promise.resolve();
  };

  const handleDeleteRow = (oldData: Product): Promise<void> => {
    console.log("@todo: Adicionar action para Deletar o produto");
    return Promise.resolve();
  };

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {productsState.error && (
        <Alert className={styles.error} severity="error">
          <AlertTitle>Error</AlertTitle>
          Erro ao tentar se comunicar com o servidor.
        </Alert>
      )}

      {productsState.data.length > 0 && (
        <div className={styles.tableContainer}>
          <MaterialTable
            title="Gerenciamento de produtos"
            columns={columns}
            data={productsState.data}
            editable={{
              onRowAdd: handleRowAdd,
              onRowUpdate: handleUpdateRow,
              onRowDelete: handleDeleteRow,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Products;
