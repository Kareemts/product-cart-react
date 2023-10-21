
import React from 'react'

const Header = ({selecteds,setSelected}) => {
  return <div className="w-full h-10 bg-blue-600 p-2 flex gap-10  mb-10 text-white">

<div className='font-bold cursor-pointer'  >SHOPPING CART</div>
<div className='cursor-pointer'  onClick={()=>setSelected('new_product')}>Add new product</div>
<div className='cursor-pointer' onClick={()=>setSelected('view_product')}>View products</div>
<div className='cursor-pointer' onClick={()=>setSelected('cart')}>Cart</div>

  </div>;
}

export default Header
