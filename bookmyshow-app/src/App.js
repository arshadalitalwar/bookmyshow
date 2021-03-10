import './App.css';
import Card from './Components/Card';
import SeeAll from './Pages/SeeAll';
import Footer from './Routes/Footer';
import Navbar from './Routes/Navbar';
import Router from './Routes/Router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router />
      <SeeAll/>
      <Footer/>
    </div>
  );
}

export default App;
