import { useState }from 'react';
import './fetchapi.css';
import Api from '../../Api.json';
import Map from '../Map/Map';

function Fetchapi() {

  const [search, setSearch] = useState("");

  const handleSearch = (event) =>{
  }

    return (
      <div className="body">
        <div className="posts">
        <input id="searchInput"
          type="text"
          placeholder="search"
          onChange={e=>{
            setSearch(e.target.value)

            
          }}
        />
        <Map />
        {Api.filter(api => {
          if (search === "") {
            return api
          }
          else if (api.fields.localite.toLowerCase().includes(search.toLowerCase())) {
            return api
          }
        }).map(api => {
          return(
            <>
            <div class="card">
            <div class="container">

             <h2>{api.fields.entite}</h2>
              <p>{api.fields.localite}</p>
            </div>
          </div>
            </>
          )
        })}
    </div>
    </div>
    );
}

export default Fetchapi;
