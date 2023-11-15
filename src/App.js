import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import Copyright from './components/Copyright';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Copyright />

      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path='/blog' element= {<BlogPage />} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;