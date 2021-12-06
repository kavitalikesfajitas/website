import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '../../styles/app.css';
import AboutMe from './AboutMe';
import AppFrame from './AppFrame';
import Main from './Main';

const App: React.FC = () => {
    return (
        <HashRouter>
            <AppFrame>
                <Routes>
                    <Route path={'/'} element={<Main />} />
                    <Route path={'/about-me'} element={<AboutMe />} />
                </Routes>
            </AppFrame>
        </HashRouter>
    );
};

export default App;
