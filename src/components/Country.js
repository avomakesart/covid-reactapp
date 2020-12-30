import React, { useEffect, useState } from "react";
import moment from "moment"
import { useParams } from "react-router-dom";

const Country = () => {
    const [status, setStatus] = useState([])
    const { country } = useParams();

    useEffect(() => {
     const uri = `https://api.covid19api.com/live/country/${country}`;
     const fetchData = async () => {
        const data = await fetch(uri).then(res => res.json());
        console.log(data);
        setStatus(data)
     }
     fetchData()
    }, [country])
    

  return (
      <>
        {status.map(stat => <div key={stat.id}>
            {moment(stat.Date).format("DD/MMM/YYYY")}
        </div>
            )}
      </>
  )
};

export default Country;
