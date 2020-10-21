import React from 'react';
import {withRouter} from 'react-router-dom'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default withRouter(App);
