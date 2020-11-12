import { useEffect, useState } from 'react';
import Container from '../components/Container';
import FindBar from '../components/FindBar';
import Pokemon from '../components/Pokemon';

const Index = () => {
  const [id, setId] = useState(1);


  return (
    <div>
      <Pokemon pkmID={id} />
      <FindBar onChange={setId} />
    </div>
  )
}

export default Index;