import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../Api.json";
import { BsGeoAltFill } from "react-icons/bs";
import Map from "../Map/Map";

function Fetch() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    fetch(
      "https://www.odwb.be/api/records/1.0/search/?dataset=points-verts-de-ladeps&q=&rows=3049"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        console.log(data.fields);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <p></p>
    </div>
  );
}

export default Fetch;
