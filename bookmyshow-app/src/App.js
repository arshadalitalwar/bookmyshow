import "./App.css";
import Seating from "./Components/Seating";
// import Card from "./Components/Card";
import Footer from "./Routes/Footer";
import Navbar from "./Routes/Navbar";
import Router from "./Routes/Router";
// import SeeAll from './Pages/SeeAll'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
      <Seating></Seating>
    </div>
  );
}

export default App;
