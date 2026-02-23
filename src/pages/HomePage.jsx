// importiamo conponente CardFilm
import CardFilm from "../components/CardFilm"

const HomePage = () => {

    return (
        <>
            <h1 className="text-primary">MovieHub</h1>
            <h2><i>The boolean nerd film community</i></h2>

            <div>
                <div className="row row-cols-3 mt-4">
                    <CardFilm />

                    <CardFilm />
                    <CardFilm />
                    <CardFilm />
                    <CardFilm />
                    <CardFilm />
                    <CardFilm />
                </div>
            </div>
        </>

    )

}

export default HomePage