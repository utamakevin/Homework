import { Routes, Route, Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    const moviePoster = movie.posterPath
    return (
        <Link to={`/movies/${movie.title}`}><div style={{  
            backgroundImage: `url(${moviePoster})`}}>
            <h2>{movie.title}</h2>
            <h3>{movie.releaseDate}</h3>
        </div></Link>
    )
}