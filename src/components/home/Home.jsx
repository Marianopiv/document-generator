import React from "react";
import { useNavigate } from "react-router-dom";
import book from "../../assets/book.png"

const Home = () => {

    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center rounded-md p-2">
      <h1 className="font-bold font-sans tracking-widest text-green-600">
        Document Creator
      </h1>
      <img src={book} alt="" />
      <div className="flex gap-4 flex-wrap justify-center"><button className="bg-green-600 font-bold uppercase" onClick={()=>navigate("/document-created")}>See generated documents</button><button className="bg-green-600 font-bold uppercase" onClick={()=>navigate("/document-creator")}>Generate document now</button></div>
    </div>
  );
};

export default Home;
