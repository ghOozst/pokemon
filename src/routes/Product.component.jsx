import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader/loader.component';

const Product = () => {
  const { id } = useParams();
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });

    axios
      .get(url)
      .then((res) =>
        setProduct({ loading: false, data: res.data, error: false })
      )
      .catch((res) => setProduct({ loading: false, data: null, error: true }));
  }, [url]);

  if (product.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">Product Not Found</div>
      </div>
    );
  }

  if (product.loading) content = <Loader></Loader>;

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div className="container mx-auto">{content}</div>;
};

export default Product;
