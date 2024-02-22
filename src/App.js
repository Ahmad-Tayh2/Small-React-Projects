import { useEffect, useState } from "react";
import Artical from "./Artical";

function App() {
  const apiURL = 'https://course-api.com/react-tours-project';
  const [data, setData] = useState([]);

  async function fetchData(){

    try{
      const response = await fetch(apiURL);
      const data = await response.json();
      setData(data);
      
    }catch(err){
      console.log(err);
    }
    
  }
  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div className="App">
      <main>
        <section>
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
          <div className="list-artical">
            {data.map((artical) => (
              <Artical info={artical.info} name={artical.name} price={artical.price} image={artical.image} key={artical.id}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
