import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
