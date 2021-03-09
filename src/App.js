import './App.css';
import Header from './Header.js';
import Topics from './Topics.js';
import Box from './Box.js';
import Images from './Images.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Topics />
      <div className="content">
      <Box />
      <Images />
      </div>
    </div>
  );
}

export default App;
