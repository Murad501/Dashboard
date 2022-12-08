import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout></Layout>
  }
])

function App() {
  return (
    <div className='max-w-screen-xl mx-auto font-sans'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
