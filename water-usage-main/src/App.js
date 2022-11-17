import logo from './logo.svg';
import './App.css';

//import for bootstrap css
import NavbarComponent from './components/Navbar';
import modalComponent from './components/modal'
import Hero from './components/Hero.js';

function App() {
  return (
    <div className="App">

      <header>
        {/* css for bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        {/* js for bootstrap */}
        <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      </header>
      <NavbarComponent />

      {/* Hero Component  */}
      <Hero />

    </div>
  );
}

export default App;
