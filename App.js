import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./components/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
    </div>
  );
}

export default App;
