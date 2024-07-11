import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard"
import Guestbook from "./pages/guestbook"
import Learn from './pages/learn'
import Project from './pages/projects'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import useIsLaptop from "./hooks/useIsMobile";
import Sidebar from "./components/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

function App() {
  const isLaptop=useIsLaptop();
  const selectedRoute=useSelector(state=>state.generale.selectedMenuItem)
  return (
    <main className={` max-w-screen   bg-background-light-100 dark:bg-background-light-950 ${isLaptop?"flex flex-row h-screen":""}`}>
      {!isLaptop ? <Navbar /> : <Sidebar />}
      <AnimatePresence mode="wait">
      <div 
             className=" flex-1 overflow-x-auto overflow-y-scroll">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
      </AnimatePresence>
    </main>
  );
}

export default App;
