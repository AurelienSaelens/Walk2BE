import { useState }from 'react';
import './fetchapi.css';
import Api from '../../Api.json';

function Fetchapi() {

  const [search, setSearch] = useState("");

    return (
        <div className="posts">
        <input id="searchInput"
          type="text"
          placeholder="search"
          onChange={e=>{
            setSearch(e.target.value)
          }}
        />
        {Api.filter(post => {
          if (search === "") {
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
              <li>Activité : <b>{post.fields.activite}</b></li>
              <li>Velo : <b>{post.fields.velo}</b></li>
              <li>Balade guidée : <b>{post.fields.balade_guidee}</b></li>
              <li>Orientation : <b>{post.fields.orientation}</b></li>
              <li>Parcours de plus de 10 km : <b>{post.fields.taille}</b></li>

            </div>
          </div>
            </>
          )
        })}
    </div>
    );
}

export default Fetchapi;
