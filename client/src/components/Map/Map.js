import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import './map.css'
import Api from '../../Api.json';
import { BsGeoAltFill } from 'react-icons/bs';

function Map() {
const [viewport, setViewport] = useState({
    latitude: 50.8386528,
    longitude: 4.4677877,
    width: "66vw",
    height: '105vh',
    zoom: 11
});




const [selectedWalk, setSelectedWalk] = useState(null);






  return (
      <div className='map'>
        <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/aureliensaelens/ckz6xl50x002214njfll9zyix"
            onViewportChange ={viewport => {
                setViewport(viewport);
            }}
        >
           {Api.map((walk) => (

               
               
                <Marker onClick={(e) => {}}
                    key={walk.fields.localite} 
                    latitude={walk.geometry.coordinates[1]} 
                    longitude={walk.geometry.coordinates[0]}

                >
                    <button className='walk-btn' onClick={(e) => {
                        e.preventDefault();
                        setSelectedWalk(walk);
                    }}>
                    <BsGeoAltFill className='icon' />
                    </button>
           </Marker>  
           
                ))} 
                
                
                
  {selectedWalk ? (
    <Popup className='Popup' 
        latitude={selectedWalk.geometry.coordinates[1]} 
        longitude={selectedWalk.geometry.coordinates[0]}
        onClose={() => {
            setSelectedWalk(null);
        }}
    >
        <div className='info'>
               <h2>{selectedWalk.fields.localite}</h2>
               <p>{selectedWalk.fields.entite}</p>
               <h4>Plus de renseignements :</h4>
               <li>Le lieu de rendez-vous se trouve : <b>{selectedWalk.fields.lieu_de_rendez_vous}</b></li>
               <li>Activité : <b>{selectedWalk.fields.activite}</b></li>
               <li>Velo : <b>{selectedWalk.fields.velo}</b></li>
               <li>Balade guidée : <b>{selectedWalk.fields.balade_guidee}</b></li>
               <li>Orientation : <b>{selectedWalk.fields.orientation}</b></li>
               <li>Parcours de plus de 10 km : <b>{selectedWalk.fields.taille}</b></li>
        </div>
    </Popup>
  ) : null}
        </ReactMapGL>
      </div>);
}

export default Map;

