import React from 'react';

function PopUp({ closePopUp, selected }) {
    return (
        <div className="popup">
            <div className="content">
                <h2>
                    {selected.Title} <span>({selected.Year})</span>
                </h2>
                <p className="rating">
                    Rating: {selected.imdbRating} <br />
                    Runtime: {selected.Runtime}
                </p>
                <div className="plot">
                    <img alt="" src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopUp}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default PopUp;
