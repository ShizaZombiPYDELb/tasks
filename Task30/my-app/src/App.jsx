import React from 'react';
import Header from './component/Header';
import SwapiData from "./component/SwapiData.jsx";
import ClearButton from "./component/ClearButton.jsx";

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <SwapiData />
                <ClearButton />
            </main>
        </div>
    );
};

export default App;