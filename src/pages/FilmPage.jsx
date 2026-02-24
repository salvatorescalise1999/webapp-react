import { Link } from "react-router-dom"

// importiamo componente CardReview
import CardReview from "../components/CardReview"


// dati temporanei per test props
const movie = {
    "id": 4,
    "title": "The Matrix",
    "director": "The Wachowskis",
    "genre": "Action",
    "release_year": 1999,
    "abstract": "A hacker discovers the truth about his reality and his role in the war against its controllers.",
    "image": "http://localhost:3000/img/movies/the_godfather.jpg",
    "created_at": "2024-11-29T10:40:13.000Z",
    "updated_at": "2025-05-22T10:55:27.000Z",
    "reviews": [
        {
            "id": 10,
            "movie_id": 4,
            "name": "Jack",
            "vote": 5,
            "text": "A revolutionary film in every sense.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 11,
            "movie_id": 4,
            "name": "Karen",
            "vote": 4,
            "text": "Great action and a thought-provoking plot.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 12,
            "movie_id": 4,
            "name": "Liam",
            "vote": 4,
            "text": "A unique take on reality and perception.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        }
    ]
}

const FilmPage = () => {

     // funzione di rendering del listato dei libri
    const rederReviews = () => {
        return movie.reviews.map(review => {
            return (
                <CardReview reviewProp={review} key={review.id} />
            )
        })
    }

    return (
       
       <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src= {movie.image} alt={movie.title} />
                </div>
                <h1>{movie.title}</h1>
                <h3 className="text-muted"><i>By {movie.director}</i></h3>
                <p>{movie.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>

                {rederReviews()}

            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>

    )

}

export default FilmPage