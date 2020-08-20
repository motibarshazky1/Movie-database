import React from 'react';
import Result from './Result';

function Results({ results, openPopUp }) {
    return (
        <section className="results">
            {results.map((result) => (
                <Result result={result} key={result.imdbID} openPopUp={openPopUp} />
            ))}
        </section>
    );
}

export default Results;
