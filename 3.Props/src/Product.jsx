import React from 'react'

function Product(props) { //function Product(productName , price) { this is the same

const {productName , price} = props;

  return (
    <div>

    <div>
      Product İnformations
    </div>

    <div>
      <div>
        Name : {productName} 		
      </div>

      <div>
        Price : {price}
      </div>
    </div>

    </div>
  )
}

export default Product