import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: 10,
      id: 123
    },
    {
      name: 'Game of Thrones',
      price: 15,
      id: 321
    },
    {
      name: 'Gone with the wind',
      price: 20,
      id: 222
    },
    {
      name: 'Shazam',
      price: 44,
      id: 133
    },
    {
      name: 'God of War',
      price: 14,
      id: 333
    },
    {
      name: 'Ghost',
      price: 45,
      id: 253
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
