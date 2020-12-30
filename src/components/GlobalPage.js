import React, { useEffect, useState } from "react";

const GlobalPage = ({ history }) => {
  const [global, setGlobal] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const apiUrl = "https://covid19.mathdro.id/api";
      const data = await fetch(apiUrl).then((res) => res.json());
      setGlobal([data]);
      // setCountries(data.Countries);
    };
    fetchSummary();
  }, []);

  console.log(global);

  return (
    <div className="container">
      <h1>Casos de COVID</h1>

      {global.map((data, id) => (
        <div className="grid-third" key={id}>
          <div className="card">
            <h3>Casos Confirmados</h3>
            <p>{(data.confirmed.value).toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Total Recuperados</h3>
            <p>{(data.recovered.value).toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Total de Bajas</h3>
            <p>{(data.deaths.value).toLocaleString()}</p>
          </div>
        </div>
      ))}

      <div>
        <h4>Casos por pais</h4>
        {/* <table style={{ overflow: "auto" }}>
          <tr>
            <th>Pais</th>
            <th>Codigo del pais</th>
            <th>Fecha</th>
          </tr>
          {countries.map((country) => (
            <tr key={country.Country}>
              <td>{country.Country}</td>
              <td>{country.CountryCode}</td>
              <td>{country.Date.substring(0, 10)}</td>
              <td>
                <button onClick={() => history.push(`/${country.Slug}`)}>
                  Detalles
                </button>
              </td>
            </tr>
          ))}
        </table> */}
      </div>
    </div>
  );
};

export default GlobalPage;
