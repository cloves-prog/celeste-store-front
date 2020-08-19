import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Tab,
  Tabs,
  Button,
} from "@material-ui/core";
import Menu from "./Menu";
import logo from "../../assets/logo.png";
import SignIn from "../SignIn";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { signIn } from "../../store/user/actions";
import { AppState } from "../../store";
import { ActionTypes } from "../../store/user/types";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white",
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },
  logo: {
    width: 50,
  },
  stretch: {
    flexGrow: 1,
  },
}));

interface Props {
  currentPath: string;
}

const TopBar: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const user = useSelector((state:AppState) => state.user)
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch()
  const history = useHistory();
  useEffect(() => {
    dispatch({
      type: ActionTypes.FETCH_TOKEN
    })
  }, [dispatch])
  useEffect(() =>{
    if (!user.isAuthenticated) {
      history.push('/')
    }
  },[user.isAuthenticated, history])

  const currentTab = () => {
    if (props.currentPath === "/") return;
    if (props.currentPath === "/dashboard") return 0;
    if (props.currentPath === "/sales") return 1;
    if (props.currentPath === "/products") return 2;
    if (props.currentPath === "/clients") return 3;
    if (props.currentPath === "/salespeople") return 4;
  };
  const handleLogin = (user: User) => {
    dispatch(signIn(user))
  }

  const logout = () => {
    dispatch({
      type: ActionTypes.LOGOUT
    })
  }

  return (
    <AppBar position="relative" color="inherit" className={classes.appBar}>
      <SignIn show={showModal && !user.isAuthenticated} handleLogin={handleLogin} /> 
      <Toolbar>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>

        {user.isAuthenticated && 
        <div className={classes.tabContainer}>
          <Tabs
            value={currentTab()}
            indicatorColor="primary"
            textColor="primary"
          >
            {Menu.map((item, index) => (
              <Tab
                key={index}
                component={Link}
                to={{
                  pathname: item.pathname,
                }}
                classes={{ root: classes.tabItem }}
                label={item.label}
              />
            ))}
          </Tabs>
        </div>}
        <div className={classes.stretch}></div>
        {!user.isAuthenticated &&
         <Button
          onClick={() => setShowModal(true)}
          variant="outlined"
          color="primary"
        >
          Login
          </Button>
          }

          {
          user.isAuthenticated && <Button
            onClick={logout}
            variant="outlined"
            color="primary"
          >
          Logout
        </Button>}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
