import data from './data';
import List from './list';

function App() {
  return (
    <div className="App">
      <section className='container'>
      <h2>{data.length} Birthday </h2>
      {data.map((item) => (
        <article key={item.id}>
          <List link={item.image} name={item.name} age={item.age} /> 
        </article>
      ))}
      </section>
    </div>
  );
}

export default App;
