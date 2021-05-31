import IndexPage from "./components/IndexPage"
import ContactPage from "./components/ContactPage"
import AboutPage from "./components/AboutPage"
import {Route , HashRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={IndexPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </div>         
        </Router>
        
    </div>
  );
}

export default App;
