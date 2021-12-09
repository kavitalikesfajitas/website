import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../../styles/app.css';
import AppFrame from './AppFrame';
import Home from './MainLanding';
import Portfolio from './Portfolio';

const App: React.FC = () => {
    return (
        <HashRouter>
            <AppFrame>
                <Switch>
                    <Route path="/portfolio" render={() => <Portfolio />} />
                    <Route path={'/'} render={() => <Home />} />
                </Switch>
            </AppFrame>
        </HashRouter>
    );
};

render(<App />, document.getElementById('root'));
