import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>StarWarsAPIIIIIIIIIIII</h1>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://swapi.dev/">https://swapi.dev/</a>
                    <form
                        className="d-flex"
                        role="search"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            name="query"
                            className="form-control"
                            type="search"
                            placeholder="people/1/"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Get info
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default Header;