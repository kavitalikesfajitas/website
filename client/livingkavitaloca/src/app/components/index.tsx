import React from 'react';
import { render } from 'react-dom';
import MainApp from './App';

const App: React.FC = () => {
    return <MainApp />;
};

render(<App />, document.getElementById('root'));
