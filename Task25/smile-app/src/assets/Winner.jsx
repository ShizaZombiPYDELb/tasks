import React from 'react';
import emojj from './Emoj.js';

class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojj: JSON.parse(localStorage.getItem('emojj')) || [...emojj],
            winner: null,
        };
    }

    componentDidMount() {
        const savedEmojj = JSON.parse(localStorage.getItem('emojj'));
        if (savedEmojj) {
            this.setState({ emojj: savedEmojj });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.emojj !== this.state.emojj) {
            localStorage.setItem('emojj', JSON.stringify(this.state.emojj));
        }
    }

    handleVote = (id) => {
        this.setState((prevState) => {
            const updatedEmojj = prevState.emojj.map((emoji) =>
                emoji.id === id ? { ...emoji, value: emoji.value + 1 } : emoji
            );
            return { emojj: updatedEmojj };
        });
    };

    findWinner = () => {
        const maxVotes = Math.max(...this.state.emojj.map((item) => item.value));
        return this.state.emojj.find((item) => item.value === maxVotes);
    };

    clearVoices = () => {
        const resetEmojj = this.state.emojj.map((item) => ({ ...item, value: 0 }));
        this.setState({ emojj: resetEmojj, winner: null });
        localStorage.removeItem('emojj');
    };

    handleFindWinner = () => {
        this.setState({ winner: this.findWinner() });
    };

    render() {
        const { emojj, winner } = this.state;

        return (
            <div>
                <section className="booklist">
                    {emojj.map((emoji) => (
                        <div key={emoji.id} className="book">
                            <h2 onClick={() => this.handleVote(emoji.id)}>{emoji.name}</h2>
                            <p>Голоса: {emoji.value}</p>
                        </div>
                    ))}
                </section>

                <div className="book">
                    <button onClick={this.clearVoices}>Почистить голоса</button>
                </div>

                <div className="book">
                    <button onClick={this.handleFindWinner}>Подсчитать победителя</button>
                </div>

                <section>
                    {winner ? <h3>Победитель: {winner.name}</h3> : <h3>Победитель еще не выбран</h3>}
                </section>
            </div>
        );
    }
}

export default Winner;
