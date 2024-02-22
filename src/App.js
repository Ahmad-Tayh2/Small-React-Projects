import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './Data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map((item) => {
          return (
          <Card 
            Key={item.id}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
        />
        )
        })}
      </section>
    </div>
  );
}

export default App;
