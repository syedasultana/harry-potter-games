import React from 'react';

import gryffindorLogo from '..//images//gryffindorLogo.jpg'
import slytherinLogo from '..//images//slytherinLogo.png'
import hufflepuffLogo from '..//images//hufflepuffLogo.jpeg'
import ravenclawLogo from '..//images//ravenclawLogo.jpg'

import gryffindorGif from '..//images//gryffindorGif.gif'
import slytherinGif from '..//images//slytherinGif.gif'
import hufflepuffGif from '..//images//hufflepuffGif.gif'
import ravenclawGif from '..//images//ravenclawGif.gif'

const houses = [
    {
        houseName: 'Gryffindor',
        commonRoomLocation: '7th Floor on Gryffindor Tower',
        description: 'A Gryffindor is brave and chivalrous. You share the same house as Harry Potter, the Weasley Twins and The Marauders.',
        founder: 'Godric Gryffindor',
        houseLogo: gryffindorLogo,
        gif: gryffindorGif
    },
    {
        houseName: 'Slytherin',
        commonRoomLocation: 'In the dungeons near the lake',
        description: 'A Slytherin is cunning and ambitious with a hunger for power. You share the same house as Draco Malfoy, Tom Riddle and Severus Snape.',
        founder: 'Salazaar Slytherin',
        houseLogo: slytherinLogo,
        gif: slytherinGif
    },
    {
        houseName: 'Hufflepuff',
        commonRoomLocation: 'Near the kitchens, resembles a Hobbit hole',
        description: 'A Hufflepuff is humble and benevolent. You share the same house as Nymphadora Tonks, Cedric Diggory and Pomona Sprout.',
        founder: 'Helga Hufflepuff',
        houseLogo: hufflepuffLogo,
        gif: hufflepuffGif
    },
    {
        houseName: 'Ravenclaw',
        commonRoomLocation: '5th Floor on Ravenclaw Tower',
        description: 'A Ravenclaw is intelligent and typically good-looking. You share the same house as Luna Lovegood, Cho Chang and Gilderoy Lockhart.',
        founder: 'Rowena Ravenclaw',
        houseLogo: ravenclawLogo,
        gif: ravenclawGif
    },
    {
        houseName: 'noHouse',
        commonRoomLocation: 'null',
        description: 'null',
        founder: 'null',
        houseLogo: 'null',
        gif: ''
    }
]


function mostFrequentElement(array) {
    if (array.length == 0)
        return null;

    var modeMap = {},
        maxEl = array[0],
        maxCount = 1;

    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount) {
            maxEl += '&' + el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function Result({ userTraits, setUserTraits }) {
    const [usersHouse, setUsersHouse] = React.useState('noHouse');
    const [hasBeenSorted, setHasBeenSorted] = React.useState(false);

    //if userTraits contains any "" elements then get rid of them 
    if (userTraits.includes('')) {
        const valueToRemove = '';
        setUserTraits(userTraits.filter(item => item !== valueToRemove));
    } 

    //cancel out opposite traits e.g if contains both friendly and nonfriendly then remove both for the amount they occur
    if (userTraits.includes('friendly') && userTraits.includes('nonfriendly')) {
        //console.log('friendly occurs ' + getOccurrence(userTraits, 'friendly') + ' times');
        if (getOccurrence(userTraits, 'friendly') == getOccurrence(userTraits, 'nonfriendly')) {
            const valueToRemove1 = 'friendly';
            const valueToRemove2 = 'nonfriendly';
            let tempArray = userTraits.filter(item => item !== valueToRemove1)
            setUserTraits(tempArray.filter(item => item !== valueToRemove2));
        }
    }
    if (userTraits.includes('status') && userTraits.includes('nonstatus')) {
        if (getOccurrence(userTraits, 'status') == getOccurrence(userTraits, 'nonstatus')) {
            const valueToRemove1 = 'status';
            const valueToRemove2 = 'nonstatus';
            let tempArray = userTraits.filter(item => item !== valueToRemove1)
            setUserTraits(tempArray.filter(item => item !== valueToRemove2));
        }
    }

    
    React.useEffect(() => {
        //check if gryffindor or slytherin
        if (mostFrequentElement(userTraits) == 'status') {
            let valueToRemove = 'status';
            let tempArray = userTraits.filter(item => item !== valueToRemove);
            if (mostFrequentElement(tempArray) == 'friendly' | (tempArray.includes('reckless') && tempArray.includes('friendly'))) {
                setUsersHouse('Gryffindor'); //output gryffindor
                setHasBeenSorted(true);
            } else if (mostFrequentElement(tempArray) == 'nonfriendly' && tempArray.includes('manipulative')) {
                setUsersHouse('Slytherin'); //output slytherin
                setHasBeenSorted(true);
            }
        } else if (mostFrequentElement(userTraits) == 'friendly') { //check if hufflepuff
            let valueToRemove = 'friendly';
            let tempArray = userTraits.filter(item => item !== valueToRemove);
            if (mostFrequentElement(tempArray) == 'nonstatus') {
                setUsersHouse('Hufflepuff'); //output hufflepuff
                setHasBeenSorted(true);
            } else if (tempArray.includes('independent') && tempArray.includes('betterThanOthers')) {
                setUsersHouse('Ravenclaw'); //output ravenclaw
                setHasBeenSorted(true);
            } else if (tempArray.includes('status')) {
                setUsersHouse('Gryffindor'); //output gryffindor
                setHasBeenSorted(true);
            }
        } else if (userTraits.includes('nonfriendly') && userTraits.includes('manipulative') && userTraits.includes('status')) {
            setUsersHouse('Slytherin'); //output slytherin
            setHasBeenSorted(true);
        } else if (userTraits.includes('independent') && userTraits.includes('betterThanOthers')) {
            setUsersHouse('Ravenclaw'); //output ravenclaw
            setHasBeenSorted(true);
        } else if (userTraits.includes('friendly') && userTraits.includes('nonstatus')) {
            setUsersHouse('Hufflepuff'); //output hufflepuff
            setHasBeenSorted(true);
        } else if ((userTraits.includes('reckless') | userTraits.includes('friendly')) && userTraits.includes('status')) {
            setUsersHouse('Gryffindor'); //output gryffindor
            setHasBeenSorted(true);
        } else {
            console.log('no house'); //you could ask another question
            //setUsersHouse('house not found')
            setHasBeenSorted(true);
        }
    }, [userTraits])
    
    console.log(usersHouse)
    return (
      <>
        <div>
            {
                (hasBeenSorted)
                ? <div>
                    <h1>Your House Is {usersHouse}!!!</h1>
                    <img src={(houses.find(x => x.houseName === usersHouse)).houseLogo} height="270" width="210"></img>
                    <h4>Founder: {(houses.find(x => x.houseName === usersHouse)).founder}</h4>
                    <p>{(houses.find(x => x.houseName === usersHouse)).description}</p>
                    <p>Common room location: {(houses.find(x => x.houseName === usersHouse)).commonRoomLocation}</p>
                    <img src={(houses.find(x => x.houseName === usersHouse)).gif} height="200" width="380"></img>
                  </div>
                : <p>You are being sorted</p>
            }
        </div>
        
       
        
      </>
    );
  }


export default Result;