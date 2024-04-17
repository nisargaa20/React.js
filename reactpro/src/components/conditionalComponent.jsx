import welcome from "./welcome";
import Code from "./Code";

export default function ConditionalComponent(){
 
  const display=false;
  return display ? <Welcome /> : <Code />;

  }


   
