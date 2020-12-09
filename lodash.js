const arrayToPush = ["a","b","c","d"];
//the function have 2 parameter , an array , and a number ;
//implementing the chunk method of lodash library;

function chunk (array,number)  {

    //no side effects on this function 
    const newArray = [];
    
    const  splitElement = () =>  array.map(element => element.split(""));//point free style ? 

    const  sliceElementFirstElement = () =>  splitElement().slice(0,number);
    const sliceElementSecondElement = () => splitElement().slice(number);

    const joinElementOne= () =>   sliceElementFirstElement().join("");
    const joinElementTwo = () => sliceElementSecondElement().join('');

    const resplitedElementOne = () => joinElementOne().split("");
    const resplitedElementTwo = () => joinElementTwo().split("");

    newArray.push(resplitedElementOne(),resplitedElementTwo());

    console.log(newArray);
};

chunk(arrayToPush,3);
