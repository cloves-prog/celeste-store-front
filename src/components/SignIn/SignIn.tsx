import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import { User } from "../../interfaces/User";
import swal from "sweetalert";
import AlertError from "../ui/AlertError";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface Props {
  show: boolean;
  handleLogin: (user: User) => any;
}

const SignIn: React.FC<Props> = (props) => {
  const [data, setData] = useState<User>({
    email: "",
    password: "",
  });
        
  const user = useSelector((state:AppState) => state.user)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const attributName = event.target.id as keyof User;

    setData({
      ...data,
      [attributName]: event.target.value,
    });
  };
  const validateFields = () => {
    if (!data.email || !data.password) {
      swal("Aviso!", "Preencha os campos corretamente!", "warning");
      return;
    }

    props.handleLogin(data);
  };
  const handleKeyPress = (event: any) => {
    if(event.keyCode === 13){
      validateFields();
  }
  }

  return (
    <Dialog fullWidth open={props.show} aria-labelledby="sign-in-modal">
      {user.messageError && (
        <AlertError message={user.messageError} />
      )}
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Acesse para visualizar todos os recursos da aplicação
        </DialogContentText>
        <TextField
          onChange={handleInputChange}
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          required
        />
        <TextField
          onChange={handleInputChange}
          margin="dense"
          onKeyDown={handleKeyPress}
          id="password"
          label="Senha"
          type="password"
          fullWidth
          required
        />
      </DialogContent>
      <DialogActions>
        <Button  onClick={validateFields} variant="contained" color="primary">
          Logar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SignIn;
