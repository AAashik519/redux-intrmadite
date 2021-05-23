import React from 'react'

const Home = () => {
    return (
        <div className='container'>
             
             <h1>Home Component</h1>
             <button className='cart-btn'> cart</button>
             <div className='cart-wrapper'>
                  <div className='img-weapper item'>
                      <img src="https://i.gadgets360cdn.com/products/large/V19-Vivo-DB-841x800-1586163515.jpg" alt="" />
                  </div>
                  <div className="text-wapper">
                      <span>
                          I-Phone
                      </span>
                      <strong>
                          
                          Price :$1000.00
                      </strong>
                  </div>
                  <div className="btn-wrapper item">
                      <button> ADD To Cart </button>
                  </div>
             </div>

             
        </div>
    )
}

export default Home
