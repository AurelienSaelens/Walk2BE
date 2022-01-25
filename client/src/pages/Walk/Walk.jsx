import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import Topbar from '../../components/Topbar/Topbar';
import Fetchapi from '../../components/FetchApi/Fetchapi';

function Walk() {
  return (
    <div className="walk-content">
        <Topbar />
        <Parallax />
        <Fetchapi />
    </div>
);
  }

export default Walk;
