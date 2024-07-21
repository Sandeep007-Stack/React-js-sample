import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './common/Layout';

const root = ReactDOM.createRoot(document.getElementById('sandeep'));
root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout> } />
          <Route path='/about' element={<Layout><About /> </Layout>} />
        </Routes>
      </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
