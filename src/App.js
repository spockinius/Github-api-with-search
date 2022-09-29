import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(resData => setItems(resData.items))
    .catch(err => console.log(err))
  }, [])

  const fetchData = () => {
    const url = ('https://api.github.com/search/repositories?q=' + searchInput)
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(resData => setItems(resData.items))
    .catch(err => console.log(err))
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Repositories</h1>
      <form>
      <input type="search" placeholder="Search" onChange={handleChange} value={searchInput} />
      <button type="button" onClick={fetchData}>Search</button>
      </form>
      <table className="repos">
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

