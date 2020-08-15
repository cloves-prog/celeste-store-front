import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/product/actions";
import { AppState } from "../../store";
import { Product } from "../../interfaces/Product";
import Table from "../ui/Table";
import AlertError from "../ui/AlertError";

const Products: React.FC = (props) => {
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

  const handleRowAdd = (newData: Product): Promise<any> => {
    console.log("Novo: ", newData);
    return Promise.resolve();
  };

  const handleUpdateRow = (
    newData: Product,
    oldData?: Product
  ): Promise<any> => {
    if (oldData) {
      console.log("@todo: Adicionar action para Atualizar o produto");
    }

    return Promise.resolve();
  };

  const handleDeleteRow = (oldData: Product): Promise<any> => {
    console.log("oldData: ", oldData);
    return Promise.resolve();
  };

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {productsState.error && 
          <AlertError message="Ocorreu um erro ao tentar buscar os produtos" />
      }
      <Table 
        columns={columns}
        handleDeleteRow={handleDeleteRow}
        handleRowAdd={handleRowAdd}
        handleUpdateRow={handleUpdateRow}
        data={productsState.data}
        title="Gerenciamento de produtos"
      ></Table>
    </>
  );
};

export default Products;
