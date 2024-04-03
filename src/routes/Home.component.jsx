import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../components/loader/loader.component';
import PokemonCard from '../components/PokemonCard.component';

const Home = () => {
  const url = `https://pokeapi.co/api/v2/pokemon`;
  const [pokemons, setPokemons] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setPokemons({
      loading: true,
      data: null,
      error: false,
    });

    axios
      .get(url)
      .then((res) =>
        setPokemons({ loading: false, data: res.data.results, error: false })
      )
      .catch((res) => setPokemons({ loading: false, data: null, error: true }));
  }, [url]);

  if (pokemons.error)
    content = (
      <div>
        <div className="bg-red-300 p-3">Product Not Found</div>
      </div>
    );

  if (pokemons.loading) content = <Loader></Loader>;

  if (pokemons.data)
    content = pokemons.data.map((pokemon, id) => (
      <PokemonCard key={id} pokemon={pokemon} id={id} />
    ));
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3"> All Products</h1>
      {content}
    </div>
  );
};

export default Home;
