import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import profile from "./profile.css"

function Profile() {
  return (
      <>
      <body className='profile-ctn'>
      <Topbar />
      <div className='list'>
        <h2>This is a list with your favorites walks : </h2>
        </div>  
      </body>
      </>
      );
}  

export default Profile;
