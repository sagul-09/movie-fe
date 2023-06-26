import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetAllMoviesComponent from "./components/GetAllMoviesComponent/GetAllMoviesComponent";
import AddNewMovieComponent from "./components/AddNewMovieComponent/AddNewMovieComponent";
import MovieSuggestionComponent from "./components/MovieSuggestionComponent/MovieSuggestionComponent";
import logo from "./assets/images/logo.png";
function App() {
  return (
    <Router>
      <div className="container-master">
        <div className="title">
          <h1>Movie Suggestion App</h1>
          <img src={logo} />
        </div>

        <nav className="nav-menu">
          <button>
            <Link style={{ textDecoration: "none" }} to="/">
              HOME
            </Link>
          </button>
          <button>
            <Link style={{ textDecoration: "none" }} to="/admin/add">
              ADD MOVIE
            </Link>{" "}
          </button>
          <button>
            <Link style={{ textDecoration: "none" }} to="/suggest">
              GET SUGGESTION
            </Link>{" "}
          </button>
        </nav>
        <Routes>
          <Route exact path="/" element={<GetAllMoviesComponent />}></Route>
          <Route path="/admin/add" element={<AddNewMovieComponent />}></Route>
          <Route path="/suggest" element={<MovieSuggestionComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
