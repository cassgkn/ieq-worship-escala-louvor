import Header from './components/Cabecalho'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import ListaEscala from './containers/ListaEscala'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaEscala />
      </div>
      <Rodape />
    </>
  )
}

export default App
