import React from 'react';

function Search(props) {
    return (
        <div className="input" style={{ justifyContent: 'center', display: 'flex' }}>
            <input
                type="text"
                onChange={props.handleInput}
                onKeyPress={props.search}
                placeholder="Search for a movie..."
            />
        </div>
    );
}
export default Search;
