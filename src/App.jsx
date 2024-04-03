import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/Home.component';
import AboutPage from './routes/About.component';
import Layout from './routes/layout.component';
import Product from './routes/Product.component';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products/:id" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
