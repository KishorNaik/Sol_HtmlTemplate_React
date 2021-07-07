import React,{Component,MouseEvent} from "react";

interface IChildTemplateParameter{
    ChildData?:string,
    OnTrigger?:(event:MouseEvent)=>void
}

export const ChildTemplate=(parameters:IChildTemplateParameter):JSX.Element=>{
    return (
       <React.Fragment>
           <div style={{backgroundColor:'orange'}}>
                <h4 style={{color:'whitesmoke'}}>
                    Child : {parameters.ChildData}
                </h4>
                <button className='btn btn-secondary' onClick={parameters.OnTrigger}>Child Trigger</button>
           </div>
          
       </React.Fragment>
    );
}