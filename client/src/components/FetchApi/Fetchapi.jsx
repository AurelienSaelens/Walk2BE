import { useState }from 'react';
import './fetchapi.css';
import Api from '../../Api.json';
import Map from '../Map/Map';
import { BsGeoAltFill } from 'react-icons/bs';
import mapboxgl from 'mapbox-gl';

function Fetchapi( {searchResult}) {



  const [search, setSearch] = useState("");
  const [selectedWalk, setSelectedWalk] = useState(null);

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
          else if (api.fields.entite.toLowerCase().includes(search.toLowerCase())) {
            return api
          }

        }).map(api => {


               
               
                <button onClick={(e) => {}}
                    key={api.fields.localite} 
                    latitude={api.geometry.coordinates[1]} 
                    longitude={api.geometry.coordinates[0]}

                >

           </button>  
           
               


          return(
            <>
            
            <div className="card">
            <div class="container">

             <h2>{api.fields.entite}</h2>
              <p>{api.fields.localite}</p>
              <p>{api.fields.longitude}</p>
              <p>{api.fields.latitude}</p>
                  <button className='walk-btn'>
                    <BsGeoAltFill className='icon' />
                  </button>
                    
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
