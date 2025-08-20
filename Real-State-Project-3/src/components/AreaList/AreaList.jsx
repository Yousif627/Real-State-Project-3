import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import "./AreaList.css";  

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
      setErrors("Unauthorized or error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!Areas) return <p>No data yet (login first)</p>;
  return (
    <>
      <h2 className="areas-title">Available Areas</h2>
      <ul>
        {Areas.map((Location) => (
          <li key={Location.Area}>
            <Link to="/property">
              <img src={Location.img} alt={Location.Area} />
              <span>{Location.Area}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="error-message">{errors}</p>
    </>
  );
}

export default AreasList;
