import { useState, useEffect, memo } from 'react'
import { InputIcon } from '../../images/images'
import './TextInput.scss'

const TextInput = ({ searchType, searchValue, setSearchValue }) => {
  const initialPlaceholder = 'Поиск по стране, региону, городу';
  const [placeholder, setPlaceholder] = useState(initialPlaceholder)
  
  useEffect(() => {
    if (searchType === 'beach') setPlaceholder(initialPlaceholder + ', название пляжа')
    else if (searchType === 'breezzorPass') setPlaceholder(initialPlaceholder + ', названию отеля')
    else if (searchType === 'impressions') setPlaceholder(initialPlaceholder + ', названию впечатления')
    else if (searchType === 'routes') setPlaceholder(initialPlaceholder + ', названию маршрута')
  }, [searchType])
  
  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <section className='search'>
      <input 
        className="search__input"
        type="text"
        name="text"
        placeholder={placeholder}
        onChange={handleChangeValue}
        value={searchValue}
      />
      <InputIcon className="search__icon" />
    </section>
  )
}

export default memo(TextInput);
