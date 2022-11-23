function fact(x)
{
    if(x == 1)
    {
        return 1
    }
    else
    {
        return x * fact(x-1)
    }
}
//console.log(fact(4));

let myArray = [4,8,10,6,2];

function sumArray(arr)
{
    let result = 0;
    while(arr.length > 0)
    {
        result += arr[0];
        sumArray(arr.shift())        
    }
    return result;
}
//console.log(sumArray(myArray));

function countArray(arr)
{
    let count = 0;
    while(arr.length > 0)
    {
        ++count;
        countArray(arr.shift())        
    }
    return count;
}
//console.log(countArray(myArray));

function maxNumber(arr)
{
    let max = 0;
    while(arr.length > 0)
    {
        if(arr[0] > max)
        {
            max = arr[0]
        }
        countArray(arr.shift())        
    }
    return max;
}
//console.log(maxNumber(myArray));

function quickSort(arr)
{
    if(arr.length < 2)
    {
        return arr;
    }
    else
    {
        let pivot = arr[0]
        let lessArray = []
        let greater = []
        return less + pivot + greater
    }

}

//console.log(quickSort(myArray));