import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header';
import Platform from './Platform/Platform';
import Home from './Home/Home';
import './App.css';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/platforms' element={<Platform />} />
    <Route path='*' element={<Home />} />
</Routes>
<Footer />
    </div>
  );
}

export default App;
