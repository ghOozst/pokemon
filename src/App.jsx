import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/Home.component';
import AboutPage from './routes/About.component';
import Layout from './routes/layout.component';
import Pokemon from './routes/Pokemon.component';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pokemons/:id" element={<Pokemon />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
