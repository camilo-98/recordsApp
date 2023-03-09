import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { queryString } from 'query-string';
import { RecordCard } from "../components"
import { getRecordsByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const records = getRecordsByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && records.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if(searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`);
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Busque por el titulo del album que desea conocer ó palabras que lo contengan</h4>
          <hr/>
          <form onSubmit={ onSearchSubmit } aria-label="form">
            <input
              type="text"
              placeholder="Search a Record"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-dark mt-2">
              Search
            </button>
          </form>
        </div>
        <br></br>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {/* {
            ( q === '' )
              ? <div className="alert alert-dark">
                  Search a Record
                </div>
              : ( records.length === 0 ) && <div className="alert alert-danger">
                                              There's no results for <b>{ q }</b>
                                            </div>
          } */}

          <div className="alert alert-dark animate__animated animate__fadeInRight" 
              style={{ display: showSearch ? '' : 'none' }}>
            Search a Record
          </div>

          <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeInRight" 
              style={{ display: showError ? '' : 'none' }}>
            There's no results for <b>{ q }</b>
          </div>

          {
            records.map( record => (
              <RecordCard key={ record.id} {...record}/>
            ) )
          }

        </div>
      </div>
    </>
  )
}

