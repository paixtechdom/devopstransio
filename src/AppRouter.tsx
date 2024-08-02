import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import ContactPage from './pages/Contact/ContactPage';
import TrainingPage from './pages/Training/TrainingPage';
import { Footer } from './assets/components/Footer';


const HomePage = lazy(() => import("./pages/home/page"))


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<>Loading</>}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/trainings" element={<TrainingPage />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };