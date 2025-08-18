import { useState, useEffect } from "react";
import axios from "axios";

function AreasList() {
  const [Areas, setAreas] = useState(null);
  const [errors, setErrors] = useState("");

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:3000/area");
      setAreas(res.data);
    } catch (err) {
      setErrors(err, "Unauthorized or error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {Areas.map((Area) => {
          return <li>{Area.price}</li>
        })}
      </ul>
      <p style={{ color: "darkred" }}>{errors}</p>
    </>
  );
}

export default AreasList;
