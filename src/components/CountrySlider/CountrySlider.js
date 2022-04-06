import { useState, useEffect } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowLeft, ArrowRight } from '../../images/images'
import 'swiper/scss'
import './CountrySlider.scss'

const CountrySlider = () => {
  const [countriesArray, setCountriesArray] = useState([])
  const [currentCountry, setCurrentCountry] = useState('')

  useEffect(() => {
    setCountriesArray([
      'Испания',
      'Франция',
      'Сент Винсент и Гренадины',
      'Португалия',
      'Англия',
      'Китай',
      'Россия',
      'Корея',
      'Италия',
      'Соединенное Королевство',
      'Япония',
      'Саудовская Аравия',
    ])
  }, [])

  if (countriesArray.length === 0) return null

  return (
    <section className="country-slider">
      <h1 className="country-slider__title">{currentCountry}</h1>
      <div className="country-slider__swiper-overlay">
        <ArrowLeft className="country-slider__btn-prev" />
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={'auto'}
          centeredSlides={true}
          initialSlide={2}
          onSlideChange={(swiper) => setCurrentCountry(countriesArray[swiper.activeIndex])}
          navigation={{
            prevEl: '.country-slider__btn-prev',
            nextEl: '.country-slider__btn-next',
          }}
        >
          {countriesArray.map((country) => (
            <SwiperSlide key={country}>{country}</SwiperSlide>
          ))}
        </Swiper>
        <ArrowRight className="country-slider__btn-next" />
      </div>
      <hr className="country-slider__line" />
      <p className="country-slider__subtitle">Мир Breezzor огромный, исследуй его!</p>
    </section>
  )
}

export default CountrySlider
