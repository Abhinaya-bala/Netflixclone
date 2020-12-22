import React from 'react';
import './App.css'
import Row from './Row';
import Banner from './Banner'
import NavBar from "./NavBar"
import requests from './request';
function App() {
  return (
    <div className="app">

      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="History" fetchUrl={requests.fetchHistory} />
      <Row title="Music" fetchUrl={requests.fetchMusic} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="ScienceFiction" fetchUrl={requests.fetchScienceFiction} />
    </div>
  );
}

export default App;
