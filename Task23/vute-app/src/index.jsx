import React from "react";
import { createRoot } from "react-dom/client";

const character = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
    ],
    vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
    ],
    starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
    ],
    created: "2014-12-09T13:50:51.6440002",
    edited: "2014-12-20T21:17:56.8910002",
    url: "https://swapi.dev/api/people/1/",
};

const App = () => (
    <div>
        <h1>{character.name}</h1>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>
            Homeworld:{" "}
            <a href={character.homeworld} target="_blank" rel="noopener noreferrer">
                {character.homeworld}
            </a>
        </p>

        <h2>Films:</h2>
        <ul>
            {character.films.map((film, index) => (
                <li key={index}>
                    <a href={film} target="_blank" rel="noopener noreferrer">
                        {film}
                    </a>
                </li>
            ))}
        </ul>

        <h2>Vehicles:</h2>
        <ul>
            {character.vehicles.map((vehicle, index) => (
                <li key={index}>
                    <a href={vehicle} target="_blank" rel="noopener noreferrer">
                        {vehicle}
                    </a>
                </li>
            ))}
        </ul>

        <h2>Starships:</h2>
        <ul>
            {character.starships.map((starship, index) => (
                <li key={index}>
                    <a href={starship} target="_blank" rel="noopener noreferrer">
                        {starship}
                    </a>
                </li>
            ))}
        </ul>

        <p>Created: {character.created}</p>
        <p>Edited: {character.edited}</p>

        <h2>URL:</h2>
        <p>
            <a href={character.url} target="_blank" rel="noopener noreferrer">
                {character.url}
            </a>
        </p>
    </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
