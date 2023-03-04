import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getRecordById } from "../helpers/getRecordById";

export const RecordPage = () => {

  const { recordId } = useParams();
  const navigate = useNavigate();

  const record = useMemo( () => getRecordById( recordId ), [ recordId ] ); 

  const onNavigateBack = () => {
    navigate(-1);
  }
  
  if(!record){
    return <Navigate to="/inquisition"/> 
  }

  return (
    <div className="row mt-5  animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={ `/assets/records/${ recordId }.jpg` }
          alt={ record.band }
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{record.title}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Label: </b>{record.label}</li>
          <li className="list-group-item"><b>Year: </b>{record.year}</li>
          <li className="list-group-item"><b>Genere: </b>{record.genere}</li>
        </ul>

        <button className="btn btn-outline-dark"
                onClick={ onNavigateBack }
        >
          Back
        </button>

      </div>
    </div>
  )
}