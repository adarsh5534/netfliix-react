
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
       
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
        <Row isLargerow={true} title="Trending" fetchUrl={requests.fetchTrending} />
        <Row  title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action  " fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy " fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror " fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
       
      </header>
    </div>
  );
}

export default App;
