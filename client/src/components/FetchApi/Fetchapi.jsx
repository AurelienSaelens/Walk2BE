import { useState }from 'react';
import './fetchapi.css';
import Api from '../../Api.json';

function Fetchapi() {

  const [search, setSearch] = useState("");

    return (
        <div className="posts">
        <input 
          type="text"
          placeholder="Search location"
          onChange={e=>{
            setSearch(e.target.value)
          }}
        />
        {Api.filter(post => {
          if (search == "") {
            return post
          }
          else if (post.fields.localite.toLowerCase().includes(search.toLowerCase())) {
            return post
          }
        }).map(post => {
          return(
            <>
            <div class="card">
            <div class="container">
              <h2>{post.fields.entite}</h2>
              <p>{post.fields.localite}</p>
              <p> Le lieu de rendez-vous se trouve : <b>{post.fields.lieu_de_rendez_vous}</b></p>
              <h4>Plus de renseignements :</h4>
              <p>Activité : <b>{post.fields.activite}</b></p>
              <p>Velo : <b>{post.fields.velo}</b></p>
              <p>Balade guidée : <b>{post.fields.balade_guidee}</b></p>
              <p>Orientation : <b>{post.fields.orientation}</b></p>

            </div>
          </div>
            </>
          )
        })}
    </div>
    );
}

export default Fetchapi;
