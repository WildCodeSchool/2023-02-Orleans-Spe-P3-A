import { useState, useEffect } from 'react';

function List() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    // Récupération de la liste de tous les champions depuis l'API Data Dragon
    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json')
      .then(response => response.json())
      .then(data => {
        // Stockage de la liste des noms de champions dont le nom commence par "A"
        const filteredChampions = Object.values(data.data)
          .filter(champion => champion.name.startsWith('A'))
          .map(champion => champion.name);
        setChampions(filteredChampions);
      })
      .catch(error => {
        console.error('Error fetching champion data:', error);
      });
  }, []);

  return (
    <main>
      {champions.map(championName => (
        <div key={championName} className='champion-card'>
          <h2>{championName}</h2>
          <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`} alt={championName} />
        </div>
      ))}
    </main>
  );
}

export default List;
