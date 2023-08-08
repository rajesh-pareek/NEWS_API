import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


const App=(props)=> {

  const [progress, setProgress] = useState(0);
  
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const categories=["general","business","entertainment","health","science","sports","technology"];
  const [query, setQuery] = useState("");

  const setQueryValue = (value) => {
    setQuery(value);
    
  };
  
    return (
      <div style={{backgroundColor:"#000000"}}>
        <Router>
        <Navbar query={query} setQueryValue={ setQueryValue} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={ progress}
       
      />
        <Routes>
          <Route exact path="/"   element={<News setProgress={ setProgress} key="general"  apiKey={ apiKey} pageSize={ pageSize} category="general" country="in"  />}> </Route>
          <Route exact path="/business"   element={<News setProgress={ setProgress} key="business"  apiKey={ apiKey} pageSize={ pageSize} category="business" country="in"  />} > </Route>
          <Route exact path="/entertainment"   element={<News setProgress={ setProgress} key="entertainment" apiKey={ apiKey}  pageSize={ pageSize} category="entertainment" country="in"  />} ></Route>
          <Route exact path="/general"  element={<News setProgress={ setProgress}  key="general" apiKey={ apiKey}  pageSize={ pageSize} category="general" country="in"  />} ></Route>
          <Route exact path="/health"   element={<News setProgress={ setProgress} key="health"  apiKey={ apiKey} pageSize={ pageSize} category="health" country="in"  />} ></Route>
          <Route exact path="/science"   element={<News setProgress={ setProgress} key="science"  apiKey={ apiKey} pageSize={ pageSize} category="science" country="in"  />} ></Route>
          <Route exact path="/sports"   element={<News setProgress={ setProgress} key="sports"  apiKey={ apiKey} pageSize={ pageSize} category="sports" country="in"  />} ></Route>
          <Route exact path="/technology"  element={<News setProgress={ setProgress} key="technology" apiKey={ apiKey}   pageSize={ pageSize} category="technology" country="in"  />} ></Route>
          <Route exact path="/search"    element={<News setProgress={ setProgress} key={ categories.includes( query)? query:"general"}  apiKey={ apiKey} pageSize={ pageSize} category={ categories.includes( query)? query:"general"} country="in"  />}> </Route>
      
        </Routes>

        </Router>
      </div>

    );
  
}

export default App;