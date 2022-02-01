import { useState }from 'react';
import './fetchapi.css';
import Api from '../../Api.json';
import Map from '../Map/Map';

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
        <Map />
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
            </div>
          </div>
            </>
          )
        })}
    </div>
    );
}

export default Fetchapi;
