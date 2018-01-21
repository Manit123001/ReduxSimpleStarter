import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUt_0ARxklQMbZU8BO1f8EJ-S0cn5RHmI';


// Create a new component. This component should produce
// some HTMl
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );

}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDom.render(<App />,
    document.querySelector('.container'));