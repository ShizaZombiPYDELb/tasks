import React, { Component } from 'react';
import Winner from './assets/Winner';
import emojj from './assets/Emoj';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojj: [...emojj], // Голоса теперь в главном состоянии
        };
    }

    render() {
        return (
            <div>
                <Winner emojj={this.state.emojj} />
            </div>
        );
    }
}

export default App;
