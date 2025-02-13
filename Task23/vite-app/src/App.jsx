import { useState, useEffect } from "react";
import "./assets/App.css";

function App() {
    const [character, setCharacter] = useState(null);
    const [search, setSearch] = useState("people/1/");

    useEffect(() => {
        fetch(`https://swapi.dev/api/${search}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch((error) => console.error("Ошибка при загрузке данных:", error));
    }, [search]);

    return (
        <>
            <h1>SWAPI</h1>

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://swapi.dev/">https://swapi.dev/</a>
                    <form
                        className="d-flex"
                        role="search"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSearch(e.target.elements.query.value);
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

            {character ? (
                <div className="container-window">
                    <div className="modal-content">
                        <div className="modal-header accept">
                            <div className="character-info">
                                <div><strong>Name:</strong> {character.name}</div>
                                <div><strong>Height:</strong> {character.height} cm</div>
                                <div><strong>Mass:</strong> {character.mass} kg</div>
                                <div><strong>Hair Color:</strong> {character.hair_color}</div>
                                <div><strong>Skin Color:</strong> {character.skin_color}</div>
                                <div><strong>Eye Color:</strong> {character.eye_color}</div>
                                <div><strong>Birth Year:</strong> {character.birth_year}</div>
                                <div><strong>Gender:</strong> {character.gender}</div>
                                <div><strong>Homeworld:</strong> <a href={character.homeworld}
                                                                    target="_blank">{character.homeworld}</a></div>

                                <h2>Films:</h2>
                                <ul>
                                    {character.films?.map((film, index) => (
                                        <li key={index}><a href={film} target="_blank">{film}</a></li>
                                    ))}
                                </ul>

                                <h2>Vehicles:</h2>
                                <ul>
                                    {character.vehicles?.map((vehicle, index) => (
                                        <li key={index}><a href={vehicle} target="_blank">{vehicle}</a></li>
                                    ))}
                                </ul>

                                <h2>Starships:</h2>
                                <ul>
                                    {character.starships?.map((starship, index) => (
                                        <li key={index}><a href={starship} target="_blank">{starship}</a></li>
                                    ))}
                                </ul>

                                <h2>URL:</h2>
                                <div><a href={character.url} target="_blank">{character.url}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </>
    );
}

export default App;
