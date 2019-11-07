import React from 'react';
import axios from "axios";

function CharactersHouses({ }) {
    const [data, setData] = React.useState('');
    //const [result, setResult] = React.useState('');

    function getCharacters(house) {
        axios
            .get(
                `https://www.potterapi.com/v1/characters/`, {
                    params: {
                        key: '$2a$10$OKEfxv1yD0xNpi3MyjhlReqXolRs42bG4Rf8re0f4n2bPHbS9x6lG', 
                        house: house
                    }
                }
            )
            .then(response => {
                console.log(response)
                setData(response.data);
            });
    }
   
       return (
        <>
            <p>see the characters that belong to each house</p>
            <button
                onClick={() => {
                    getCharacters('Gryffindor');
                }}
                class="buttonStyling"
            >
                Gryffindor
            </button>

            <button
                onClick={() => {
                    getCharacters('Slytherin');
                }}
                class="buttonStyling"
            >
                Slytherin
            </button>

            <button
                onClick={() => {
                    getCharacters('Hufflepuff');
                }}
                class="buttonStyling"
            >
                Hufflepuff
            </button>

            <button
                onClick={() => {
                    getCharacters('Ravenclaw');
                }}
                class="buttonStyling"
            >
                Ravenclaw
            </button>



            <div>
                {
                    (data !== '')
                    ? data.map(datum => (
                        <div>
                            <p>{datum.name}</p>
                        </div>
                    ))
                    : <p>no data to display</p>
                }
            </div>
        </>
       ); 
   
  }

export default CharactersHouses;