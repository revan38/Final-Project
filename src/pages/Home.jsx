import React from 'react'
import { servicesApi } from '../Service/apiService'
import Product from '../components/Product';
function Home() {
  const {data: products} = servicesApi.useGetProductsQuery();
  return (
    <div>
   {
products && products.map((product) => 
<Product key={product.id} product={product}/>
)
   }
    </div>
  ) 
}

export default Home
