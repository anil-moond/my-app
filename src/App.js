import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import Hero from './components/homepage/Hero';

function App() {
  return (
    <div className='max-w-[1200px] mx-auto px-4 md:bg-blue-800 bg-orange-400 min-h-screen md:flex'>
      <NavBar/>
     <Hero/>
    </div>
  );
}

export default App;
