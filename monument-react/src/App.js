import './App.css';
import Navbar from './components/Navbar';
import Blog from './Pages/Blog';
// import Landing from './Pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
