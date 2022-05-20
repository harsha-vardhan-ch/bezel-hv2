import React from 'react';
import ReactDOM from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import Carousel from './Carousel';

function App() {
    return (
        <div>
            <Carousel />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
