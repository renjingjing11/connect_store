import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import RouterView from "./router/RouterView";
import routes from "./router/router.config.js";

function App() {
  return (
    <div className="App">
        <Router>
            <RouterView routes={routes}></RouterView>
        </Router>
    </div>
  );
}

export default App;
