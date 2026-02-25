// importiamo axios
import axios from "axios"

// import di state e effect
import { useState, useEffect } from "react"

import { Link, useParams, useNavigate } from "react-router-dom"

// importiamo componente CardReview
import CardReview from "../components/CardReview"

// import componente per form review
import ReviewForm from "../components/ReviewForm";

const endpoint = "http://localhost:3000/api/movies/";


const FilmPage = () => {

    // prendiamo id film da url rotta
    const { id } = useParams();

    // creiamo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    // settiamo la var di stato per il film
    const [movie, setMovie] = useState({});

    // funzione che gestisce la chiamata alla rotta show di BE
    const fetchMovie = () => {
        axios.get(endpoint + id)
            .then(res => { setMovie(res.data); })
            .catch(err => {
                console.log(err);
                if (err.status = 404) redirect('/404');
            })
    }

    // richiamo funzione di fetch al montaggio della page
    useEffect(fetchMovie, []);

    // funzione di rendering del listato dei libri
    const rederReviews = () => {
        return movie.reviews?.map(review => {
            return (
                <CardReview reviewProp={review} key={review.id} />
            )
        })
    }

    return (

        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={movie.image} alt={movie.title} />
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
             <section>

                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />

            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>

    )

}

export default FilmPage