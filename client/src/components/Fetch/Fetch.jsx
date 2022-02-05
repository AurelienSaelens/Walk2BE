import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Api from '../../Api.json'

function Fetch() {
    
    const [records, setRecords] = useState([]);

    const fetchData = () => {
      fetch("https://www.odwb.be/api/records/1.0/search/?dataset=points-verts-de-ladeps&q=&rows=3000")
        .then(response => {
          return response.json()
        })
        .then(data => {
        //   setCity(data)
        setRecords(data)
          console.log(data.records.fields.gsm)
        })
    }
  
    useEffect(() => {
      fetchData();
    }, [])

    
  
    return (
      <div>
        {records.length > 0 && (
          <ul>
            {records.map(record => (
              <p>{records.fields[1].gsm}</p>
            ))}
          </ul>
        )}
      </div>
    )
  }

export default Fetch
