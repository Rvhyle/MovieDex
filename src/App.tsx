import React from 'react';
import {Switch,Route} from 'react-router-dom';
// Components
import Nav from './Components/Nav-Component';
import Footer from './Components/Footer';
// Pages
import Home from './Pages/HomePageContainer';
import MoviePageContainer from "./Pages/MoviesPage";
import TVShowPageContainer from "./Pages/TVShowPageContainer";
//Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/HomePage/PosterGalleryStyled.css';
import './Styles/HomePage/HeaderStyled.css';
import './Styles/poster-styled.css';
import './Styles/MoviePageStyled.css';
import  './Styles/NavStyled.css';
import './Styles/SliderStyles.css'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
          <Route exact path ="/">
              <Home/>
          </Route>
          <Route exact path ="/movies">
              <MoviePageContainer/>
          </Route>
          <Route exact path ="/shows">
              <TVShowPageContainer/>
          </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
