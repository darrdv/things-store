import React, {useState} from 'react';

const Context = React.createContext();

const ContextProvider = (props) => {

  const [allProducts, setAllProducts] = useState([]);
  
  return(    
    //<Context.Provider value="{{allProducts:allProducts}}">  Use Object shorthand
    <Context.Provider value="{{allProducts}}">
      {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}