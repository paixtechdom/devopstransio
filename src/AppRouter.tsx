import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import { Footer } from './assets/components/Footer';
import { BiLoaderCircle } from 'react-icons/bi';
import Alert from './assets/components/Alert';
// import BlogsPage from './pages/blogs/BlogsPage';
// import BlogPage from './pages/blogs/BlogPage';


const HomePage = lazy(() => import("./pages/home/page"))
const AboutPage = lazy(() => import("./pages/About/AboutPage"))
// const Services = lazy(() => import("./pages/services/Services"))
const CoursesPage = lazy(() => import("./pages/Courses/CoursesPage"))
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"))


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
                        {/* <Route path="/services" element={<Services />}/> */}
                        <Route path="/courses" element={<CoursesPage />}/>
                        {/* <Route path="/blogs" element={<BlogsPage />}/> */}
                        {/* <Route path="/blogs/:id" element={<BlogPage />}/> */}
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
        <div className="center h-screen w-full bg-primary flex-col gap-5">
            <div className="center h-[90vh] w-11/12 md:w-10/12 xl:w-9/12 bg-secondary bg-opacity-30 flex-col gap-5 rounded-xl">

                <BiLoaderCircle  
                    className="text-5xl text-zinc-900 animate-spin"
                />
                <h1 className="text-zinc-900 font-bold text-4xl lg:text-5xl uppercase">Cloud Transio</h1>
            </div>
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