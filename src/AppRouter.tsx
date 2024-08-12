import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import ContactPage from './pages/Contact/ContactPage';
import CoursesPage from './pages/Courses/CoursesPage';
import { Footer } from './assets/components/Footer';
import { BiLoaderCircle } from 'react-icons/bi';
import AboutPage from './pages/About/AboutPage';
import Services from './pages/services/Services';
import Alert from './assets/components/Alert';


const HomePage = lazy(() => import("./pages/home/page"))


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Alert />
                <ToTop />
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="/services" element={<Services />}/>
                        <Route path="/courses" element={<CoursesPage />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };

const Loader= () => {
    return(
        <div className="center h-screen w-full bg-secondary ">
            <BiLoaderCircle  
                className="text-5xl text-primary animate-spin"/>
        </div>
    )
}

const ToTop = () => {
    const location = useLocation()
    useEffect(() => {
        scrollTo({
          top: 0,
          behavior: 'smooth'
      })
      }, [location])
      
      return(<></>)
}