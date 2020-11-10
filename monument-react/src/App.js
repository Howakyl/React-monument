import './App.css';
import Archive from './components/Archive';
import Navbar from './components/Navbar';
import Blog from './Pages/Blog';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Archive />
    </div>
  );
}

export default App;
