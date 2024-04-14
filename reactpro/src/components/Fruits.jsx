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
      <li key={fruit.name}>
        {""}
        {fruit.emoji} {fruit.name} ${fruit.price}</li>
    )
      )}
      </ul>
      </div>
   
  );
}