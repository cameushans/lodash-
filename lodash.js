
const arrayToPush = ["a","b","c","d"]

//the function have 2 parameter , an array , and a number ;
//implementing the chunk method of lodash library

function chunk (array,number){

    const newArray = [];
  
    const  splitElement = () =>  array.map(element => element.split(""));

    const  sliceElementFirstElement = () =>  {
        const newArrayWithSplittedValue = splitElement();
        return newArrayWithSplittedValue.slice(0,number);
    }

    const sliceElementSecondElement = () => {
        const newArrayWithSplittedValue = splitElement();
        return  newArrayWithSplittedValue.slice(number);
    }

    const joinElementOne= () =>   sliceElementFirstElement().join("");
    const joinElementTwo = () => sliceElementSecondElement().join('');
  

    const resplitedElementOne = () => joinElementOne().split("");
    const resplitedElementTwo = () => joinElementTwo().split("")


    newArray.push(resplitedElementOne());
    newArray.push(resplitedElementTwo());

    console.log(newArray)
};

chunk(arrayToPush,2)