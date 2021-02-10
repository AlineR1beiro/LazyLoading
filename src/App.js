import logo from './logoloja.png';
import './App.css';

import {lazy, Suspense} from 'react';

const Slogan = lazy(() => import('./slogan'));
const Rodape = lazy(() => import('./rodape'));
const Menu =lazy(() => import('./menu'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Suspense fallback={<p>Carregando...</p> }>
          <Menu />
        </Suspense>
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <Suspense fallback={<p>Carregando...</p> }>
          <Slogan />
        </Suspense>

        <Suspense fallback={<p>Carregando...</p> }>
          <Rodape />
        </Suspense>
        
        
      </header>
    </div>
  );
}

export default App;
