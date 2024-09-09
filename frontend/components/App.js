import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  
  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    const fetchData = async () => {
    try {
      const [peopleResponse, planetsResponse] = await Promise.all([
        fetch('http://localhost:9009/api/people'),
        fetch('http://localhost:9009/api/planets'),
      ]);

      const peopleData = await peopleResponse.json();
      const planetsData = await planetsResponse.json();

  const peopleAndPlanets = peopleData.map(character => {
    const homeworld = planetsData.find(planet => planet.id === character.homeworld);
    return {
      ...character,
      homeworld: homeworld ? homeworld.name : 'Unknown',
    }
  });

  setCharacters(peopleAndPlanets);
} catch (error) {
  console.log('Error fetching data', error);
}
};

fetchData();
}, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <strong>{character.name}</strong> - Homeworld: {character.homeworld}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
