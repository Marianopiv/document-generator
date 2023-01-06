import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const DocumentsContext = createContext();
// eslint-disable-next-line react/prop-types
const DocumentsProvider = ({ children }) => {
    const [documents, setDocuments] = useState([]);

    const handleSaveDocuments = (document) => {
      setDocuments([...documents, document]);
      Swal.fire({
        icon: 'success',
        title: 'Form added',
      })
    };


  return (
    <DocumentsContext.Provider value={{handleSaveDocuments,documents,setDocuments}}>
      {children}
    </DocumentsContext.Provider>);
};

export default DocumentsProvider;
