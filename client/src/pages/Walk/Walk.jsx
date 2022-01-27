import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import Topbar from '../../components/Topbar/Topbar';
import Fetchapi from '../../components/FetchApi/Fetchapi';
import GoogleApiWrapper from '../../GoogleApiWrapper';
function Walk() {
  return (
    <div className="walk-content">
      <Fetchapi/>
    </div>
  );
}

export default Walk;
