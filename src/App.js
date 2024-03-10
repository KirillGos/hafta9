import { useEffect, useState } from "react";

function App() {
  const [yukleniyor, yukleniyorGuncelle] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.org/users');
      const jsonData = await response.json();
      setData(jsonData);
      yukleniyorGuncelle(false);
    }
    setTimeout(fetchData, 2000)
  }, []);
  return (
      <>
        {yukleniyor && <p>Yukleniyor... </p>}
        {data.map(kisi => <p key={kisi.id}>{kisi.firstname}</p>)}
      </>
  );
}
export default App;

