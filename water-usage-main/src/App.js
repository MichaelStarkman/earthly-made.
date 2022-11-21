import './App.css';
import 'bootstrap';
import MainLinks from './components/MainLinks';

//import for bootstrap css
import Map from './components/Map'
import Donations from './components/Donations'
// import Carousel from './components/Carousel'
// import Hero from './components/Hero.jsx';
import BottomText from './components/BottomText';



function App() {
  return (
    <div className="App">
      <Map />
      <MainLinks />
      {/* <Hero />
      <Carousel /> */}
      <Donations />
      <BottomText />
    </div>
  );
}

export default App;
