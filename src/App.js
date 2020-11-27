import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMoviesApi = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=82131e8e`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMoviesApi(searchValue)
  },[searchValue])

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row d-flex'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
