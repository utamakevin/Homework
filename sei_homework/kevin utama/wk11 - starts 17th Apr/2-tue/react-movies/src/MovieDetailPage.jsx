import { useParams } from "react-router-dom"

export default function MovieDetailPage({ movies }) {
    let { movieName } = useParams()
    const movie = movies.filter(movie => movie.title === movieName)
    console.log(movie)
    return <section>
        <h1>Movie Detail</h1>  
        <h2>{movieName}</h2>
        <h3>{movie[0].releaseDate}</h3>
        <img src={movie[0].posterPath} alt="" />
        <div></div>
        <span>Cast: {(movie[0].cast).join(', ')}</span>
          




    </section>
}