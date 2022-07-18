import React, {useContext} from 'react';
import {Context} from '../Context';
import Product from '../components/Product';

const Products = () => {

  const {allProducts} = useContext(Context)

  const displayedProducts = allProducts.map((product) => (
    <Product img={product.image} />
    
 ))

  return(
    <main className="products">
      {displayedProducts }
    </main>
  )

}

export default Products;