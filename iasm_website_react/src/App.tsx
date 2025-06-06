import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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

// Auth imports
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import AuthCallbackPage from './pages/auth/AuthCallbackPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DashboardPage from './pages/DashboardPage';

// PGR imports
import PgrDashboardPage from './pages/pgr/PgrDashboardPage';
import NewAssessmentPage from './pages/pgr/NewAssessmentPage';
import AssessmentDetailPage from './pages/pgr/AssessmentDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // RootLayout likely contains Navbar and general page structure
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'servicos', element: <Services /> },
      { path: 'educacional', element: <Educational /> },
      { path: 'cases', element: <Cases /> },
      { path: 'blog', element: <Blog /> },
      { path: 'noticias', element: <News /> },
      { path: 'contato', element: <Contact /> },

      // Auth pages - typically these might not use the full RootLayout if it has sidebars/menus for logged-in users
      // Or, RootLayout can be smart enough to render differently based on route/auth state
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'auth/callback', element: <AuthCallbackPage /> },

      // Protected Routes
      {
        element: <ProtectedRoute />, // This will protect all nested children
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          // PGR Module Routes
          { path: 'pgr', element: <PgrDashboardPage /> },
          { path: 'pgr/new', element: <NewAssessmentPage /> },
          { path: 'pgr/:assessmentId', element: <AssessmentDetailPage /> },
          // Add other protected routes here, e.g., /profile, /settings
        ],
      },

      { path: '*', element: <NotFound /> }, // Catch-all for 404
    ],
  },
  // You can define routes outside RootLayout if they need a completely different structure
  // For example, if login/signup pages should not have the main navbar/footer:
  // { path: '/login', element: <LoginPage /> },
  // { path: '/signup', element: <SignUpPage /> },
  // { path: '/auth/callback', element: <AuthCallbackPage /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
