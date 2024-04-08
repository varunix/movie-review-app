import { createContext, useState } from "react";

export const movieStoreContext = createContext(null);

export const MoviesContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);
  return (
    <movieStoreContext.Provider value={{ movieList, setMovieList }}>{props.children}</movieStoreContext.Provider>
  );
};
