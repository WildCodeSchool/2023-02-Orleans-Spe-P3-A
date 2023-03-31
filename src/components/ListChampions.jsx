import { useState, useEffect } from 'react';
import CardChampions from './CardChampions';

function List() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    // Récupération de la liste de tous les champions depuis l'API Data Dragon
    fetch('https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json')
      .then(response => response.json())
      .then(data => {
        const championsList = Object.values(data.data).map(champion => ({
          id: champion.id,
          name: champion.name,
          image: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`,
          tags: champion.tags,
        }));
        setChampions(championsList);
      })
      .catch(error => {
        console.error('Error fetching champion data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {champions.map(champion => (
        <CardChampions key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

export default List;
