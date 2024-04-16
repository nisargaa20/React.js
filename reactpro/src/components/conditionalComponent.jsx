import welcome from "./welcome";
import Code from "./Code";

export default function ConditionalComponent(){
  let messageOne ;
  let messagetwo;
  let message;
  const display=false;
  if(display){
    message=<h1>This is message 1</h1>
  }else{
    return <h1>This is message 2</h1>;
  }
  return message;
  }


   
