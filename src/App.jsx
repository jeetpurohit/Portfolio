import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Splash from "./components/splash/splash";
import ThemeSettingButton from "./components/theme-setting-button/theme-setting-button";
import TopButton from './components/top-button/top-button';
import ThemeContext from "./context/ThemeContext";
import Contact from "./pages/contact/contact";
import Education from "./pages/education/education";
import Error404 from "./pages/error404/error404";
import Experience from "./pages/experience/experience";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import { settings } from "./utils/utils";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Dynamically apply theme using CSS variables
    document.documentElement.style.setProperty('--body-bg', theme.body);
    document.documentElement.style.setProperty('--text-color', theme.text);
  }, [theme]);

  return (
    <BrowserRouter basename="/">
      {true && <Header />}
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
      {true && <Footer />}
      {true && <TopButton />}
      <ThemeSettingButton />
    </BrowserRouter>
  )
}

export default App;
