import React, { useEffect } from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../../store/product/actions";
import validator from "../../commons/validate";
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
      validate: (product) => validator(product.name, 3, "default"),
    },
    {
      title: "Descrição",
      field: "description",
      validate: (product) => validator(product.description, 5, "default"),
    },
    {
      title: "Marca",
      field: "brand",
      validate: (product) => validator(product.brand, 2, "default"),
    },
    {
      title: "Fornecedor",
      field: "provider",
      validate: (product) => validator(product.provider, 2, "default"),
    },
    {
      title: "Classificação",
      field: "classification",
      validate: (product) => validator(product.classification, 3, "default"),
    },
    {
      title: "Imagem (URL)",
      field: "image",
      // cellStyle: rowData => ({whiteSpace: 'nowrap'}),
      validate: (product) => validator(product.image, 10, "default"),
    },
    {
      title: "Preço de custo",
      field: "cost_price",
      type: "currency",

      validate: (product) =>
        !product || !product.cost_price
          ? {
              helperText: "O preço de custo é obrigatório",
              isValid: false,
            }
          : true
    },
    {
      title: "Preço de venda",
      field: "sales_price",
      type: "currency",
      validate: (product) =>
        !product || !product.sales_price
          ? {
              helperText: "O preço de venda é obrigatório",
              isValid: false,
            }
          : true
    },
    {
      title: "Quantidade em estoque",
      field: "stock_quantity",
      type: "numeric",
      validate: (product) =>
        !product || !product.stock_quantity
          ? {
              helperText: "A qtd em estoque é obrigatório",
              isValid: false,
            }
          : true
    },
    { 
      title: "Quantidade em loja", 
      field: "store_quantity", 
      type: "numeric",
      validate: (product) =>
      !product || !product.store_quantity
        ? {
            helperText: "A qtd em loja é obrigatório",
            isValid: false,
          }
        : true
    },
  ];

  const handleRowAdd = (newData: Product): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!isNaN(newData.sales_price) || !isNaN(newData.cost_price)) {
        dispatch(createProduct(newData));
        // setConsistenceError(false)
        return resolve();
      }
      swal("Aviso!", "Preencha os campos de preço corretamente!", "warning");
      return reject();
    });
  };

  const handleUpdateRow = (newData: Product): Promise<any> => {
    dispatch(updateProduct(newData));
    return Promise.resolve();
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
