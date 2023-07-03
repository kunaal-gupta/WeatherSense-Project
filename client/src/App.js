import React, { useState, useEffect } from "react";
<script src="main.js?v=12345"></script>

function App() {

  const [dataBackend, setDataBackend] = useState([]);

  useEffect(() => {
    fetch('/client')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataBackend(data.users)});
  }, []);

  return (
    <>
      {dataBackend.map((i, data) => 
      <p key = {i}>{data} </p> )}
    </>
  );
}

export default App;
