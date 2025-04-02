import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../store/starWarsSlice.js';

const ClearButton = () => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearData());
    };

    return (
        <button
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear all API data"
        >
            Clear All Data
        </button>
    );
};

export default ClearButton;