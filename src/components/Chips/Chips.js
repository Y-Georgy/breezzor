import { memo } from 'react'
import './Chips.scss'

const Chips = ({ searchType, setSearchType} ) => {
  return (
    <section className="chips">
      <button 
        className={`chips__button${searchType === 'beach' ? ' chips__button_active' : ''}`}
        onClick={() => setSearchType('beach')}
        type="button"
      >
        Пляжи
      </button>
      <button 
        className={`chips__button${searchType === 'breezzorPass' ? ' chips__button_active' : ''}`} 
        onClick={() => setSearchType('breezzorPass')}
        type="button"
      >
        Breezzor Pass
      </button>
      <button 
        className={`chips__button${searchType === 'impressions' ? ' chips__button_active' : ''}`} 
        onClick={() => setSearchType('impressions')}
        type="button"
      >
        Впечатления
      </button>
      <button 
        className={`chips__button${searchType === 'routes' ? ' chips__button_active' : ''}`} 
        onClick={() => setSearchType('routes')}
        type="button"
      >
        Маршруты
      </button>
    </section>
  )
}

export default memo(Chips)
