// importiamo axios
import axios from "axios"

// import di state e effect
import { useState, useEffect } from "react"

// importiamo conponente CardFilm
import CardFilm from "../components/CardFilm"

const endpoint = "http://localhost:3000/api/movies";


const HomePage = () => {

    // importiamo la varibile di stato
    const [movies, setMovies] = useState([]);

    // funzione che gestisce la chiamata alla rotta index del BE
    const fetchMovies = () => {
        axios.get(endpoint)
        .then(res => {setMovies(res.data);
        })
        .catch(error => {console.log(error);
        })
    }

    // funzione di rendering del listato dei film

    const rederMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <CardFilm movieProp={movie} />
                </div>
            )
        })
    }

    // richiamo funzione di fetch al momtaggio della page
    useEffect(fetchMovies, []);

    return (
        <>
            <h1 className="text-primary">MovieHub</h1>
            <h2><i>The boolean nerd film community</i></h2>

            <div>
                <div className="row row-cols-3 mt-4 mb-4 g-4">
                    {rederMovies()}

                </div>
            </div>
        </>

    )

}

export default HomePage