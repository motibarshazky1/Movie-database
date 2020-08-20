import React, { useState } from 'react';
import './index.css';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';
import PopUp from './components/PopUp';

function App() {
    const apiURL = 'http://www.omdbapi.com/?apikey=63d1ddf2';

    const [state, setState] = useState({
        s: '',
        results: [],
        selected: {},
    });

    const search = (event) => {
        if (event.key === 'Enter') {
            axios(apiURL + '&s=' + state.s).then(({ data }) => {
                let arrayResults = data.Search;
                setState((prevState) => {
                    return { ...prevState, results: arrayResults };
                });
            });
        }
    };

    const openPopUp = (id) => {
        axios(apiURL + '&i=' + id).then(({ data }) => {
            let result = data;
            setState((prevState) => {
                return { ...prevState, selected: result };
            });
        });
    };

    const closePopUp = () => {
        setState((prevState) => {
            return { ...prevState, selected: {} };
        });
    };
    const handleInput = (event) => {
        let s = event.target.value;
        setState((prevState) => {
            return { ...prevState, s: s };
        });
    };

    return (
        <div className="app">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />
                <Results results={state.results} openPopUp={openPopUp} />
                {typeof state.selected.Title !== 'undefined' ? (
                    <PopUp selected={state.selected} closePopUp={closePopUp} />
                ) : (
                    false
                )}
            </main>
        </div>
    );
}

export default App;
