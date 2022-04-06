import { Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/scss'
import './CountrySlider.scss'

const CountrySlider = () => {
  const swiper = useSwiper()

  return (
    <section className="country-slider">
      <h1 className="country-slider__title">Сент_Винсент и Гренадины</h1>
      <div className="country-slider__swiper">
        <button className="prev" onClick={() => swiper.slidePrev()}>
          Slide to the prev slide
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={5}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
        >
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Испания</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Франция</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Сент Винсент и Гренадины</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Португалия</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Саудовская Аравия</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Slide 6</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="country-slider__swiper-slide">Slide 7</p>
          </SwiperSlide>
        </Swiper>
        <button className="next" onClick={() => swiper.slideNext()}>
          Slide to the next slide
        </button>
      </div>
    </section>
  )
}

export default CountrySlider
