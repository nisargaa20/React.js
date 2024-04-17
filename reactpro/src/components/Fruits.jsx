import Fruit from "./Fruit";

export default function Fruits(){
  //const fruits=["Apple","Mango"];

  const fruits=[
  { name:"Apple",price:10,emoji:"🍎" },
  { name:"Mango",price:7,emoji:"🥭"},
  { name:"Banana",price:6,emoji:"🍌" },
  { name:"Orange",price:4,emoji:"🍊" },
  
  ];
  return (
  <div>
    <ul>
      {fruits.map((fruit)=>(
     <Fruit 
     key={fruit.name}
     name={fruit.name} 
     price={fruit.price} 
     emoji={fruit.emoji}/>
    )
      )}
      </ul>
      </div>
   
  );
}