import React from 'react';
import axios from "axios";
import Topbar from '../../components/Topbar/Topbar';
import profile from "./profile.css"
import Api from '../../Api.json'
import bg from './bg.jpeg'
import { FcLike } from "react-icons/fc";


export default function Profile() {

    const users = localStorage.getItem('auth_name');


  return (
      <>
      <body className='profile-ctn'>
      <Topbar />
      <div className='block-left'>
        <h2>This is a list with your favorites walks : </h2>
        <div className="card">
            <div class="container">
            <h2>Bruxelles</h2> 
                <p>Saint pierre</p>
                <FcLike className="iconLike" />
            </div>
        </div>    
        </div>  
        <div className='block-right'>
        <h2>Welcome to your profile page : {users}</h2>
        </div>
      </body>
      </>
      );
}  
