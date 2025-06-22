import React, { createContext, useContext, useState } from "react";
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setİsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search,setSearch]=useState("");
  const deger = {
    movie,
    isLoading,
    error,
    setMovie,
    setİsLoading,
    setError,
    search,
    setSearch
  };
  return <DataContext.Provider value={deger}>{children}</DataContext.Provider>;
};

export default DataProvider;
export function useData() {
  return useContext(DataContext);
}
