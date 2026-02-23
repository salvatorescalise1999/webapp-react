import { Link } from "react-router-dom"

// importiamo componente CardReview
import CardReview from "../components/CardReview"

const FilmPage = () => {

    return (
       
       <>
            <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src="https://www.jdandj.com/uploads/8/0/0/8/80083458/s611371146998849390_p82_i2_w1600.jpeg" alt="titolo del film" />
                </div>
                <h1>Titolo Film</h1>
                <h3 className="text-muted"><i>By Nome Regista</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Reviews qui */}
                <CardReview />
                <CardReview />
                <CardReview />
                <CardReview />
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>

    )

}

export default FilmPage