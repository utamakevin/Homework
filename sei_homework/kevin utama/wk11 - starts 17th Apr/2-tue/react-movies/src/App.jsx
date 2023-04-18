import './App.css';
import { useState } from 'react';
import LoginPage from './LoginPage';
import MoviesListPage from './MoviesListPage'
import MovieDetailPage from './MovieDetailPage';
import ActorListPage from './ActorListPage';
import { Routes, Route, Link } from "react-router-dom"
import { movies } from './data.js'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <h1>React Studio</h1>

      <span>username: {user}</span>

      {console.log(movies)}

      <nav>
        <Link to="/">Login</Link>
        {user && (<section> <Link to="/list">[Movie List]</Link>
        <Link to="/movies/:movieName">[Movie Detail]</Link>
        <Link to="/actors">[Actor List]</Link> </section>)}

        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser}/>}/>
          <Route path="/list" element={<MoviesListPage movies={movies}/>}/>
          <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies}/>}/>
          <Route path="/actors" element={<ActorListPage />}/>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
