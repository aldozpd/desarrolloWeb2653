import React, {useEffect , useState} from 'react'
import axios from "axios";

function DbConnection() {
  
  const [backendData, setBackendData] = useState([{}]);
  
  useEffect(async () => {
    
    const res = await axios.post("/db-connection", {
      query : "select * from usuario"
    });

    setBackendData(res.data);

  }, []);

  console.log(backendData);

  return(
    <div>
        <h2>Hola {backendData[0].nombre} {backendData[0].apellido_p}</h2>
    </div>
  )
}

export default DbConnection;