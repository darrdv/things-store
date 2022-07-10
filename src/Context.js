import React, {useState, useEffect} from 'react';

const Context = React.createContext();

const ContextProvider = (props) => {

  const [allProducts, setAllProducts] = useState([]);

  const url = "https://fakestoreapi.com/products/category/men's clothing";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllProducts(data))
  }, [])

  console.log(allProducts)
  
  return(    
    //<Context.Provider value="{{allProducts:allProducts}}">  Use Object shorthand
    <Context.Provider value="{{allProducts}}">
      {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}