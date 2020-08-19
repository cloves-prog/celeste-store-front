import React from "react";
import MaterialTable, { Column } from "material-table";
import { makeStyles } from "@material-ui/core";

interface Props {
  columns: Column<any>[];
  data: any[];
  title: string;
  handleRowAdd?: (newData: any) => Promise<any>;
  handleUpdateRow?: (newData: any, oldData?: any) => Promise<any>;
  handleDeleteRow: (oldData: any) => Promise<any>;
}

const Table: React.FC<Props> = (props: Props) => {
  const maker = makeStyles((theme) => ({
    error: {
      marginTop: theme.spacing(5),
    },
    tableContainer: {
      padding: theme.spacing(2),
    },
  }));
  const styles = maker();
  return (
    <div className={styles.tableContainer}>
      <MaterialTable
        localization={{
          
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "Linhas por página",
            lastTooltip: "Ultima página",
            firstTooltip: "Primeira página",
            nextTooltip: "Próxima página",
            previousTooltip: "Página anterior",
          },
          toolbar: {
            nRowsSelected: "{0} linha(s) selecionadas",
            searchPlaceholder: "Busca",
            searchTooltip: "Busca",
          },
          header: {
            actions: "",
          },
          body: {
            emptyDataSourceMessage: "Nenhum registro encontrado",
            addTooltip: "Adicionar novo registro",
            deleteTooltip: "Deletar registro",
            editTooltip: "Editar registro",
            filterRow: {
              filterTooltip: "Filtro",
            },
            editRow: {
              deleteText: "Tem certeza que deseja deletar o registro?",
              cancelTooltip: "Cancelar",
              saveTooltip: "Finalizar"
            }
          },
        }}
        title={props.title}
        columns={props.columns}
        data={props.data}
        options={{actionsColumnIndex: -1}}
        editable={{
          onRowAdd: props.handleRowAdd,
          onRowUpdate: props.handleUpdateRow,
          onRowDelete: props.handleDeleteRow,
        }}
      />
    </div>
  );
};

export default Table;
