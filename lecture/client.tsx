import React from 'react';
import { render } from 'react-dom';
import App from './layouts/App';

const App = () => {
    return <div>Hello, react+typescript2</div>;
};

render(
    <App />,
    document.querySelector('#app')
);
