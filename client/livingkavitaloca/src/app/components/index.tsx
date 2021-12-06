import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../../styles/app.css';
import AboutMe from './AboutMe';
import AppFrame from './AppFrame';
import Home from './Main';

const App: React.FC = () => {
    return (
        <HashRouter>
            <AppFrame>
                <Switch>
                    <Route exact path={'/'} render={() => <Home />} />
                    <Route path="/about-me" render={() => <AboutMe />} />
                </Switch>
            </AppFrame>
        </HashRouter>
    );
};

render(<App />, document.getElementById('root'));
