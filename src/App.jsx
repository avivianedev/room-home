import './App.css'
import About from './components/About'
import Header from './components/Header'
import RoomStyling from './components/RoomStyling'

const App = () => {
  return (
    <>
      <section className='container'>
        <Header />
        <RoomStyling />

      </section>
      <section className='about-container'>
        <About />
      </section>
    </>

  )
}

export default App
