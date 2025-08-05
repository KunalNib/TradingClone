import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import AboutPage from './landing_page/about/AboutPage';
import NotFound from './landing_page/NotFound';
import Login from "./landing_page/LoginPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
  <ToastContainer/>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
  </BrowserRouter>
)
