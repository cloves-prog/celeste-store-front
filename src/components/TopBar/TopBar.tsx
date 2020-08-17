import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles, Tab, Tabs } from "@material-ui/core";
import Menu from "./Menu";
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
}));

interface Props {
  currentPath: string;
}
const TopBar: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const currentTab = () => {
    if (props.currentPath === "/") return 0;
    if (props.currentPath === "/sales") return 1;
    if (props.currentPath === "/products") return 2;
    if (props.currentPath === "/clients") return 3
    if (props.currentPath === "/salespeople") return 4;
  };

  return (
    <AppBar position="relative" color="inherit" className={classes.appBar}>
      <Toolbar>
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
