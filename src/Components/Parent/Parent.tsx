import React,{Component, MouseEvent} from "react";
import {ParentTemplate} from "./Parent.Template"

interface IParentPropsParameter{

}

interface IParentState{
    ParentData:string|undefined
}

export default class Parent extends Component<IParentPropsParameter,IParentState>{

    

    constructor(props:IParentPropsParameter){
        super(props);
        
        // Set Default state Value
        this.state={
            ParentData:'Data from Parent'
        };
    }

    private OnParentTrigger=(event:MouseEvent):void=>{
        this.setState({
            ParentData:'Trigger by Parent'
        });

        event.preventDefault();
    }

    private ParentCallBackFunc=(data:string | undefined):void=>{

       this.setState({
            ParentData:data
       });
    }

   public render(){
    
        return ParentTemplate({
            Data:this.state.ParentData,
            OnTrigger:this.OnParentTrigger,
            ParentCallBack:this.ParentCallBackFunc
        });
   }
}