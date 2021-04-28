import React, { useState } from 'react'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import VideoScroll from './components/VideoScroll/VideoScroll'
import MoreButton from './components/MoreButton/MoreButton'

function App() {

  const [ list, setList ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ pageToken, setPageToken ] = useState('');

  const paginationConst = 10;
  const apiKey = ""; // Add API Key here

  function buttonCLick(searchTerm, e) {
      e.preventDefault();
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCe85OJw9ctJKInRy9IpR-w2OHQfDk2frU" + "&type=video&part=snippet&maxResults=" +  
          paginationConst + "&q=" + searchTerm)
        .then(response => response.json())
        .then(result => {
            setPageToken(result.nextPageToken)
            setList(result.items)             
          })
        .catch(error => error);
    }

  function moreButtonCLick(searchTerm, e, pageToken, list) {
        e.preventDefault();
        if(pageToken==='') {
          fetch("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" +  
            paginationConst + "&q=" + searchTerm)
          .then(response => response.json())
          .then(result => {
              setPageToken(result.nextPageToken)
              setList(result.items)             
            })
          .catch(error => error);
        } else {
          fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCe85OJw9ctJKInRy9IpR-w2OHQfDk2frU" + "&type=video&part=snippet&maxResults=" +  
            paginationConst + "&pageToken=" + pageToken + "&q=" + searchTerm)
          .then(response => response.json())
          .then(result => {
              setPageToken(result.nextPageToken)
              const oldList = list;
              const newList = [...oldList, ...result.items]
              setList(newList)             
            })
          .catch(error => error);
        }
    }

  return (
    <div className="App">
      <SearchBar buttonCLick={buttonCLick} searchTerm={searchTerm} setSearchTerm={setSearchTerm} list={list} setList={setList} pageToken={pageToken} />
      <VideoScroll itemList={list} /> 
      <MoreButton buttonCLick={moreButtonCLick} searchTerm={searchTerm} setSearchTerm={setSearchTerm} list={list} setList={setList} pageToken={pageToken} />    
    </div>
  );
}

export default App;
