import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Fetchapi from '../../components/FetchApi/Fetchapi';
import Map from '../../components/Map/Map';

function Walk() {
  return (
    <div className="walk-content">
    <Topbar />
    <Fetchapi />
    </div>
  );
}

export default Walk;
