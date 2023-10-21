import React from 'react'

export const Cart = () => {
  const products = [{}, {}];

  return (
    <div className="m-5">
    <div className="border ">
      <h2 className="font-semibold" >Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong>: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}
