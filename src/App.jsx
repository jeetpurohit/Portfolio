import { lazy, Suspense, useContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Splash from "./components/splash/splash";
import TopButton from './components/top-button/top-button';
import ThemeContext from "./context/ThemeContext";
import { settings } from "./utils/utils";

// Lazy load pages to optimize performance
const Contact = lazy(() => import('./pages/contact/contact'));
const Education = lazy(() => import('./pages/education/education'));
const Error404 = lazy(() => import('./pages/error404/error404'));
const Experience = lazy(() => import('./pages/experience/experience'));
const Home = lazy(() => import('./pages/home/home'));
const Projects = lazy(() => import('./pages/projects/projects'));

function App() {
  const { theme } = useContext(ThemeContext); 
  const location = useLocation();

  useEffect(() => {
    // Dynamically apply theme using CSS variables
    document.documentElement.style.setProperty('--body-bg', theme.body);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--loader-color', theme.text);
  }, [theme]);

  const isSplashOrHome = location.pathname === "/" || location.pathname === "/splash";

  return (
    <>
      {!isSplashOrHome && <Header />}
      <Suspense fallback={<span class="data-loader"></span>}>
        <Routes>
          <Route path="/" element={settings.isSplash ? <Splash /> : <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          {settings.isSplash && (<Route path="/splash" element={<Splash />} />)}
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
      {!isSplashOrHome && <Footer />}
      {!isSplashOrHome && <TopButton />}
    </>
  )
}

export default App;
