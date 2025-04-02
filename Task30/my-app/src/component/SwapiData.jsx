import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/dataThunk.js';

const SwapiData = ({ theme = '' }) => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.swapi);

    useEffect(() => {
        dispatch(fetchUsers("people/1/"));
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchUsers("people/1/"));
    };

    return (
        <div className={`swapi-container ${theme}`}>
            <button
                onClick={handleRefresh}
                className={`swapi-button ${theme}`}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'people/1/'}
            </button>

            {loading && <div className="loading-indicator">Loading data...</div>}
            {error && <div className="error-message">Error: {error}</div>}

            {data && (
                <div className="data-container">
                    <h3>Character Details:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>

                </div>
            )}
        </div>
    );
};

export default SwapiData;