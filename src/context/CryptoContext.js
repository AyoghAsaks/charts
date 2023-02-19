import React, { useEffect, useState } from "react";
import { createContext } from 'react';

const CryptoContext = createContext();


export const CryptoContextProvider = ({ children }) => {

  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if(currency === "USD") setSymbol("$");
    else if (currency === "INR") setSymbol("R");
  }, [currency]);

  return (
    <CryptoContext.Provider value={{currency, symbol, setCurrency}}>
        {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;