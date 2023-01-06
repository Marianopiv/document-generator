import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DocumentsContext } from "../../provider/DocumentsProvider";
import emptyDoc from "../../assets/emptyDoc.png"
import CreatedDetail from "../createdDetail/CreatedDetail";

const DocumentsCreated = () => {
  const navigate = useNavigate();

  const {documents} = useContext(DocumentsContext)
  

  return (
    <div className="flex gap-10 flex-col items-center w-screen mt-4">
      <FaHome
        onClick={() => navigate(-1)}
        className="bg-green-600 w-10 h-10 rounded-lg p-2 hover:cursor-pointer text-white"
      />
     <h1 className="font-bold font-sans tracking-widest text-green-600">
        Documents Generated
      </h1>
      
      <div className="flex mt-4 items-center ">{documents.length>0?<CreatedDetail />:<div className="flex flex-col items-center"><h3 className="pb-10 font-bold text-green-600 tracking-widest">No documents created yet</h3><img className="w-48" src={emptyDoc}/></div>}</div>
    </div>
  );
};

export default DocumentsCreated;
