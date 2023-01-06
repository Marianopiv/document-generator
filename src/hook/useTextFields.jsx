import { useContext, useState } from 'react'
import { DocumentsContext } from '../provider/DocumentsProvider'

export const useTextFields = () => {
    const [document, setDocument] = useState("")
    const [FieldBorrador, setFieldBorrador] = useState("")
    const [capturedValue, setCapturedValue] = useState({})
    const {documents} = useContext(DocumentsContext)

    const handleBorrador = (event, selected) => {
        if (event.target.checked) {
          setFieldBorrador([...FieldBorrador, selected])
        } else {
          setFieldBorrador(
            FieldBorrador.filter((item) => !selected.span.includes(item.span))
          );
        }
      };

    const handleAddDocument = () => {
        setDocument({...document,FieldBorrador,id:documents.length})
        console.log(document);
    }

    const handleValue = (e) => {
      const {value,name} = e.target;
      setCapturedValue({...capturedValue,[name]:value})
    }


  return {document,handleAddDocument,FieldBorrador,handleBorrador,handleValue,capturedValue,setCapturedValue}
}

export default useTextFields