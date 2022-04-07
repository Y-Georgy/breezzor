import { useState, useEffect, memo } from 'react'
import Chips from '../Chips/Chips'
import CountrySlider from '../CountrySlider/CountrySlider'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import './App.scss'

function App() {
  const [searchType, setSearchType] = useState('beach');
  const [searchValue, setSearchValue] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');

  // const initialPlaceholder = 'Поиск по стране, региону, городу';
  const [mainButtonText, setMainButtonText] = useState('')
  
  useEffect(() => {
    if (searchType === 'beach') setMainButtonText('Все пляжи страны')
    else if (searchType === 'breezzorPass') setMainButtonText('Все отели страны')
    else if (searchType === 'impressions') setMainButtonText('Все впечатления страны')
    else if (searchType === 'routes') setMainButtonText('Все маршруты страны')
  }, [searchType])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="app">
      <form className="app__form" name="breezzor" onSubmit={handleSubmit}>
        <CountrySlider currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} />
        <Chips searchType={searchType} setSearchType={setSearchType}/>
        <TextInput searchType={searchType} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className='app__buttons-overlay'>
          <Button >На карте</Button>
          <Button main={true}>{mainButtonText}</Button>
        </div>
      </form>
      <div className="app__overlay" />
    </div>
  )
}

export default memo(App);
