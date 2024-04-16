import welcome from "./welcome";
import Code from "./Code";

export default function conditionalComponent(){

    const display = true;
   if(display){
    return <welcome />;
   }else{
    return <Code />;


   }
    
}