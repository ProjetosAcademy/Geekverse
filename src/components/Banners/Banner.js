//styles
import styles from './Banner.module.css'
//swiper
import {Swiper,SwiperSlide} from 'swiper/react'
import {A11y, Autoplay, FreeMode, Keyboard, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//hooks
import { useState,useRef,useEffect } from 'react'
//assets
import banner from '../../assets/images/banner1.png'


const Banner = ({images}) => {

    
  const navPrevRef = useRef()
  const navNextRef = useRef()
  const swiperRef = useRef()
  useEffect(() => {
    console.log(navNextRef.current)
  },[navNextRef])
  return (
    <div className={styles.banner_container}>
        <Swiper        
          ref={swiperRef}
          freeMode={true}
          keyboard={true}
          grabCursor={true}
          autoplay={{delay: 4000} }
          navigation = {{ 
          nextEl: navNextRef.current,
          prevEl: navPrevRef.current,}}
          centeredSlides={true}
          loop={true}
          pagination={{clickable:true,bulletElement:'span'}}
          slidesPerView={1}
          modules={[FreeMode,Keyboard,Autoplay,Navigation,Pagination,A11y]}>
            <SwiperSlide>
                <div className={styles.image_box}>
                  <img src={banner} alt='image' className={styles.image} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.image_box}>
                  <img src={banner} alt='image' className={styles.image} />
                </div>
            </SwiperSlide>

        </Swiper>
        {/* <div className={styles.slide_controls}>
          <span 
          className={`${styles.btn_left} ${styles.btn_manual} `}
          ref={navPrevRef}>
            <i className="bi bi-caret-left-fill"></i>
            </span>
          <span 
          className={`${styles.btn_right} ${styles.btn_manual} `}
          ref={navNextRef}
          >
          <i className="bi bi-caret-right-fill"></i>
          </span>
      </div> */}
  </div> 

  )
}

export default Banner