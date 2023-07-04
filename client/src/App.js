import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./dummy";

<script src="main.js?v=12345"></script>


export default function App() {

  const [dataBackend, setDataBackend] = useState([]);

  useEffect(() => {
    fetch('/testing')
      .then((response) => response.json())
      .then((data) => {
        setDataBackend(data.id)});
  }, []);

  console.log(dataBackend, 'hiiiiiiiiiiiiii')

  return (

    <>
    <h1>hiiiiii</h1>
      {dataBackend}
    </>

  );
}
