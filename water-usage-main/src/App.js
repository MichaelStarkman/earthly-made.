import Map from './components/Map'
import './App.css';
import 'bootstrap';

//import for bootstrap css
import ModalComponent from './components/modal'

import Hero from './components/Hero.jsx';

import Carousel from './components/Carousel'
import Cards from './components/Cards'


function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Cards />      
      <Map />
    </div>
  );
}

export default App;
