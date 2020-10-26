const render = ReactDOM.render;
const { createContext, useContext, useReducer, useState } = React;

const Context = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState({});

  return (
    <Context.Provider value={ [products, setProducts] }> {children} </Context.Provider>
  );
}; 

const useProducts = () => ( useContext(Context) );
