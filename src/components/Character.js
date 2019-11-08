import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Character() {
    const [charData, setCharData] = React.useState('');
    const { id } = useParams();

    React.useEffect(() => {
        axios
        .get(
            `https://www.potterapi.com/v1/characters/`, {
                params: {
                    key: '$2a$10$OKEfxv1yD0xNpi3MyjhlReqXolRs42bG4Rf8re0f4n2bPHbS9x6lG', 
                    _id: id
                }
            }
        )
        .then(response => {
            console.log(response)
            setCharData(response.data);
            //console.log(response.data[0].bloodStatus); //use cleanup function
        });
    }, [setCharData])
    
    
   if (charData !== '') {
        return (
            <>
                <p>name: {charData[0].name}</p>
                <p>house: {charData[0].house}</p>
                <p>blood status: {charData[0].bloodStatus}</p>
                <p>patronus: {charData[0].patronus}</p>
                <p>wand: {charData[0].wand}</p>
                <p>boggart: {charData[0].boggart}</p>
            </>
        );  
   } else {
       return (
           <></>
       )
   }
     
   
  }

export default Character;