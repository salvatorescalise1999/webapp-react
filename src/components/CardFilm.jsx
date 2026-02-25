import { Link } from "react-router-dom"

const CardFilm = (props) => {

    const { id, title, director, abstract, image } = props.movieProp;

    return (
        <div className="card mb-4 h-100">
            <img src={image}
                className="card-img-top" alt={title}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <address><i>By {director}</i></address>
                <p className="card-text">{abstract}</p>

                <div className="mt-auto">
                    <Link to={`films/${id}`} className="btn btn-primary">
                        See more
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default CardFilm