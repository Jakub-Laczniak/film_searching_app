import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setFilm, setFilmFound, setSearch } from './store/appSlice';
import Film from './Film';

export const getFilm = async (film) => axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${film}`);

function App() {
  const search = useSelector(state => state.app.search);
  const isFilmFound = useSelector(state => state.app.isFilmFound);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");


  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearch(searchText));
    setSearchText("");
  };

  useEffect(() => {
    if(search) {
      getFilm(search)
      .then((res) => {
        console.log(res);
        dispatch(setFilm(res.data));
        dispatch(setFilmFound(true))
      })
      .catch((err) => {
        console.log(err);
        dispatch(setFilm([]));
        dispatch(setFilmFound(false));
      })
    }
  }, [search]);

  return (
    <div className="App" style={{marginTop:"60px"}}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" onChange={(event) => handleChange(event)} value={searchText} style={{marginRight:"10px"}} placeholder="film searching ..." />
      </form>
        {isFilmFound ? 
          <Film /> :
        <h2>No film to display</h2>
        }
    </div>
  );
}

export default App;
