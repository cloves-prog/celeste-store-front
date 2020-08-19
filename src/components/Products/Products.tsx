import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../../store/product/actions";
import { AppState } from "../../store";
import { Product } from "../../interfaces/Product";
import Table from "../ui/Table";
import AlertError from "../ui/AlertError";

const Products: React.FC = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const productsState = useSelector((state: AppState) => state.products);
  // const [consistenceError, setConsistenceError] = useState<boolean>(false)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const columns: Column<Product>[] = [
    {
      title: "Nome",
      field: "name",
    },
    {
      title: "Descrição",
      field: "description",
    },
    {
      title: "Marca",
      field: "brand",
    },
    {
      title: "Fornecedor",
      field: "provider",
    },
    {
      title: "Classificação",
      field: "classification",
    },
    {
      title: "Imagem (URL)",
      field: "image",
      cellStyle: { whiteSpace: "nowrap", maxWidth: 50, overflow: "hidden" },
    },
    {
      title: "Preço de custo",
      field: "cost_price",
      type: "currency",
      currencySetting: {
        locale: "pt-BR",
        currencyCode: "BRL",
      },
    },
    {
      title: "Preço de venda",
      field: "sales_price",
      type: "currency",
      currencySetting: {
        locale: "pt-BR",
        currencyCode: "BRL",
      },
    },
    {
      title: "Quantidade em estoque",
      field: "stock_quantity",
      type: "numeric",
    },
    {
      title: "Quantidade em loja",
      field: "store_quantity",
      type: "numeric",
    },
  ];

  const handleRowAdd = (newData: Product): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!newData.name || newData.name.length < 3) {
        swal("Aviso!", "Preencha o campo nome corretamente!", "warning");
        return reject();
      }

      if (isNaN(newData.sales_price) || isNaN(newData.cost_price)) {
        swal("Aviso!", "Preencha os campos de preço corretamente!", "warning");
        return reject();
      }

      dispatch(createProduct(newData));
      return resolve();
    });
  };

  const handleUpdateRow = (newData: Product): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!newData.name || newData.name.length < 3) {
        swal("Aviso!", "Preencha o campo nome corretamente!", "warning");
        return reject();
      }

      if (
        isNaN(newData.sales_price) ||
        isNaN(newData.cost_price) ||
        newData.cost_price >= 0 ||
        newData.sales_price >= 0
      ) {
        swal("Aviso!", "Preencha os campos de quantidade!", "warning");
        return reject();
      }

      if (newData.stock_quantity >= 0 || newData.store_quantity >= 0) {
        swal("Aviso!", "Preencha os campos de preço corretamente!", "warning");
        return reject();
      }

      dispatch(updateProduct(newData));
      return resolve();
    });
  };

  const handleDeleteRow = (oldData: Product): Promise<any> => {
    dispatch(deleteProduct(oldData));
    return Promise.resolve();
  };

  return (
    <>
      <TopBar currentPath={location.pathname} />
      {productsState.messageError && (
        <AlertError message={productsState.messageError} />
      )}
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
