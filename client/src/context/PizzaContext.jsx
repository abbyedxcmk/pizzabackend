import React, { createContext, useContext, useState } from 'react';

const PizzaContext = createContext();

export function usePizzaContext() {
  return useContext(PizzaContext);
}

export function PizzaProvider({ children }) {
  const [selectedPizza, setSelectedPizza] = useState({ id: null, size: 'smPrice' });
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState([]);

  const updateSelectedPizza = (pizzaId, size) => {
    setSelectedPizza({ id: pizzaId, size });
  };

  const addToOrder = (pizza) => {
    setOrder([...order, { ...pizza, quantity }]);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <PizzaContext.Provider value={{ selectedPizza, updateSelectedPizza, quantity, increaseQuantity, decreaseQuantity, addToOrder, order }}>
      {children}
    </PizzaContext.Provider>
  );
}