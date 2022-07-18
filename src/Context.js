import React, {useState, useEffect} from 'react';

const Context = React.createContext();

function ContextProvider({children}){

  const [allProducts, setAllProducts] = useState([]);
  //const [allPhotos, setAllPhotos] = useState([])

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllProducts(data))
  }, [])
  
  return(    
    //<Context.Provider value={{allProducts:allProducts}}>  Use Object shorthand
    <Context.Provider value={{allProducts}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}