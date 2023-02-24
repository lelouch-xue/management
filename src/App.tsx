import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home!</div>
  },
  {
    path: '/about',
    element: <div>About!</div>
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
