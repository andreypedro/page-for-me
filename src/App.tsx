import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Layout = lazy(() => import('./components/Layout'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const LinkEditor = lazy(() => import('./pages/LinkEditor'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Preview = lazy(() => import('./pages/Preview'));
const PublicPage = lazy(() => import('./pages/PublicPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader text="Carregando página..." />}> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/u/:username" element={<PublicPage />} />
          <Route path="/app" element={<Layout />}> 
            <Route index element={<Dashboard />} />
            <Route path="links" element={<LinkEditor />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="preview" element={<Preview />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App