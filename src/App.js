import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(resData => setItems(resData.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Repositories</h1>
      <table>
        <tbody>
        {
          items.map((item, index) => 
           <tr key={index}>
             <td>{item.id}</td>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
  );
}

export default App;

