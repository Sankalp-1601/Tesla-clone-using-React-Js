import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function App() {
  React.useEffect(() => {
    AOS.init({duration: 2000});
  } , []);
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
