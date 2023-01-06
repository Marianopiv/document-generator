import React, { useContext } from 'react'
import useDownload from '../../hook/useDownload'
import useTextFields from '../../hook/useTextFields'
import { DocumentsContext } from '../../provider/DocumentsProvider'

const CreatedDetail = () => {
    const {documents,setDocuments} = useContext(DocumentsContext)
    const {downloadPdf} = useDownload()
    const {handleValue,capturedValue,setCapturedValue} = useTextFields()
    

    const executeAndClean = (capturedValue,Document) => {
      downloadPdf(capturedValue,Document)
      setCapturedValue({})
    }

    const filterDoc = (selected) => {
      setDocuments(documents.filter((item)=>item!==selected))
    }
  return (
    <div className='flex gap-4 items-center '>{documents.map((item,index)=><div key={index} className="flex flex-col border-2 p-5 gap-2 h-40 rounded-md"><div className="flex justify-center"><button className='bg-red-400 rounded-full text-center w-8 px-1 py-0.5 text-white' onClick={()=>filterDoc(item)}>X</button></div>  {item.map(({span,type})=>(span==="Parrafo"?(<textarea onChange={handleValue} name={span} key={span} placeholder={span}></textarea>):(<input onChange={handleValue} key={span} type={type} placeholder={span} name={span} />)))}<button onClick={()=>executeAndClean(capturedValue,"document")} className='bg-green-600 uppercase font-bold'>Download PDF</button></div>)}</div>
  )
}

export default CreatedDetail