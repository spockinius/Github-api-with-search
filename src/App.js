import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(resData => setItems(resData.items))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Repositories</h1>
      <table class="repos">
        <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
        </thead>
        <tbody>
        {
          items.map((item, index) => 
           <tr key={index}>
             <td>{item.full_name}</td>
             <td><a href={item.url}>{item.url}</a></td>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
  );
}

export default App;

