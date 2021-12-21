import './App.css';
import {Route, Routes} from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import Photos from './components/Photos';
import Settings from './components/Settings';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="Main">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
