import React from 'react';
import MainApp from './App'
import { render } from 'react-dom';

const App: React.FC = () => {
    return <MainApp/>;
};

render(<App />, document.getElementById('root'));
