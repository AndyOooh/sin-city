import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

import { Header } from './components/header/Header';
import { Casino } from './pages/casino/Casino';
import { Dex } from './pages/dex/Dex';
import { Home } from './pages/Home';

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className='app '>
      <Header />
      <main className='main py-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dex' element={<Dex />} />
          <Route path='/casino/*' element={<Casino />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
