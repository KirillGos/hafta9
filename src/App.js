import { random } from "node-forge";
import { useEffect, useState } from "react";
import { CLOSING } from "ws";

function App() {
  const [paragrafGoster, paragrafIslem] = useState(true);
  const [bilgi, bilgiIslem] = useState('')
  useEffect( () => {
    fetch('https://jsonplaceholder.org/users')
    .then(response => response.json())
    .then(data => {
      paragrafIslem(false)
      bilgiIslem(data.map(item => <li key={item.id}>{item.firstname} {item.lastname}</li>))
    })
  });
  return (
      <>
      {paragrafGoster && <p>Loading</p>}
      {bilgi}
      </>
  );
}


export default App;
