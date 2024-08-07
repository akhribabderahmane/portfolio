import "./App.css";
import { useEffect, useRef } from "react";
import About from "./pages/about";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Guestbook from "./pages/guestbook";
import Learn from "./pages/learn";
import Project from "./pages/projects";
import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";
import useIsLaptop from "./hooks/useIsMobile";
import Sidebar from "./components/sidebar";
import { AnimatePresence } from "framer-motion";
import { useSelector,useDispatch } from "react-redux";
import { setTheme } from "./features/theme/themeSlice";

function App() {
  const isLaptop = useIsLaptop();
 // const selectedRoute = useSelector((state) => state.generale.selectedMenuItem);
   const selectedMenu=useSelector(state=>state.generale.selectedMenuItem)
   const mainScoroller=useRef(null);

   useEffect(() => {
    if (mainScoroller.current) {
      mainScoroller.current.scrollIntoView();
    }
  }, [selectedMenu]);
  const dispatch = useDispatch();

  useEffect(() => {
      const storedTheme = localStorage.getItem('theme') || 'light';
      dispatch(setTheme(storedTheme));
  }, [dispatch]);

  return (
    <main
      className={`  max-w-screen max-w-[90rem] mx-auto overflow-scroll scrollbar-hidden   bg-background-light-100 dark:bg-background-light-950 ${
        isLaptop ? "flex flex-row h-screen" : "flex flex-col h-screen"
      }`}
    >
      {!isLaptop ? <Navbar /> : <Sidebar />}
      <AnimatePresence mode="wait">
        <div  className="flex-1 overflow-x-auto overflow-y-scroll overflow-scroll scrollbar-hidden">
          <div ref={mainScoroller}></div>
        <Routes location={location} key={location.key}>
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
