import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { checkboxes } from "../../config/config";
import useTextFields from "../../hook/useTextFields";
import { DocumentsContext } from "../../provider/DocumentsProvider";

const DocumentCreator = () => {
  const navigate = useNavigate();
  const { handleBorrador,FieldBorrador} = useTextFields();
  const {handleSaveDocuments} = useContext(DocumentsContext)
  return (
    <>
      <div className="flex flex-col items-between gap-20 w-screen p-3 ">
        <div className="flex flex-col items-center justify-center gap-4">
          {" "}
          <FaHome
            onClick={() => navigate(-1)}
            className="bg-green-600 w-10 h-10 rounded-lg p-2 hover:cursor-pointer text-white"
          />
          <h1 className="text-green-600 uppercase font-bold tracking-wider">
            Generar documento
          </h1>{" "}
        </div>
        <div className="flex justify-between gap-4">
          <div className=" w-1/3 ">
            <h3 className="font-bold">
              Seleccione los campos que agregará al documento
            </h3>
            <div className="flex flex-col">
              {checkboxes.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.span}</span>
                    <input
                      onChange={(e)=>handleBorrador(e,item)}
                      className=""
                      
                      type="checkbox"
                      placeholder={item.span}
                    />
                  </div>

              ))}
            </div>
          </div>
          <div className="border-2 rounded-md w-1/3">{FieldBorrador.length>0&&FieldBorrador.map(({span})=><p key={span}>{span}</p>)}</div>
        </div>
        <div className=""><button className="uppercase bg-green-600 font-bold" onClick={()=>handleSaveDocuments(FieldBorrador)}>Save document</button></div>
      </div>
    </>
  );
};

export default DocumentCreator;
