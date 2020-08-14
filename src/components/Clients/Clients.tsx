import React from "react";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";

const Clients: React.FC = () => {
  const location = useLocation();
  return <TopBar currentPath={location.pathname} />
};

export default Clients;
