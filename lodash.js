const arrayToPush = ["a","b","c","d"];
//implementing the chunk method of lodash library;

function chunk (array,number)  {
    //no side effects on this function 
    const newArray = [];

    const  sliceElementFirstElement = () =>  array.slice(0,number);
    const sliceElementSecondElement = () => array.slice(number);

    newArray.push(sliceElementFirstElement(),sliceElementSecondElement())
  
      console.log(newArray);
  };

chunk(arrayToPush,2);
