import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favoritesIds: [],
  addToFavorites: (id) => {},
  removeFromFavorites: (id) => {},
});

function FavoritesProvider({ children }) {
  const [favoritesIds, setFavoritesIds] = useState([]);

  function addToFavorites(id) {
    setFavoritesIds((prevState) => [...prevState, id]);
  }

  function removeFromFavorites(id) {
    setFavoritesIds((prevState) =>
      prevState.filter((localId) => localId !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoritesIds: favoritesIds,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };
