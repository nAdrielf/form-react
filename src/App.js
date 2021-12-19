// import logo from './logo.svg';
// import './App.css';
import News from './news api/News';
import HookuseState from './bahas';
import FormElem from './elemen form/FormElement';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="nav">
          <ul>
            <li>
              <Link to="/Form">Form!</Link>
            </li>
            <li>
              <Link to="/News">News!</Link>
            </li>
            <li>
              <Link to="/Cycle">Cycle!</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/Form"
            element={
              <div className="container">
                <FormElem />
              </div>
            }
          />
          <Route path="/News" element={<News />} />
          <Route path="/Cycle" element={<HookuseState />} />
        </Routes>
      </Router>
    </div>
  );
}
// belum nampilin vaidasi error, buat nampilin error di beda file komponen
export default App;
