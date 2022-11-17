import logo from './logo.svg';
import './App.css';

//import for bootstrap css
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

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
      <Navbar>
        <h1>test</h1>
      </Navbar>
      <Container className='p-5'>
        <h1>hello world</h1>
      </Container>

    </div>
  );
}

export default App;
