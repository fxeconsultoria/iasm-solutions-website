import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Educational from './pages/Educational';
import Cases from './pages/Cases';
import Blog from './pages/Blog';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'servicos', element: <Services /> },
      { path: 'educacional', element: <Educational /> },
      { path: 'cases', element: <Cases /> },
      { path: 'blog', element: <Blog /> },
      { path: 'noticias', element: <News /> },
      { path: 'contato', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
