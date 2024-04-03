import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, id }) => {
  const { name } = pokemon;

  return (
    <div className=" w-30 border mb-4 rounded-overflow-hidden">
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/pokemons/${id + 1}`}>{name}</Link>
        </h3>
        <Link
          to={`/pokemons/${id + 1}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          Check Pokemon
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
