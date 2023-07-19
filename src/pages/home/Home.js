//swiper
import {Swiper,SwiperSlide} from 'swiper/react'
import {A11y, Autoplay, FreeMode, Keyboard, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//styles

import Banner from '../../components/Banners/Banner'
import styles from './Home.module.css'

//assets
//hooks


const Home = () => {

  const imageMock = "//images.tcdn.com.br/img/img_prod/723087/180_caneca_3d_espresso_patronum_510ml_8631_1_1966bdc92af35f499cb700e8ee829b0c.png"

  return (
    <section className={styles.home_container}>

      <Banner />
      <h1 className="t-center f-large custom-title mrg-large"> Nossa Coleção</h1>

      {/* AJEITAR O SWIPPER */}

      <Swiper
       freeMode={true}
       grabCursor={true}
       modules={[FreeMode]}
       className={styles.products_container}
       spaceBetween={20}
       slidesPerView={3}
   
       breakpoints={{
       0:{slidesPerView:1.1},
       500:{slidesPerView:1.3},
       600:{slidesPerView:1.8},
       800:{slidesPerView:2.5},
       1080:{slidesPerView:3.5},
       1400:{slidesPerView:4.3}}}
      
      >
        <SwiperSlide>
          <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        </SwiperSlide>
        
        <SwiperSlide> 
          <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        </SwiperSlide>

      </Swiper>

        
{/*        
        <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div>
        <div className={styles.card_container}>
          <div className={styles.image_container}>
            <a href="">
              <img src={imageMock} alt="image mocada" />
            </a>
          </div>
          <div className={styles.info_product}>
            <span className={styles.product_name}>
              caneca 3D expresso
            </span>
            <div className={styles.product_price}>
              <p className='f-small'>de <span className=" discount">108.99$</span></p>
              <p>por <span className="f-large">70.98$</span></p>
            </div>
            <button className='btn-normal f-normal f-bold'>comprar</button>
          </div>
         

        </div> */}
       
      {/* </div> */}
    </section>
  )
}

export default Home