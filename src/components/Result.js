import React from 'react';

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

function Result({ userTraits, setUserTraits }) {
    const [usersHouse, setUsersHouse] = React.useState('noHouse');

    //if userTraits contains any "" elements then get rid of them 
    if (userTraits.includes('')) {
        const valueToRemove = '';
        setUserTraits(userTraits.filter(item => item !== valueToRemove));
    } 
    
    React.useEffect(() => {
        //check if gryffindor or slytherin
        if (mostFrequentElement(userTraits) == 'status') {
            let valueToRemove = 'status';
            let tempArray = userTraits.filter(item => item !== valueToRemove);
            if (mostFrequentElement(tempArray) == 'friendly' | (tempArray.includes('reckless') && tempArray.includes('friendly'))) {
                setUsersHouse('Gryffindor'); //output gryffindor
            } else if (mostFrequentElement(tempArray) == 'nonfriendly' && tempArray.includes('manipulative')) {
                setUsersHouse('Slytherin'); //output slytherin
            }
        } else if (mostFrequentElement(userTraits) == 'friendly') { //check if hufflepuff
            let valueToRemove = 'friendly';
            let tempArray = userTraits.filter(item => item !== valueToRemove);
            if (mostFrequentElement(tempArray) == 'nonstatus') {
                setUsersHouse('Hufflepuff'); //output hufflepuff
            } else if (tempArray.includes('independent') && tempArray.includes('betterThanOthers')) {
                setUsersHouse('Ravenclaw'); //output ravenclaw
            }
        } else if (userTraits.includes('nonfriendly') && userTraits.includes('manipulative') && userTraits.includes('status')) {
            setUsersHouse('Slytherin'); //output slytherin
        } else if (userTraits.includes('independent') && userTraits.includes('betterThanOthers')) {
            setUsersHouse('Ravenclaw'); //output ravenclaw
        } else if (userTraits.includes('friendly') && userTraits.includes('nonstatus')) {
            setUsersHouse('Hufflepuff'); //output hufflepuff
        } else {
            console.log('no house'); //you could ask another question
        }
    }, [userTraits])
    

    return (
      <>
        <p>Your traits: {userTraits}</p> 
        <p>Your house: {usersHouse}</p>
      </>
    );
  }

export default Result;