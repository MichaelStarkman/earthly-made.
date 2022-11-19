import './App.css';
import 'bootstrap';

//import for bootstrap css
import Map from './components/Map'
import Carousel from './components/Carousel'
import Hero from './components/Hero.jsx';


function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Map />
    </div>
  );
}

export default App;
