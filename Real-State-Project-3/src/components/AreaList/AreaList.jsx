import { useState, useEffect } from "react";
import axios from "axios";

function AreasList() {
  const [Areas, setAreas] = useState(null);
  const [errors, setErrors] = useState("");

  async function fetchData() {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await axios.get("http://localhost:3000/area", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAreas(res.data);
    } catch (err) {
      setErrors(err, "Unauthorized or error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!Areas) return <p>No data yet (login first)</p>;
  return (
    <>
      <ul>
        {Areas.map((Location) => {
          return(
          <>
          <img src={Location.img}/>
          <li>{Location.Area}</li>
          </> 
          )
        })}
      </ul>
      <p style={{ color: "darkred" }}>{errors}</p>
    </>
  );
}

export default AreasList;
