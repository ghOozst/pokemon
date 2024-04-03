import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader/loader.component';

const Product = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, setPokemon] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setPokemon({
      loading: true,
      data: null,
      error: false,
    });

    axios
      .get(url)
      .then((res) =>
        setPokemon({ loading: false, data: res.data, error: false })
      )
      .catch((res) => setPokemon({ loading: false, data: null, error: true }));
  }, [url]);

  if (pokemon.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">Pokemon Not Found</div>
      </div>
    );
  }

  if (pokemon.loading) content = <Loader></Loader>;

  if (pokemon.data) {
    console.log(pokemon.data.types);
    const { name, sprites, types } = pokemon.data;
    content = (
      <div className="w-full h-96 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center">
        <img src={sprites.front_default} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {types.map((type) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return <div className="flex justify-center">{content}</div>;
};

export default Product;
