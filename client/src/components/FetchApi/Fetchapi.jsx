import react from 'react';
import './fetchapi.css';
import Api from '../../Api.json';
import Iframe from 'react-iframe'

function Fetchapi() {
    return (
        <div className="posts">
        {Api.map(post => {
          return(
            <>
            <h1>{ post.datasetid }</h1>
            <h2>{ post.fields.entite }</h2>
            <p>{post.fields.longitude}</p>
            <p>{post.fields.latitude}</p>
            <Iframe url="https://www.google.be/maps/@50.154465,4.624975,8z?hl=fr" width="200px" height="200px" id="myId" className="myClassname" display="initial"/>
            </>
          )
        })}
    </div>
    );
}

export default Fetchapi;
