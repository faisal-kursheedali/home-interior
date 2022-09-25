import React from 'react'
import "./form.css";


const FormComp = ({input,head,sub,button}) => {
  return (
    <>
    <div className="form-component">
        <div className="form-container">
            <div className="form-head-txt">
                {head}
            </div>
                <div className="form-sub-text">
                    {sub}
                </div>
            <ul className="form-input-list">
                {
                    input.map((i,index)=>{
                        return (
                            <li className="foem-input-list-item" key={index}>
                                <div className="form-input-head-txt">
                                    {i.headTxt}
                                </div>
                                <input type="text" className="form-txt-input" placeholder={i.placeholder}  />
                                {
                                    i.checkbox?(
                                    <>
                                    <div className="form-input-chekbox-container">

                                    <input type="checkbox" className='form-checkbox-input' onChange={i.checkboxAction} /><span className='form-checkbox-input-txt'>{i.checkboxTxt}</span>
                                    </div>
                                    </>
                                    ):""
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="form-button-list">
                {
                    button.map((i,index)=>{
                        return(
                            <>
                            <li className="form-button-list-item">
                                <button className={i.btnType==="primary"?"form-btn-primary":i.btnType==="secondary"?"form-btn-secondary":i.btnType==="default"?"form-btn-default":""} onClick={i.action}>{i.btnTxt}</button>
                            </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default FormComp