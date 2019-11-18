import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function CharactersHouses({ usersHouse }) {
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
                if (usersHouse === house) {
                    let addOn = {
                        _id: 'wingardumleviosa',
                        name: sessionStorage.getItem('username')
                    }
                    const updatedDataHistory = [...response.data, addOn]
                    setData(updatedDataHistory);
                }
            });
    }
   
       return (
        <>
            <p>See the characters that belong to each house!</p>
            <Button
                variant="outline-warning"
                onClick={() => {
                    getCharacters('Gryffindor');
                }}
            >
                Gryffindor
            </Button>

            <Button
                variant="outline-warning"
                onClick={() => {
                    getCharacters('Slytherin');
                }}
            >
                Slytherin
            </Button>

            <Button
                variant="outline-warning"
                onClick={() => {
                    getCharacters('Hufflepuff');
                }}
            >
                Hufflepuff
            </Button>

            <Button
                variant="outline-warning"
                onClick={() => {
                    getCharacters('Ravenclaw');
                }}
            >
                Ravenclaw
            </Button>



            <div>
                {
                    (data !== '')
                    ? data.map(datum => (
                        // <p>{datum.name}</p>
                        <p>
                            <Link to={`/character/${datum._id}`} class="link">{datum.name}</Link>
                        </p>
                    ))
                    : null
                }
            </div>
        </>
       ); 
   
  }

export default CharactersHouses;