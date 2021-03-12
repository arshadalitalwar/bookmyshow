import "./App.css";
// import Card from "./Components/Card";
import Footer from "./Routes/Footer";
import Navbar from "./Routes/Navbar";
import Router from "./Routes/Router";
import SummeryPage from './Pages/SummeryPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SummeryPage/>
      <Router />
      <Footer />
      
    </div>
  );
}

export default App;
