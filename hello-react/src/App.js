import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='nav-and-welcome'>
              <Navigation />
              <br />
              <h1 id='hello'>Say hello to 
                <br />
                ReactJS</h1>
      </div>
      <Gallery />
    </div>
  );
}
export default App;
