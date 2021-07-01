import React, { useEffect } from "react";
import api from "../../services/api";

// import { Container } from './styles';

const Table: React.FC = () => {
  useEffect(() => {
    api.get("/devices").then((value) => {
      console.table(value.data);
    });
  }, []);

  return <div />;
};

export default Table;
