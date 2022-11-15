const myArray = [1,1,2];

function RemoveDuplicate(numsArray){
    let index1 = 0;
    let index2 = 1;

    while(index2 <= numsArray.length - 1)
    {
        if(numsArray[index1] == numsArray[index2])
        {
            index2++
        }
        else
        {
            numsArray[++index1] = numsArray[index2++];
        }
        return ++index1;

    }

}

console.log(RemoveDuplicate(myArray));