import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DocumentCreator from "../components/documentCreator/DocumentCreator";
import DocumentsCreated from "../components/documentsCreated/DocumentsCreated";
import Home from "../components/home/Home";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/document-creator" element={<DocumentCreator/>}/>
        <Route path="/document-created" element={<DocumentsCreated/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
