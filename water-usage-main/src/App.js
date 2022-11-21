import './App.css';
import 'bootstrap';

// import for bootstrap css
import Map from './components/Map'
import Donations from './components/Donations'
import Carousel from './components/Carousel'
import Hero from './components/Hero.jsx';
import BottomText from './components/BottomText';
import MainLinks from './components/MainLinks';
import NewHero from './components/NewHero';




function App() {
  return (
    <div className="App">
      <NewHero />
      <Map />
      <MainLinks />
      {/* <Carousel /> */}
      <Donations />
      <BottomText />
    </div>
  );
}

export default App;