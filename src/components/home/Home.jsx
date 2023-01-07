import React from "react";
import { useNavigate } from "react-router-dom";
import book from "../../assets/book.png";
import Button from "../../UI/Button";
import H1 from "../../UI/H1"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center rounded-md p-2">
      <H1 text={"Document Creator"} />
      <img className="px-10" src={book} alt="" />
      <div className="flex gap-4 flex-wrap justify-center">
        <Button
          action={() => navigate("/document-created")}
          text={"See generated documents"}
        />
        <Button
          action={() => navigate("/document-creator")}
          text={"Generate document now"}
        />
      </div>
    </div>
  );
};

export default Home;
