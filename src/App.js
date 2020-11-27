import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([])

  const getMoviesApi = async () => {
    const url = 'http://www.omdbapi.com/?s=star wars&apikey=82131e8e'

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMoviesApi()
  },[])

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
