import { Suspense, lazy } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const AComponent = lazy(() => import('./component/a'));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Suspense fallback={<div>组件 A 加载中</div>}>
          <AComponent />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
