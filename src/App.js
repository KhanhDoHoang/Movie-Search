import './App.css';
import SearchMovies from './components/searchMovies';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Movie Searcher</h1>
        <h3 className="subtitle">Help you find your favourite movies</h3>
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
