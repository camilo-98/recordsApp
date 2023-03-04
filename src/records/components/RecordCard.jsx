import { Link } from "react-router-dom";

export const RecordCard = ({ 
    id, 
    title, 
    band,
    label,
    year,
    genere,
 }) => {


    const recordImage = `/assets/records/${ id }.jpg`;

    

  return (
    <div className="col animate__animated animate__fadeIn">

      <div className="card">

        <div className="row no-gutters">

            <div className="col-3">

                <img src={ recordImage } className="card-img img-fluid" alt={ band } />

            </div>

            <div className="col-8">

                <div className="card-body">

                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ genere }</p>

                    <p>{label}</p>

                    <p className="card-text">
                        <small className="text-muted">{ year }</small>
                    </p>

                    <Link to={`/record/${ id }`}>
                        Más...
                    </Link>

                </div>

            </div>

        </div>

      </div>

    </div>
  )
}


