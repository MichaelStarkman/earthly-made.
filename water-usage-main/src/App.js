import Map from './components/Map'
import './App.css';
import 'bootstrap';

//import for bootstrap css
import ModalComponent from './components/modal'

import Hero from './components/Hero.jsx';

import Carousel from './components/Carousel'
import Cards from './components/Cards'
import Articles from './components/Articles';


function App() {
  return (
    <div className="App">
      <Hero /> {/* .Cards now lives in here */}
      <Carousel />
      {/* <Cards />  Moved these Cards into the Hero section     */}
      <Map />
    </div>
  );
}

export default App;
