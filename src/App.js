import React, {useState}  from  'react';
import './App.css';
import Data from './Data';
import List from './List';
import './index.css';


function App() {
  const [people, setPeople] = useState(Data);

  return(
    <main>
      <section className="container">
        <h3 className="title"><bold>Developed By I. Mesa</bold></h3>
        
      </section>
      <section className="container">
        <h2 className="title">{people.length} birthdays today</h2>
        <List people={people} />
        
        <button onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App;
