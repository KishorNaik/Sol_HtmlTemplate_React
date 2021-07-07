import react,{Component,MouseEvent} from "react";
import {ChildTemplate} from "./Child.Template";

interface IChildPropsParameter{
    DataParentToChild?:string;
    ParentCallback?:(data?:string | undefined)=>void;
}

interface IChildState{
    ChildData?:string | undefined;
}

export default class Child extends Component<IChildPropsParameter,IChildState>{

    constructor(props:IChildPropsParameter){
        super(props);

        this.state={
            ChildData:this.props.DataParentToChild
        };
    }

    private StateHasChanged=(stateUpdate:()=>void)=>{
       this.setState({
           ChildData:'Data From Child'
       },()=> stateUpdate());
    }

    private OnChildTrigger=(event:MouseEvent):void=>{

        this.StateHasChanged(()=>{

            // Send Data from Child to Parent
            if(this.props.ParentCallback){

                this.props.ParentCallback(this.state.ChildData);
            }

        });
        event.preventDefault();
    }

    public render(){
        return (
            ChildTemplate({
                ChildData:this.state.ChildData,
                OnTrigger:this.OnChildTrigger
            })
        )
    }
}