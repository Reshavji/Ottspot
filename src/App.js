import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header';
import Platform from './Platform/Platform';
import Home from './Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/platform' element={<Platform />} />
    <Route path='*' element={<Home />} />
</Routes>
    </div>
  );
}

export default App;
