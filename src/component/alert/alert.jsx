import React from 'react'
import { BsBugFill, BsCheckCircleFill, BsEyeFill } from 'react-icons/bs';
import { IoMdAlert } from 'react-icons/io';
import "./alert.css"

const Alert = ({msgContent,msgType}) => {
    const content=msgContent;
    const type=msgType;

  return (
    <>
    {
      content?(<div className="alert-container" style={type==="scucess"?{color:"green"}:type==="alert"?{color:"orange"}:type==="error"?{color:"red"}:type==="normal"?{color:"navy"}:""}>
      <div className="alert-box" >
          <div className="alert-icn">
            {
              type==="scucess"?<BsCheckCircleFill/>:type==="alert"?<IoMdAlert/>:type==="error"?<BsBugFill/>:type==="normal"?<BsEyeFill/>:""
            }
          </div>
          <div className="alert-message">{content}</div>
      </div>
      
</div>):""
    }
    
    </>
  )
}

export default Alert