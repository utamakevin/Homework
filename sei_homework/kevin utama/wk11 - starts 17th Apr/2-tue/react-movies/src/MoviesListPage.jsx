import MovieCard from './MovieCard'

export default function MovieListPage({ movies }) {

    function handleClick() {

    }

    return (
        <section>
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.title}/>
            ))}
        </section>
    )
}