export default function Spread ( { name, age, txt} :  {name : string, age : number , txt : string} ) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{txt}</h1>
    </>
  );
}