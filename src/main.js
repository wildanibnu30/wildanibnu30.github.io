import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.js';
import 'remixicon/fonts/remixicon.css';
import Footer from './components/Footer.js';
import { Preloader } from './components/Preloader.js';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const root = createRoot(document.getElementById('root'));
root.render(
  React.createElement(
    StrictMode,
    null,
    React.createElement(Preloader, null),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(Navbar, null),
      React.createElement(App, null),
      React.createElement(Footer, null)
    )
  )
);
