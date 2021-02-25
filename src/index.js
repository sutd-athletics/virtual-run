import { unstable_createRoot } from 'react-dom';
import HomePage from './containers/Homepage.js';
import ResultsPage from './containers/Resultspage.js';
import FaqPage from './containers/Faqpage.js';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


var hist = createBrowserHistory();
unstable_createRoot(document.getElementById('root')).render(
<Router history={hist}>
  <Switch>
    <Route path="/virtual-run/faq-page" component={FaqPage} />
    <Route path="/virtual-run/scoreboard-page" component={ResultsPage} />
    <Route path="/virtual-run" component={HomePage} />
  </Switch>
</Router>);


