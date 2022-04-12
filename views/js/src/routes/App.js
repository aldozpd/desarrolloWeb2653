import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import login from '../page/login';
function App() {
  return (
    <BrowserRouter>
      <switch> 
        <Route exact path="/" component={login}/>
      </switch>)
    </BrowserRouter>
  );
}

export default App;
