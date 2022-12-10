const numArray = [1, 3, 5, 7, 9];

function binarySearch(list, item){
    let low = 0;
    let high = numArray.length - 1;
    let Null = "Can't be found!"

    while(low <= high){
        let mid = (low + high) / 2;
        let guess = list[mid];

        if (guess == item)
        {
            return mid;
        }
        else if(guess > item)
        {
            high = mid
        }
        else low = mid
    }
    return Null
}

//console.log(binarySearch(numArray, 7))


