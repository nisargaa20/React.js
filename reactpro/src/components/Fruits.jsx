export default function Fruits(){
  const fruits=["Apple","Mango"];
  return (
  <div>
    <ul>
      {fruits.map(fruit=><li key={fruit}>{fruit}</li>)}
      </ul>
      </div>
   
  );
}