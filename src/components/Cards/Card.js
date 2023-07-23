import { useEffect, useState } from 'react'
import styles from './Card.module.css'

const Card = ({image,name,price,discount = false}) => {
  const discounted = discount? price - (price *discount / 100) : ''
  return (
    <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={image} alt="image mocada" />
            </a>
          </div>

          <div className={styles.info_product}>
            <span className={styles.product_name}>
              {name}
            </span>
            {/* sem desconto */}
            {!discount &&
              <div className={styles.product_price}>    
               <p className='f-small' style={{opacity:0, cursor:'default'}}>sem desconto
                </p>        
                <p className={styles.discount_container}>por 
                  <span className="f-large">{price}</span>              
                </p>
              </div>
              }
            {/* com desconto */}
            {discount &&
              <div className={styles.product_price}>
                <p className='f-small'>de <span className=" discount">{price}$</span>
                </p>
                
                <p className={styles.discount_container}>por 
                  <span className="f-large">{discounted.toFixed(2)}</span> 
                  <span className={styles.discount_percent}>{discount}%</span>
                </p>
              </div>
              }
            

            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
  )
}

export default Card