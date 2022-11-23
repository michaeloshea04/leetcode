

const numberArray = [5, 3, 6, 2, 10];


function findSmallest(arr){
    let smallest = arr[0];
    let smallestIndex = 0;

    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] < smallest)
        {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex;
}


function SelectionSort(array)
{
    newArray = [];

    for (let i = 0; i < array.Length; i++)
    {
        let smallest = FindSmallestIndex(array);
        newArray.push(array.pop(smallest));
    }
    return newArray;
}


