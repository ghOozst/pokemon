import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../components/loader/loader.component';
import ProductCard from '../components/ProductCard.component';

const Home = () => {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });

    axios
      .get(url)
      .then((res) =>
        setProducts({ loading: false, data: res.data, error: false })
      )
      .catch((res) => setProducts({ loading: false, data: null, error: true }));
  }, [url]);

  if (products.error)
    content = (
      <div>
        <div className="bg-red-300 p-3">Product Not Found</div>
      </div>
    );

  if (products.loading) content = <Loader></Loader>;

  if (products.data)
    content = products.data.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3"> All Products</h1>
      {content}
    </div>
  );
};

export default Home;
