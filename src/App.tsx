import React from 'react';
import AppNavigation from './components/AppNavigation';
import useRoutes from './routes';

function App() {
  const routes = useRoutes()
  return (
    <div className="app">
      <AppNavigation/>
      {routes}
    </div>
  );
}

export default App;
