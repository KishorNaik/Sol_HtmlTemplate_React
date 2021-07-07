import {Component, MouseEvent} from "react";
import Child from "../Child/Child";

interface IParentTemplateParameter{
    Data?:string|undefined,
    OnTrigger?:(event:MouseEvent)=>void,
    ParentCallBack?:(data:string|undefined)=>void
}

export const ParentTemplate=(parameters:IParentTemplateParameter):JSX.Element=>{
    return (
        <div className="bg-primary">
            <h1 style={{color:'white'}}>
                Parent: {parameters.Data}
            </h1>

            <Child DataParentToChild={parameters.Data} ParentCallback={parameters.ParentCallBack}  key={parameters.Data}></Child>

            <button className='btn btn-dark' onClick={parameters.OnTrigger}>Parent Trigger</button>
        </div>
    )
}