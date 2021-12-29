
import Search from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainNav from './components/MainNav/MainNav';
import Movies from './Pages/Movies/Movies';
import TvSeries from './Pages/TvSeries/TvSeries';
import Trending from './Pages/Trending/Trending';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>

            <Route path="/" element={<Trending />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tvseries" element={<TvSeries />} />
            <Route path="search" element={<Search />} />

          </Routes>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>


  );
}

export default App;
