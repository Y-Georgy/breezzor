import Chips from '../Chips/Chips'
import CountrySlider from '../CountrySlider/CountrySlider'
import TextInput from '../TextInput/TextInput'
import './App.scss'

function App() {
  return (
    <div className="app">
      <form className="app__form" name="breezzor">
        <CountrySlider />
        <Chips />
        <TextInput />
      </form>
      <div className="app__overlay" />
    </div>
  )
}

export default App
