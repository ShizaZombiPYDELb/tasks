import React, { useEffect, useState } from 'react';
import emojj from './Emoj.js';

const Winner = () => {
    const [emojList, setEmojList] = useState(() =>
        JSON.parse(localStorage.getItem('emojj')) || [...emojj]
    );

    const [winner, setWinner] = useState(null);

    useEffect(() => {
        localStorage.setItem('emojj', JSON.stringify(emojList));
    }, [emojList]);

    const handleVoises = (id) => {
        setEmojList((prevEmojList) =>
            prevEmojList.map((emoji) =>
                emoji.id === id ? { ...emoji, value: emoji.value + 1 } : emoji
            )
        );
    };

    const handleFindWinner = () => {
        const maxVotes = Math.max(...emojList.map((item) => item.value));
        const foundWinner = emojList.find((emoji) => emoji.value === maxVotes);
        setWinner(foundWinner);
    };

    const handleClearAll = () => {
        setEmojList((prevEmojList) => prevEmojList.map((item) => ({ ...item, value: 0 })));
        setWinner(null);
        localStorage.removeItem('emojj');
    };

    return (
        <div>
            <section className="booklist">
                {emojList.map((emoji) => (
                    <div key={emoji.id} className="book">
                        <h2 onClick={() => handleVoises(emoji.id)}>{emoji.name}</h2>
                        <p>Голоса: {emoji.value}</p>
                    </div>
                ))}
            </section>

            <div className="book">
                <button onClick={handleClearAll}>Почистить голоса</button>
            </div>

            <div className="book">
                <button onClick={handleFindWinner}>Подсчитать победителя</button>
            </div>

            <section>
                {winner ? <h3>Победитель: {winner.name}</h3> : <h3>Победитель еще не выбран</h3>}
            </section>
        </div>
    );
};

export default Winner;
